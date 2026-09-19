"use server";

import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// RLS is disabled on company_profile — publishable key is sufficient for server actions.
// We use NEXT_PUBLIC_SUPABASE_ANON_KEY (classic eyJ JWT) if available,
// falling back to the PUBLISHABLE_KEY for newer Supabase projects.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export type ProfileFormState = {
  success: boolean;
  message: string;
  operation?: "created" | "updated";
};

export async function saveCompanyProfile(
  _prevState: ProfileFormState,
  formData: FormData
): Promise<ProfileFormState> {
  // 1. Get the currently authenticated Clerk user
  const { userId } = await auth();
  if (!userId) {
    return { success: false, message: "You must be signed in to save your profile." };
  }

  // 2. Validate required fields
  const company_name = (formData.get("company_name") as string)?.trim();
  const founder_name = (formData.get("founder_name") as string)?.trim();

  if (!company_name || !founder_name) {
    return { success: false, message: "Company name and founder name are required." };
  }

  // 3. Check whether a record already exists for this Clerk user
  const { data: existing, error: fetchError } = await supabase
    .from("company_profile")
    .select("id")
    .eq("clerk_auth_key", userId)
    .maybeSingle(); // returns null (not an error) when no row found

  if (fetchError) {
    console.error("[saveCompanyProfile] Fetch check error:", fetchError);
    return {
      success: false,
      message: `Could not verify existing profile: ${fetchError.message}`,
    };
  }

  // 4. Build shared field payload (clerk_auth_key only needed on INSERT)
  const fields = {
    company_name,
    website_url:   (formData.get("website_url")   as string)?.trim() || null,
    category:      (formData.get("category")       as string)         || null,
    description:   (formData.get("description")   as string)?.trim() || null,
    founder_name,
    founder_email: (formData.get("founder_email") as string)?.trim() || null,
    linkedin_url:  (formData.get("linkedin_url")  as string)?.trim() || null,
  };

  // 5a. UPDATE — record found, patch it in place
  if (existing) {
    const { error: updateError } = await supabase
      .from("company_profile")
      .update(fields)
      .eq("clerk_auth_key", userId);

    if (updateError) {
      console.error("[saveCompanyProfile] Update error:", updateError);
      return { success: false, message: `Failed to update profile: ${updateError.message}` };
    }

    revalidatePath("/dashboard/profile");
    return { success: true, message: "Profile updated successfully! ✅", operation: "updated" };
  }

  // 5b. INSERT — no record found, create a fresh one with the Clerk ID
  const { error: insertError } = await supabase
    .from("company_profile")
    .insert({ clerk_auth_key: userId, ...fields });

  if (insertError) {
    console.error("[saveCompanyProfile] Insert error:", insertError);
    return { success: false, message: `Failed to create profile: ${insertError.message}` };
  }

  revalidatePath("/dashboard/profile");
  return { success: true, message: "Profile created successfully! 🎉", operation: "created" };
}

// Fetch the existing profile for the current user (called from the RSC to pre-fill the form)
export async function getCompanyProfile() {
  const { userId } = await auth();
  if (!userId) return null;

  const { data, error } = await supabase
    .from("company_profile")
    .select("*")
    .eq("clerk_auth_key", userId)
    .maybeSingle();

  if (error) return null;
  return data;
}
