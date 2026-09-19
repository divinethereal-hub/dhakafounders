import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  Zap,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — AfriHub Founders | Accelerating Africa's Startup Ecosystem",
  description:
    "Learn how AfriHub Founders connects 1,500+ tech entrepreneurs, operators, and venture investors across Lagos, Nairobi, Cape Town, Cairo, and Kigali to catalyze Africa's $100B digital economy.",
  keywords: [
    "About AfriHub Founders",
    "African Tech Ecosystem",
    "African Startups",
    "Lagos Tech Hub",
    "Nairobi Silicon Savannah",
    "Venture Capital Africa",
    "African Tech Founders",
  ],
  openGraph: {
    title: "About Us — AfriHub Founders",
    description:
      "Catalyzing Africa's next generation of high-growth technology ventures through verified directory intelligence, investor connectivity, and founder playbooks.",
    type: "website",
    siteName: "AfriHub Founders",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About AfriHub Founders",
    description:
      "AfriHub Founders is the premier ecosystem directory and founder intelligence network for African technology companies.",
    url: "https://afrihubfounders.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "AfriHub Founders",
      url: "https://afrihubfounders.com",
      logo: "https://afrihubfounders.com/logo.png",
      foundingDate: "2024",
      areaServed: "Africa",
      description:
        "Connecting technology founders, angel syndicates, and software builders across Africa.",
    },
  };

  return (
    <div className="min-h-screen pt-16 bg-[#F8FAFC]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. Hero Section ── */}
      <header className="relative bg-slate-900 border-b border-slate-800 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient Glows */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 pointer-events-none blur-3xl opacity-35"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 pointer-events-none blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/15 text-sky-400 border border-sky-400/30">
              <Globe2 size={13} className="text-sky-400" />
              The Pan-African Movement
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Unlocking Africa’s Next Generation of{" "}
            <span className="text-gradient-cyan">High-Growth Builders</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            AfriHub Founders is the premier directory, intelligence platform, and collaborative ecosystem connecting visionary entrepreneurs, operators, and investors across Lagos, Nairobi, Cape Town, Cairo, and Kigali.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/directory"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass size={16} />
              <span>Explore Startup Directory</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              <BookOpen size={16} />
              <span>Read Founder Insights</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── 2. Ecosystem Impact Bar ── */}
      <section aria-label="Key Ecosystem Metrics" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
              1,500+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">Verified Startups</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <p className="text-3xl sm:text-4xl font-black text-sky-600" style={{ fontFamily: "var(--font-heading)" }}>
              54
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">African Markets Represented</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <p className="text-3xl sm:text-4xl font-black text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>
              $450M+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">Capital Raised by Founders</p>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <p className="text-3xl sm:text-4xl font-black text-sky-600" style={{ fontFamily: "var(--font-heading)" }}>
              640+
            </p>
            <p className="text-xs sm:text-sm font-semibold text-slate-500">Partner Tech Hubs</p>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Story Section ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-700">
              <Sparkles size={13} />
              Our Origin & Purpose
            </span>

            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Bridging the Digital Divide to Build Africa’s Future
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              For years, Africa’s entrepreneurial renaissance was hindered not by a lack of talent or ambition, but by fragmentation. Brilliant software engineers in Lagos had little visibility into breakthroughs occurring in Nairobi. Investors in London and San Francisco struggled to discover verified early-stage ventures in Cairo or Kigali.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We founded AfriHub to tear down those artificial silos. By creating a unified, verified registry of high-impact companies and combining it with battle-tested founder playbooks, we are giving African builders the institutional visibility and peer support they need to scale globally.
            </p>

            <div className="p-5 rounded-2xl bg-sky-50 border-l-4 border-sky-500 text-slate-800 space-y-2">
              <p className="text-sm font-semibold italic leading-relaxed">
                "Africa's digital economy is not an experiment. It is the most fertile testing ground on Earth for mobile-native fintech, decentralised energy, and leapfrog logistics."
              </p>
              <p className="text-xs font-bold text-sky-700">— AfriHub Founding Manifesto</p>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="relative">
            <div className="absolute -inset-2 bg-linear-to-r from-sky-400 to-indigo-500 rounded-3xl blur-lg opacity-25" />
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900">
              <Image
                src="/images/about_founders_hub.jpg"
                alt="African startup founders collaborating in modern tech hub"
                width={800}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="p-4 bg-slate-900/90 backdrop-blur-xs border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Nairobi & Lagos Innovation Corridor</span>
                <span className="text-sky-400 font-semibold">Tech Hub Incubator</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The Four Pillars of AfriHub ── */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <Layers size={13} />
              Core Architecture
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How We Power African Scale
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Four interconnected engines designed to accelerate high-conviction ventures from day zero to pan-African scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 shadow-lg space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                1. Verified Ecosystem Directory
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Eliminating information asymmetry. Every startup in our directory is verified for authentic founders, live products, active operational hubs, and verified corporate registrations.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 shadow-lg space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                2. Real-Time Founder Intelligence
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pragmatic, field-tested playbooks written by operators: from structuring cross-border Delaware/Mauritius flips to managing multi-currency FX volatility across African markets.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 shadow-lg space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                3. Direct Capital Access
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connecting African founders directly with vetted angel syndicates, family offices, and Tier-1 institutional funds specializing in frontier and emerging market software.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-7 border border-slate-700/80 shadow-lg space-y-4 hover:border-sky-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                4. High-Trust Builder Network
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Curated roundtables, technical masterminds, and co-founder networks where founders share transparent hiring data, reliable supplier contacts, and regulatory strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. The Connected Continent (Digital Network Visualization) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-700">
              <Globe2 size={13} />
              Pan-African Digital Grid
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              One Continent, Boundless Innovation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We connect the major tech epicenters across North, West, East, and Southern Africa into a unified pipeline for talent, capital, and market expansion.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-950">
            <Image
              src="/images/about_digital_network.jpg"
              alt="Digital network map of Africa connecting Cairo, Accra, Lagos, Kigali, Nairobi, and Cape Town"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Live Data Corridors Active</span>
              </div>
              <span>Lagos • Nairobi • Cairo • Cape Town • Kigali • Accra</span>
            </div>
          </div>

          {/* Regional Corridors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Lagos (Yaba Tech Cluster)</span>
                <span className="text-xs text-sky-600 font-semibold">West Africa</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The undisputed powerhouse of fintech innovation, consumer payments, and high-velocity commerce engines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Nairobi (Silicon Savannah)</span>
                <span className="text-xs text-sky-600 font-semibold">East Africa</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The birthplace of mobile money, climate tech, and distributed logistics across the Great Lakes region.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Kigali & Cape Town</span>
                <span className="text-xs text-sky-600 font-semibold">HQ & DeepTech</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Agile regulatory sandboxes, pan-African holding entities, enterprise SaaS, and institutional venture partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Demo Days & Tech Summit Showcase ── */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
              <Image
                src="/images/about_community_summit.jpg"
                alt="African female tech founder pitching on stage at Kigali Tech Summit"
                width={800}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-900/90 text-xs text-slate-300 flex items-center justify-between">
                <span>AfriHub Demo Day & Tech Summit</span>
                <span className="text-emerald-400 font-semibold">45K+ Active Ecosystem Users</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
              <Award size={13} />
              Demo Days & Global Visibility
            </span>

            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Putting African Visionaries on the Global Stage
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Every quarter, AfriHub hosts high-impact virtual and in-person demo days connecting our top-performing directory startups with accredited international investors, angel syndicates, and strategic enterprise partners.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700 font-medium">
                  Direct introductions to partners at top regional and global venture funds
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700 font-medium">
                  Structured term sheets using standardized YC Post-Money SAFEs
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-sky-600 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-700 font-medium">
                  Press distribution across Africa’s most respected tech journalism outlets
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. High-Impact Call to Action ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-3xl bg-linear-to-r from-sky-600 to-slate-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center space-y-6">
          {/* Subtle Ambient Circle */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)" }}
          />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-sky-200">
              Be Part of the Story
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Put Your Startup on Africa’s Innovation Map?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Join thousands of African founders, builders, and investors. Submit your company profile today to unlock visibility, funding connections, and community resources.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/dashboard/profile"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Your Startup
              </Link>
              <Link
                href="/directory"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-semibold transition-all"
              >
                Browse Directory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
