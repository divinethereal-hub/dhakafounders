import Link from "next/link";
import { ArrowUpRight, Globe, Mail, Linkedin, Calendar } from "lucide-react";

export type CompanyProfile = {
  id: string;
  clerk_auth_key: string;
  company_name: string;
  website_url: string | null;
  category: string | null;
  description: string | null;
  founder_name: string;
  founder_email: string | null;
  linkedin_url: string | null;
  created_at: string;
};

// Brand-aligned colour map — each category gets a distinct but harmonious accent
const CATEGORY_COLORS: Record<string, { border: string; badge: string; text: string }> = {
  Fintech:               { border: "#0EA5E9", badge: "rgba(14,165,233,0.10)",  text: "#0369a1" },
  Healthtech:            { border: "#10B981", badge: "rgba(16,185,129,0.10)",  text: "#047857" },
  Edtech:                { border: "#8B5CF6", badge: "rgba(139,92,246,0.10)",  text: "#6d28d9" },
  Agritech:              { border: "#22C55E", badge: "rgba(34,197,94,0.10)",   text: "#15803d" },
  "E-commerce":          { border: "#F59E0B", badge: "rgba(245,158,11,0.10)",  text: "#b45309" },
  Logistics:             { border: "#F97316", badge: "rgba(249,115,22,0.10)",  text: "#c2410c" },
  SaaS:                  { border: "#06B6D4", badge: "rgba(6,182,212,0.10)",   text: "#0e7490" },
  CleanTech:             { border: "#84CC16", badge: "rgba(132,204,22,0.10)",  text: "#4d7c0f" },
  "Media & Entertainment":{ border: "#EC4899", badge: "rgba(236,72,153,0.10)", text: "#be185d" },
  Other:                 { border: "#94A3B8", badge: "rgba(148,163,184,0.10)", text: "#475569" },
};

const DEFAULT_COLOR = { border: "#0EA5E9", badge: "rgba(14,165,233,0.10)", text: "#0369a1" };

function getColor(category: string | null) {
  if (!category) return DEFAULT_COLOR;
  return CATEGORY_COLORS[category] ?? DEFAULT_COLOR;
}

// Format the Supabase created_at timestamp to "Sep 2026"
function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
  } catch {
    return null;
  }
}

export default function StartupCard({ profile }: { profile: CompanyProfile }) {
  const color = getColor(profile.category);
  const initial = profile.company_name.charAt(0).toUpperCase();
  const joinedDate = formatDate(profile.created_at);
  const shortDescription = profile.description
    ? profile.description.length > 120
      ? profile.description.slice(0, 117) + "…"
      : profile.description
    : null;

  return (
    <article
      id={`startup-card-${profile.id}`}
      className="relative flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        boxShadow: "0 2px 12px rgba(15,23,42,0.07), 0 1px 3px rgba(15,23,42,0.05)",
        border: "1px solid #e2e8f0",
      }}
    >
      {/* ── Coloured top border accent ── */}
      <div
        className="h-1 w-full shrink-0"
        style={{ background: color.border }}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* ── Header row: avatar + name + category badge ── */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Avatar initial */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
              style={{
                background: `linear-gradient(135deg, ${color.border}, ${color.border}cc)`,
                fontFamily: "var(--font-heading)",
              }}
            >
              {initial}
            </div>

            <div className="min-w-0">
              <h2
                className="font-bold text-base leading-tight truncate"
                style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
              >
                {profile.company_name}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5 truncate">
                {profile.founder_name}
              </p>
            </div>
          </div>

          {/* Category badge */}
          {profile.category && (
            <span
              className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{
                background: color.badge,
                color: color.text,
                border: `1px solid ${color.border}33`,
                fontFamily: "var(--font-heading)",
              }}
            >
              {profile.category}
            </span>
          )}
        </div>

        {/* ── Description ── */}
        {shortDescription ? (
          <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
            {shortDescription}
          </p>
        ) : (
          <p className="text-sm text-slate-300 italic flex-1 mb-5">
            No description yet.
          </p>
        )}

        {/* ── Meta row: joined date ── */}
        {joinedDate && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
            <Calendar size={12} />
            <span>Joined {joinedDate}</span>
          </div>
        )}

        {/* ── Divider ── */}
        <div className="border-t border-slate-100 mb-4" />

        {/* ── Links row ── */}
        <div className="flex items-center justify-between gap-2">
          {/* External links */}
          <div className="flex items-center gap-2">
            {profile.website_url && (
              <a
                href={profile.website_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.company_name} website`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all duration-200"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <Globe size={14} />
              </a>
            )}
            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.founder_name} LinkedIn`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all duration-200"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <Linkedin size={14} />
              </a>
            )}
            {profile.founder_email && (
              <a
                href={`mailto:${profile.founder_email}`}
                aria-label={`Email ${profile.founder_name}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all duration-200"
                style={{ border: "1px solid #e2e8f0" }}
              >
                <Mail size={14} />
              </a>
            )}
          </div>

          {/* View Profile CTA */}
          <Link
            href={`/directory/${profile.id}`}
            id={`view-profile-${profile.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 hover:gap-2.5 group"
            style={{
              border: `1.5px solid ${color.border}`,
              color: color.text,
              fontFamily: "var(--font-heading)",
            }}
          >
            View Profile
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
