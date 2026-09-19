import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import { getCompanyProfile } from "./actions";
import ProfileForm from "./ProfileForm";

export const metadata: Metadata = {
  title: "Company Profile — AfriHub Founders",
  description:
    "Set up your company and founder profile to appear in the AfriHub startup directory.",
};

export default async function ProfilePage() {
  // Fetched server-side so the form can pre-populate existing values
  const existing = await getCompanyProfile();
  const isEditing = existing !== null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0F9FF" }}>
      {/* ── Dark Hero Header ── */}
      <div
        style={{ backgroundColor: "#0F172A" }}
        className="pt-10 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/dashboard"
            id="profile-back-link"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-6 transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-4">
            {/* Icon badge */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                boxShadow: "0 6px 24px rgba(14, 165, 233, 0.45)",
              }}
            >
              <PenLine size={22} className="text-white" />
            </div>

            <div>
              <span className="section-badge mb-2">
                {isEditing ? "Edit Profile" : "Profile Setup"}
              </span>
              <h1
                className="text-2xl sm:text-3xl font-extrabold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {isEditing ? "Update Your Profile" : "Create Your Profile"}
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                {isEditing
                  ? "Your profile is live — keep it up to date to attract investors and partners."
                  : "Complete the form below to appear in the AfriHub founder directory."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Form Area ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        {/* Progress bar — only shown for new profiles */}
        {!isEditing && (
          <div
            className="glass-card rounded-2xl px-5 py-3.5 mb-6 flex items-center gap-3"
            style={{ border: "1px solid rgba(14,165,233,0.3)" }}
          >
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(14,165,233,0.15)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: "45%",
                  background: "linear-gradient(90deg, #0EA5E9, #38BDF8)",
                }}
              />
            </div>
            <span className="text-xs font-medium text-slate-500 shrink-0">
              Step 1 of 2 — Profile Details
            </span>
          </div>
        )}

        {/* Existing-record notice */}
        {isEditing && (
          <div
            className="flex items-center gap-3 rounded-2xl px-5 py-3.5 mb-6 text-sm"
            style={{
              background: "rgba(14,165,233,0.07)",
              border: "1px solid rgba(14,165,233,0.25)",
              color: "#0369a1",
            }}
          >
            <PenLine size={15} className="shrink-0" />
            <span>
              We found your existing profile and pre-filled the form. Any changes
              you save will{" "}
              <strong>update</strong> your live listing.
            </span>
          </div>
        )}

        {/* Interactive form (client component) */}
        <ProfileForm existing={existing} />
      </div>

      {/* ── Scoped form styles ── */}
      <style>{`
        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: #334155;
          margin-bottom: 0.4rem;
          font-family: var(--font-body);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .textarea-wrapper {
          align-items: flex-start;
        }

        .input-icon {
          position: absolute;
          left: 0.875rem;
          color: #94a3b8;
          pointer-events: none;
          flex-shrink: 0;
        }

        .form-input {
          width: 100%;
          padding: 0.65rem 0.875rem 0.65rem 2.375rem;
          font-size: 0.875rem;
          font-family: var(--font-body);
          color: #0f172a;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid #bae6fd;
          border-radius: 0.75rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          -webkit-appearance: none;
          appearance: none;
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .form-input:focus {
          border-color: #0ea5e9;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.12);
        }

        .form-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 16px;
          padding-right: 2.5rem;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
          line-height: 1.6;
          padding-top: 0.65rem;
        }
      `}</style>
    </div>
  );
}
