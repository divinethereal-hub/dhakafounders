import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Filter,
  MapPin,
  TrendingUp,
  Users,
  ArrowUpRight,
  Globe,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Startup Directory — AfriHub Founders",
  description:
    "Discover the visionaries shaping tomorrow's high-growth startups. Browse Africa's most comprehensive founder and startup directory.",
};

const sectors = [
  "All", "Fintech", "HealthTech", "EdTech", "E-Commerce",
  "AgriTech", "LogisTech", "SaaS", "CleanTech",
];

const startups = [
  {
    id: 1,
    name: "Paystack",
    tagline: "Africa's leading payments infrastructure, powering growth for 200k+ businesses.",
    sector: "Fintech",
    stage: "Acquired",
    location: "Lagos, NG",
    team: 300,
    raised: "$8M",
    color: "#0EA5E9",
    hiring: true,
  },
  {
    id: 2,
    name: "Andela",
    tagline: "Connecting African software talent with global tech companies at scale.",
    sector: "Future of Work",
    stage: "Series E",
    location: "Nairobi, KE",
    team: 1000,
    raised: "$381M",
    color: "#7C3AED",
    hiring: true,
  },
  {
    id: 3,
    name: "54gene",
    tagline: "Pioneering African genomics research to build more inclusive medicines.",
    sector: "HealthTech",
    stage: "Series B",
    location: "Abuja, NG",
    team: 120,
    raised: "$45M",
    color: "#059669",
    hiring: true,
  },
  {
    id: 4,
    name: "Flutterwave",
    tagline: "Simplifying payments for endless possibilities across Africa.",
    sector: "Fintech",
    stage: "Series D",
    location: "San Francisco, US",
    team: 900,
    raised: "$474M",
    color: "#D97706",
    hiring: true,
  },
  {
    id: 5,
    name: "Twiga Foods",
    tagline: "Digitizing Africa's food supply chain from farm to retailer.",
    sector: "AgriTech",
    stage: "Series C",
    location: "Nairobi, KE",
    team: 450,
    raised: "$67M",
    color: "#DC2626",
    hiring: false,
  },
  {
    id: 6,
    name: "uLesson",
    tagline: "Making world-class education accessible for every African student.",
    sector: "EdTech",
    stage: "Series B",
    location: "Abuja, NG",
    team: 180,
    raised: "$21M",
    color: "#0EA5E9",
    hiring: true,
  },
];

function StartupCard({
  startup,
}: {
  startup: (typeof startups)[0];
}) {
  return (
    <article
      id={`startup-card-${startup.id}`}
      className="glass-card rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0"
            style={{
              backgroundColor: startup.color,
              fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
            }}
          >
            {startup.name[0]}
          </div>
          <div>
            <h2
              className="font-bold text-base"
              style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              {startup.name}
            </h2>
            <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
              <MapPin size={11} />
              <span>{startup.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="section-badge text-xs">{startup.stage}</span>
          {startup.hiring && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(5, 150, 105, 0.1)", color: "#059669" }}
            >
              Hiring
            </span>
          )}
        </div>
      </div>

      {/* Sector */}
      <p className="text-xs font-bold mb-2" style={{ color: "#0EA5E9" }}>
        {startup.sector}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
        {startup.tagline}
      </p>

      {/* Meta */}
      <div
        className="grid grid-cols-2 gap-3 py-4 mb-4"
        style={{ borderTop: "1px solid #BAE6FD", borderBottom: "1px solid #BAE6FD" }}
      >
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <TrendingUp size={13} style={{ color: "#0EA5E9" }} />
          <span>Raised: <strong className="text-slate-700">{startup.raised}</strong></span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Users size={13} style={{ color: "#0EA5E9" }} />
          <span>Team: <strong className="text-slate-700">{startup.team}</strong></span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/directory/${startup.id}`}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:gap-3"
        style={{
          border: "1.5px solid #0EA5E9",
          color: "#0EA5E9",
          fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
        }}
      >
        View Profile
        <ArrowUpRight size={15} />
      </Link>
    </article>
  );
}

export default function DirectoryPage() {
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: "#F0F9FF" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#0F172A" }} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="section-badge">
              <Globe size={12} />
              African Startup Ecosystem
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Discover the{" "}
            <span className="text-gradient-cyan">Visionaries</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Shaping tomorrow's high-growth startups. Browse {startups.length}+ verified companies across Africa's fastest-growing sectors.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              id="directory-search"
              type="search"
              placeholder="Search startups, founders, sectors..."
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-none focus:border-cyan-400 transition-colors"
              style={{ fontFamily: "var(--font-inter, 'Inter', sans-serif)" }}
            />
          </div>
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        {/* Sector Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <Filter size={16} className="text-slate-400 shrink-0" />
          {sectors.map((sector) => (
            <button
              key={sector}
              id={`filter-${sector.toLowerCase()}`}
              className="text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 hover:border-cyan-400 hover:text-cyan-600 cursor-pointer"
              style={{
                borderColor: sector === "All" ? "#0EA5E9" : "#BAE6FD",
                color: sector === "All" ? "#0EA5E9" : "#64748b",
                backgroundColor: sector === "All" ? "rgba(14,165,233,0.08)" : "transparent",
                fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)",
              }}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing <strong className="text-slate-700">{startups.length}</strong> startups
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Zap size={13} style={{ color: "#0EA5E9" }} />
            <span>Updated daily</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-14">
          <button
            id="directory-load-more"
            className="btn-outline"
          >
            Load More Startups
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
