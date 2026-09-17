import Link from "next/link";
import {
  ArrowRight,
  Users,
  Rocket,
  TrendingUp,
  Globe,
  Star,
  ChevronRight,
  Building2,
  DollarSign,
  Zap,
} from "lucide-react";

/* ── Static Data ── */
const stats = [
  { value: "500+", label: "Verified Founders", icon: Users },
  { value: "120+", label: "Active Startups", icon: Rocket },
  { value: "$28M+", label: "Funding Raised", icon: DollarSign },
  { value: "15+", label: "Industries", icon: Globe },
];

const features = [
  {
    icon: Users,
    title: "Founder Network",
    description:
      "Connect directly with Bangladesh's most ambitious founders. Support each other's growth and build your network.",
  },
  {
    icon: Building2,
    title: "Startup Directory",
    description:
      "Discover high-growth startups across fintech, healthtech, edtech, and more — all in one curated directory.",
  },
  {
    icon: TrendingUp,
    title: "Funding Tracker",
    description:
      "Stay ahead of investment rounds, track funding milestones, and connect with active investors in the ecosystem.",
  },
  {
    icon: Star,
    title: "Mentor Network",
    description:
      "Access seasoned operators and investors who've scaled from Dhaka to global markets.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Bridge Bangladesh's startup talent to international markets, VCs, and partner networks.",
  },
  {
    icon: Zap,
    title: "Ecosystem Pulse",
    description:
      "Real-time updates on events, hiring, launches, and opportunities across the founder ecosystem.",
  },
];

const featuredStartups = [
  {
    name: "ShopUp",
    sector: "B2B Commerce",
    stage: "Series B",
    description: "Digitizing Bangladesh's informal retail network at scale.",
    raised: "$75M",
    color: "#0EA5E9",
  },
  {
    name: "Shajgoj",
    sector: "Beauty & Wellness",
    stage: "Series A",
    description: "South Asia's largest beauty and personal care platform.",
    raised: "$8M",
    color: "#7C3AED",
  },
  {
    name: "Maya",
    sector: "HealthTech",
    stage: "Series A",
    description: "AI-powered health guidance for underserved communities.",
    raised: "$5M",
    color: "#059669",
  },
];

/* ── Components ── */
function StatCard({
  stat,
}: {
  stat: { value: string; label: string; icon: React.ElementType };
}) {
  const Icon = stat.icon;
  return (
    <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
        style={{ background: "rgba(14, 165, 233, 0.12)", border: "1px solid rgba(14, 165, 233, 0.25)" }}
      >
        <Icon size={22} style={{ color: "#0EA5E9" }} />
      </div>
      <p
        className="text-3xl font-extrabold mb-1"
        style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
      >
        {stat.value}
      </p>
      <p className="text-sm text-slate-500">{stat.label}</p>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
}) {
  const Icon = feature.icon;
  return (
    <div className="group glass-card rounded-2xl p-7 hover:border-[#0EA5E9] hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: "rgba(14, 165, 233, 0.12)", border: "1px solid rgba(14, 165, 233, 0.2)" }}
      >
        <Icon size={20} style={{ color: "#0EA5E9" }} />
      </div>
      <h3
        className="font-bold text-lg mb-2"
        style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
      >
        {feature.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
    </div>
  );
}

function StartupCard({
  startup,
}: {
  startup: {
    name: string;
    sector: string;
    stage: string;
    description: string;
    raised: string;
    color: string;
  };
}) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: startup.color, fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
        >
          {startup.name[0]}
        </div>
        <div className="flex gap-2">
          <span className="section-badge text-xs">{startup.stage}</span>
        </div>
      </div>
      <h3
        className="font-bold text-lg mb-1"
        style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
      >
        {startup.name}
      </h3>
      <p className="text-xs font-medium mb-2" style={{ color: "#0EA5E9" }}>
        {startup.sector}
      </p>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">
        {startup.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold" style={{ color: "#0F172A" }}>
          Raised: {startup.raised}
        </span>
        <Link
          href="/directory"
          className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          style={{ color: "#0EA5E9" }}
        >
          View Profile <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0F172A 0%, #0c2340 40%, #0F172A 100%)",
        }}
      >
        {/* Glow orbs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(2,132,199,0.1) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="section-badge">
              <Zap size={12} />
              Bangladesh's Premier Startup Ecosystem
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            The Engine Powering
            <br />
            <span className="text-gradient-cyan">
              Bangladesh's Next Generation
            </span>
            <br />
            of Builders.
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect, collaborate, and scale with top founders. Discover the
            visionaries shaping tomorrow's high-growth startups — all in one
            ecosystem built for ambition.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/directory" id="hero-cta-primary" className="btn-primary text-base">
              Explore the Directory
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" id="hero-cta-secondary" className="btn-outline text-base">
              Founder Dashboard
            </Link>
          </div>

          {/* Trust line */}
          <p className="mt-10 text-sm text-slate-500">
            Trusted by{" "}
            <span className="text-white font-semibold">500+ founders</span>{" "}
            across Bangladesh's fastest-growing startups.
          </p>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #ffffff08)",
          }}
        />
      </section>

      {/* ══ STATS ══ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9FF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-badge mb-4">By the Numbers</span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mt-4"
              style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              An Ecosystem That Delivers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-badge mb-4">Platform Features</span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mt-4 mb-4"
              style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
            >
              Everything You Need to
              <span className="text-gradient-cyan"> Scale</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              Focused on tangible outcomes — funding, talent, and scale. Built
              specifically for founders operating in South Asia's most dynamic market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED STARTUPS ══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9FF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <span className="section-badge mb-3">Featured</span>
              <h2
                className="text-3xl sm:text-4xl font-extrabold mt-3"
                style={{ color: "#0F172A", fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
              >
                High-Growth Startups
              </h2>
            </div>
            <Link href="/directory" className="btn-outline text-sm">
              View All Startups
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStartups.map((startup) => (
              <StartupCard key={startup.name} startup={startup} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-8 mx-auto"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
          >
            <Rocket size={28} className="text-white" />
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta, 'Plus Jakarta Sans', sans-serif)" }}
          >
            Ready to Join the Movement?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Support each other's growth. Build your network. Discover the
            visionaries shaping tomorrow's high-growth startups.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/directory" id="bottom-cta-primary" className="btn-primary text-base">
              Get Listed Free
              <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" id="bottom-cta-secondary" className="btn-outline text-base">
              Founder Dashboard
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
