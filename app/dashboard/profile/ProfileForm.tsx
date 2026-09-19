"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { saveCompanyProfile, ProfileFormState } from "./actions";
import {
  Building2,
  Globe,
  Tag,
  FileText,
  User,
  Mail,
  Linkedin,
  Loader2,
  Save,
  RefreshCw,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
type ExistingProfile = {
  company_name?: string | null;
  website_url?: string | null;
  category?: string | null;
  description?: string | null;
  founder_name?: string | null;
  founder_email?: string | null;
  linkedin_url?: string | null;
};

const CATEGORIES = [
  "Fintech", "Healthtech", "Edtech", "Agritech",
  "E-commerce", "Logistics", "SaaS", "CleanTech",
  "Media & Entertainment", "Other",
];

const initialState: ProfileFormState = { success: false, message: "" };

// ── Submit button — uses useFormStatus for real pending state ─────────────────
// Must be a separate component so useFormStatus can read the parent <form>'s state
function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      id="profile-save-btn"
      type="submit"
      disabled={pending}
      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
      style={{ minWidth: "11rem", transform: pending ? "none" : undefined }}
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          {isEditing ? "Updating…" : "Saving…"}
        </>
      ) : isEditing ? (
        <>
          <RefreshCw size={16} />
          Update Profile
        </>
      ) : (
        <>
          <Save size={16} />
          Save Profile
        </>
      )}
    </button>
  );
}

// ── Main form component ───────────────────────────────────────────────────────
export default function ProfileForm({
  existing,
}: {
  existing: ExistingProfile | null;
}) {
  const isEditing = existing !== null;
  const [state, formAction] = useActionState(saveCompanyProfile, initialState);

  // Fire a Sonner toast whenever the server action returns a result
  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(
        state.operation === "updated"
          ? "Profile updated successfully!"
          : "Profile created successfully!",
        {
          description: "Your listing is now live in the AfriHub directory.",
          icon: "🚀",
        }
      );
    } else {
      toast.error("Something went wrong", {
        description: state.message,
      });
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-8" noValidate>

      {/* ── Section 1: Company Details ── */}
      <section className="glass-card rounded-2xl overflow-hidden">
        <div
          className="flex items-center gap-3 px-6 py-4"
          style={{
            background: "linear-gradient(90deg, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.03) 100%)",
            borderBottom: "1px solid #BAE6FD",
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.25)" }}
          >
            <Building2 size={16} style={{ color: "#0EA5E9" }} />
          </div>
          <div>
            <h2 className="font-bold text-base" style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}>
              Company Details
            </h2>
            <p className="text-xs text-slate-500">How your startup appears in the AfriHub directory</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Company Name */}
          <div>
            <label htmlFor="company_name" className="form-label">
              Company Name <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <div className="input-wrapper">
              <Building2 size={15} className="input-icon" />
              <input
                id="company_name" name="company_name" type="text" required
                defaultValue={existing?.company_name ?? ""}
                placeholder="e.g. AfriTech Solutions"
                className="form-input"
              />
            </div>
          </div>

          {/* Website URL */}
          <div>
            <label htmlFor="website_url" className="form-label">Website URL</label>
            <div className="input-wrapper">
              <Globe size={15} className="input-icon" />
              <input
                id="website_url" name="website_url" type="url"
                defaultValue={existing?.website_url ?? ""}
                placeholder="https://yourcompany.com"
                className="form-input"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="form-label">Category / Industry</label>
            <div className="input-wrapper">
              <Tag size={15} className="input-icon" />
              <select
                id="category" name="category"
                defaultValue={existing?.category ?? ""}
                className="form-input form-select"
              >
                <option value="">Select a category…</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="form-label">Company Description</label>
            <div className="input-wrapper textarea-wrapper">
              <FileText size={15} className="input-icon" style={{ marginTop: "0.875rem" }} />
              <textarea
                id="description" name="description" rows={4}
                defaultValue={existing?.description ?? ""}
                placeholder="Briefly describe what your startup does, the problem it solves, and who your customers are…"
                className="form-input form-textarea"
              />
            </div>
            <p className="text-xs text-slate-400 mt-1.5">This will appear on your public directory listing.</p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Founder Details ── */}
      <section className="glass-card rounded-2xl overflow-hidden">
        <div
          className="flex items-center gap-3 px-6 py-4"
          style={{
            background: "linear-gradient(90deg, rgba(14,165,233,0.10) 0%, rgba(14,165,233,0.03) 100%)",
            borderBottom: "1px solid #BAE6FD",
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(14,165,233,0.15)", border: "1px solid rgba(14,165,233,0.25)" }}
          >
            <User size={16} style={{ color: "#0EA5E9" }} />
          </div>
          <div>
            <h2 className="font-bold text-base" style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}>
              Founder Details
            </h2>
            <p className="text-xs text-slate-500">Personal info tied to this company profile</p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Founder Name */}
          <div>
            <label htmlFor="founder_name" className="form-label">
              Full Name <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <div className="input-wrapper">
              <User size={15} className="input-icon" />
              <input
                id="founder_name" name="founder_name" type="text" required
                defaultValue={existing?.founder_name ?? ""}
                placeholder="e.g. Amara Diallo"
                className="form-input"
              />
            </div>
          </div>

          {/* Founder Email */}
          <div>
            <label htmlFor="founder_email" className="form-label">Email Address</label>
            <div className="input-wrapper">
              <Mail size={15} className="input-icon" />
              <input
                id="founder_email" name="founder_email" type="email"
                defaultValue={existing?.founder_email ?? ""}
                placeholder="you@yourcompany.com"
                className="form-input"
              />
            </div>
          </div>

          {/* LinkedIn URL */}
          <div>
            <label htmlFor="linkedin_url" className="form-label">LinkedIn Profile URL</label>
            <div className="input-wrapper">
              <Linkedin size={15} className="input-icon" />
              <input
                id="linkedin_url" name="linkedin_url" type="url"
                defaultValue={existing?.linkedin_url ?? ""}
                placeholder="https://linkedin.com/in/your-profile"
                className="form-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Submit ── */}
      <div className="flex justify-end">
        <SubmitButton isEditing={isEditing} />
      </div>
    </form>
  );
}
