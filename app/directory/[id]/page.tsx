import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import {
  ArrowLeft,
  Globe,
  Mail,
  Linkedin,
  Calendar,
  Building2,
  User,
  Tag,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import type { CompanyProfile } from "@/components/StartupCard";

// ── Supabase client (anon key — RLS is disabled on this table) ──────────────
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}

// ── Category colour map (mirrors StartupCard) ───────────────────────────────
const CATEGORY_COLORS: Record<string, { border: string; badge: string; text: string; glow: string }> = {
  Fintech:                { border: "#0EA5E9", badge: "rgba(14,165,233,0.12)",  text: "#0369a1", glow: "rgba(14,165,233,0.35)"  },
  Healthtech:             { border: "#10B981", badge: "rgba(16,185,129,0.12)",  text: "#047857", glow: "rgba(16,185,129,0.35)"  },
  Edtech:                 { border: "#8B5CF6", badge: "rgba(139,92,246,0.12)",  text: "#6d28d9", glow: "rgba(139,92,246,0.35)"  },
  Agritech:               { border: "#22C55E", badge: "rgba(34,197,94,0.12)",   text: "#15803d", glow: "rgba(34,197,94,0.35)"   },
  "E-commerce":           { border: "#F59E0B", badge: "rgba(245,158,11,0.12)",  text: "#b45309", glow: "rgba(245,158,11,0.35)"  },
  Logistics:              { border: "#F97316", badge: "rgba(249,115,22,0.12)",  text: "#c2410c", glow: "rgba(249,115,22,0.35)"  },
  SaaS:                   { border: "#06B6D4", badge: "rgba(6,182,212,0.12)",   text: "#0e7490", glow: "rgba(6,182,212,0.35)"   },
  CleanTech:              { border: "#84CC16", badge: "rgba(132,204,22,0.12)",  text: "#4d7c0f", glow: "rgba(132,204,22,0.35)"  },
  "Media & Entertainment":{ border: "#EC4899", badge: "rgba(236,72,153,0.12)", text: "#be185d", glow: "rgba(236,72,153,0.35)"  },
  Other:                  { border: "#94A3B8", badge: "rgba(148,163,184,0.12)",text: "#475569", glow: "rgba(148,163,184,0.35)" },
};
const DEFAULT_COLOR = { border: "#0EA5E9", badge: "rgba(14,165,233,0.12)", text: "#0369a1", glow: "rgba(14,165,233,0.35)" };
const getColor = (cat: string | null) =>
  cat ? (CATEGORY_COLORS[cat] ?? DEFAULT_COLOR) : DEFAULT_COLOR;

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch { return null; }
}

// ── Data fetching ────────────────────────────────────────────────────────────
async function getProfile(id: string): Promise<CompanyProfile | null> {
  const { data, error } = await getSupabase()
    .from("company_profile")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as CompanyProfile;
}

// ── Dynamic metadata ─────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const profile = await getProfile(id);
  if (!profile) return { title: "Profile Not Found — AfriHub Founders" };
  return {
    title: `${profile.company_name} — AfriHub Founders`,
    description:
      profile.description ??
      `Learn more about ${profile.company_name}, founded by ${profile.founder_name}.`,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function ProfileDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const profile = await getProfile(id);
  if (!profile) notFound();

  const color = getColor(profile.category);
  const initial = profile.company_name.charAt(0).toUpperCase();
  const joinedDate = formatDate(profile.created_at);

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#F0F9FF" }}>

      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div
        style={{ backgroundColor: "#0F172A" }}
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-28"
      >
        {/* Subtle radial glow behind the avatar */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${color.glow} 0%, transparent 70%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/directory"
            id="profile-detail-back"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm mb-8 transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Directory
          </Link>

          {/* Company identity row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-3xl shrink-0"
              style={{
                background: `linear-gradient(135deg, ${color.border}, ${color.border}aa)`,
                boxShadow: `0 0 0 4px rgba(255,255,255,0.06), 0 8px 32px ${color.glow}`,
                fontFamily: "var(--font-heading)",
              }}
            >
              {initial}
            </div>

            <div className="flex-1 min-w-0">
              {/* Category badge */}
              {profile.category && (
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: `1px solid ${color.border}55`,
                    color: color.border,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <Tag size={11} />
                  {profile.category}
                </span>
              )}

              <h1
                className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {profile.company_name}
              </h1>

              <p className="text-slate-400 text-sm">
                Founded by{" "}
                <span className="text-slate-200 font-medium">
                  {profile.founder_name}
                </span>
                {joinedDate && (
                  <> &middot; Joined {joinedDate}</>
                )}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              {profile.website_url && (
                <a
                  href={profile.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="profile-detail-website"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${color.border}, ${color.border}cc)`,
                    boxShadow: `0 4px 16px ${color.glow}`,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <Globe size={15} />
                  Visit Website
                  <ExternalLink size={13} className="opacity-70" />
                </a>
              )}
              {profile.linkedin_url && (
                <a
                  href={profile.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="profile-detail-linkedin"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200"
                  style={{
                    border: "1px solid rgba(186,230,253,0.2)",
                    background: "rgba(255,255,255,0.05)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Detail Cards ────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Left column: Company + Description ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* About the company */}
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              {/* Coloured top border */}
              <div className="h-1 w-full" style={{ background: color.border }} aria-hidden="true" />

              <div className="p-7">
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color.badge, border: `1px solid ${color.border}33` }}
                  >
                    <Building2 size={15} style={{ color: color.border }} />
                  </div>
                  <h2
                    className="font-bold text-base"
                    style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
                  >
                    About {profile.company_name}
                  </h2>
                </div>

                {profile.description ? (
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {profile.description}
                  </p>
                ) : (
                  <p className="text-slate-400 italic text-sm">
                    No company description provided yet.
                  </p>
                )}

                {/* Quick-detail pills */}
                <div className="flex flex-wrap gap-3 mt-6 pt-5" style={{ borderTop: "1px solid #f1f5f9" }}>
                  {profile.category && (
                    <div
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                      style={{ background: color.badge, color: color.text, fontFamily: "var(--font-heading)" }}
                    >
                      <Tag size={12} />
                      {profile.category}
                    </div>
                  )}
                  {joinedDate && (
                    <div
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold"
                      style={{ background: "rgba(15,23,42,0.05)", color: "#475569", fontFamily: "var(--font-heading)" }}
                    >
                      <Calendar size={12} />
                      Listed {joinedDate}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Website preview card — only if URL exists */}
            {profile.website_url && (
              <a
                href={profile.website_url}
                target="_blank"
                rel="noopener noreferrer"
                id="profile-detail-website-card"
                className="group flex items-center justify-between w-full bg-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: color.badge, border: `1px solid ${color.border}33` }}
                  >
                    <Globe size={16} style={{ color: color.border }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
                    >
                      Company Website
                    </p>
                    <p className="text-xs text-slate-400 truncate max-w-xs">
                      {profile.website_url}
                    </p>
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  className="text-slate-300 group-hover:text-cyan-500 transition-colors shrink-0"
                />
              </a>
            )}
          </div>

          {/* ── Right column: Founder card ── */}
          <div className="space-y-5">
            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(15,23,42,0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0EA5E9, #38BDF8)" }} aria-hidden="true" />

              <div className="p-6">
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(14,165,233,0.10)", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    <User size={15} style={{ color: "#0EA5E9" }} />
                  </div>
                  <h2
                    className="font-bold text-base"
                    style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
                  >
                    Founder
                  </h2>
                </div>

                {/* Founder avatar + name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {profile.founder_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
                    >
                      {profile.founder_name}
                    </p>
                    <p className="text-xs text-slate-400">
                      Founder &amp; CEO
                    </p>
                  </div>
                </div>

                {/* Contact links */}
                <div className="space-y-2.5">
                  {profile.founder_email && (
                    <a
                      href={`mailto:${profile.founder_email}`}
                      id="profile-detail-email"
                      className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-200 hover:bg-slate-50 group"
                      style={{ border: "1px solid #e2e8f0" }}
                    >
                      <Mail size={15} className="text-slate-400 group-hover:text-cyan-500 shrink-0 transition-colors" />
                      <span className="text-slate-600 truncate text-xs group-hover:text-slate-800 transition-colors">
                        {profile.founder_email}
                      </span>
                    </a>
                  )}
                  {profile.linkedin_url && (
                    <a
                      href={profile.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="profile-detail-linkedin-founder"
                      className="flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-200 hover:bg-slate-50 group"
                      style={{ border: "1px solid #e2e8f0" }}
                    >
                      <Linkedin size={15} className="text-slate-400 group-hover:text-cyan-500 shrink-0 transition-colors" />
                      <span className="text-slate-600 truncate text-xs group-hover:text-slate-800 transition-colors flex-1">
                        LinkedIn Profile
                      </span>
                      <ExternalLink size={12} className="text-slate-300 shrink-0" />
                    </a>
                  )}
                </div>

                {/* No contact info fallback */}
                {!profile.founder_email && !profile.linkedin_url && (
                  <p className="text-xs text-slate-400 italic text-center py-2">
                    No contact info provided.
                  </p>
                )}
              </div>
            </div>

            {/* Back to directory */}
            <Link
              href="/directory"
              id="profile-detail-back-btn"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                border: "1.5px solid #BAE6FD",
                color: "#0369a1",
                background: "rgba(14,165,233,0.05)",
                fontFamily: "var(--font-heading)",
              }}
            >
              <ArrowLeft size={14} />
              Browse All Startups
            </Link>

            {/* Explore more — random suggestion CTA */}
            <Link
              href="/directory"
              id="profile-detail-explore"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
                boxShadow: "0 4px 16px rgba(14,165,233,0.35)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Explore More Startups
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
