import type { Metadata } from "next";
import { Globe } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import DirectoryClient from "@/components/DirectoryClient";
import type { CompanyProfile } from "@/components/StartupCard";

export const metadata: Metadata = {
  title: "Startup Directory — AfriHub Founders",
  description:
    "Discover the visionaries shaping tomorrow's high-growth startups. Browse Africa's most comprehensive founder and startup directory.",
};

// ISR: revalidate every 60 s so new profiles appear promptly
export const revalidate = 60;

async function getAllProfiles(): Promise<CompanyProfile[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("company_profile")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[DirectoryPage] Supabase fetch error:", error.message);
    return [];
  }

  return (data ?? []) as CompanyProfile[];
}

export default async function DirectoryPage() {
  const profiles = await getAllProfiles();

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#F0F9FF" }}>

      {/* ── Dark Hero Header (static RSC) ── */}
      <div
        style={{ backgroundColor: "#0F172A" }}
        className="pb-6 pt-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="section-badge">
              <Globe size={12} />
              African Startup Ecosystem
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Discover the{" "}
            <span className="text-gradient-cyan">Visionaries</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
            Shaping tomorrow's high-growth startups. Browse{" "}
            <strong className="text-white">{profiles.length}</strong> verified
            companies across Africa's fastest-growing sectors.
          </p>
        </div>
      </div>

      {/* ── Interactive client section: search + filters + grid ── */}
      <DirectoryClient profiles={profiles} />
    </div>
  );
}
