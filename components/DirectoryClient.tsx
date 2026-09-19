"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Zap, X } from "lucide-react";
import StartupCard, { type CompanyProfile } from "./StartupCard";

const ALL = "All";

const CATEGORIES = [
  ALL,
  "Fintech",
  "Healthtech",
  "Edtech",
  "Agritech",
  "E-commerce",
  "Logistics",
  "SaaS",
  "CleanTech",
  "Media & Entertainment",
  "Other",
];

export default function DirectoryClient({
  profiles,
}: {
  profiles: CompanyProfile[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(ALL);

  // Derive the set of categories that actually have records
  const availableCategories = useMemo(() => {
    const inDb = new Set(profiles.map((p) => p.category).filter(Boolean));
    return CATEGORIES.filter((c) => c === ALL || inDb.has(c));
  }, [profiles]);

  // Client-side filter — instant, no round-trip
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profiles.filter((p) => {
      const matchesCategory =
        activeCategory === ALL || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.company_name.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q) ||
        (p.founder_name ?? "").toLowerCase().includes(q) ||
        (p.category ?? "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [profiles, query, activeCategory]);

  return (
    <>
      {/* ── Search bar — sits in the dark hero band ── */}
      <div
        style={{ backgroundColor: "#0F172A" }}
        className="px-4 sm:px-6 lg:px-8 pb-10"
      >
        <div className="max-w-xl mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
          <input
            id="directory-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups, founders, categories…"
            className="w-full pl-11 pr-10 py-3.5 rounded-xl text-sm text-white placeholder-slate-400 border transition-colors focus:outline-none"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderColor: query ? "#0EA5E9" : "rgba(255,255,255,0.15)",
              fontFamily: "var(--font-body)",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ── Filters + Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">

        {/* Category Pills */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Filter size={15} className="text-slate-400 shrink-0" />
          {availableCategories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
                style={{
                  borderColor: active ? "#0EA5E9" : "#BAE6FD",
                  color: active ? "#0EA5E9" : "#64748b",
                  backgroundColor: active
                    ? "rgba(14,165,233,0.09)"
                    : "transparent",
                  fontFamily: "var(--font-heading)",
                  boxShadow: active
                    ? "0 0 0 3px rgba(14,165,233,0.12)"
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <strong className="text-slate-700">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "startup" : "startups"}
            {activeCategory !== ALL && (
              <> in <span style={{ color: "#0EA5E9" }}>{activeCategory}</span></>
            )}
            {query && (
              <> matching &ldquo;<span className="text-slate-700">{query}</span>&rdquo;</>
            )}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Zap size={12} style={{ color: "#0EA5E9" }} />
            <span>Live data</span>
          </div>
        </div>

        {/* Cards grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((profile) => (
              <StartupCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: "rgba(14,165,233,0.08)",
                border: "1px solid rgba(14,165,233,0.2)",
              }}
            >
              <Search size={26} style={{ color: "#0EA5E9" }} />
            </div>
            <h3
              className="font-bold text-lg mb-2"
              style={{ color: "#0F172A", fontFamily: "var(--font-heading)" }}
            >
              No startups found
            </h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Try adjusting your search or selecting a different category.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory(ALL); }}
              className="mt-5 text-sm font-semibold transition-colors"
              style={{ color: "#0EA5E9" }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
