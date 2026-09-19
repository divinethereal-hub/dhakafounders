export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Ecosystem" | "Playbook" | "Engineering" | "Fundraising";
  coverGradient: string;
  categoryColor: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
  stats?: { label: string; value: string }[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      callout?: {
        type: "tip" | "insight" | "stat";
        title: string;
        text: string;
      };
    }[];
    takeaways: string[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-dhakas-tech-founders-are-unlocking-10b-economy",
    title: "How Dhaka's Tech Founders Are Unlocking Bangladesh's Next $10B Startup Economy",
    excerpt:
      "From mobile financial rails to cross-border B2B software, a new wave of resilient Bangladeshi entrepreneurs is turning regional constraints into generational opportunities.",
    category: "Ecosystem",
    coverGradient: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #0F172A 100%)",
    categoryColor: "#0EA5E9",
    featured: true,
    author: {
      name: "Tanvir Hossain",
      role: "Ecosystem Lead & Former Founder",
      avatar: "TH",
      bio: "Tanvir is a 2x tech founder based in Dhaka, advising early-stage fintech and enterprise SaaS startups across South Asia.",
    },
    publishedAt: "September 18, 2026",
    readTime: "7 min read",
    tags: ["Ecosystem", "Venture Capital", "Scale", "Fintech"],
    stats: [
      { label: "Digital Penetration", value: "72%+" },
      { label: "Projected Economy by 2030", value: "$1 Trillion" },
      { label: "Active Tech Graduates/Yr", value: "25,000+" },
      { label: "Average Founder Age", value: "29 Years" },
    ],
    content: {
      intro:
        "Over the past decade, Bangladesh was widely recognized as an export juggernaut for ready-made garments and remittances. But beneath the surface of the world's most densely populated delta, a seismic shift has been brewing. In co-working spaces across Banani, Gulshan, and Dhanmondi, a homegrown class of ambitious engineers and product leaders is building companies designed not merely to survive local infrastructure hurdles, but to leapfrog legacy systems entirely.",
      sections: [
        {
          heading: "1. The Digital Rails: Beyond Mobile Wallets",
          body: [
            "The story of Bangladesh's digital economy often starts and ends with bKash and Nagad. While these platforms democratized mobile money for over 100 million citizens, they represented phase one: the distribution layer.",
            "Today's founders are building phase two: specialized credit scoring, embedded payroll, micro-insurance underwriting, and merchant commerce engines that sit directly on top of these rails. What once required weeks of physical documentation in bank branches can now be completed in under four minutes via lightweight web interfaces and automated KYC.",
          ],
          callout: {
            type: "insight",
            title: "The Leapfrog Dividend",
            text: "Because Bangladesh skipped the desktop-and-card era, consumers and micro-merchants adopted mobile-native, API-driven workflows on day one. Founders don't have to convince users to replace credit cards; they are their first financial accounts.",
          },
        },
        {
          heading: "2. The Rise of Borderless Engineering & Cross-Border SaaS",
          body: [
            "Historically, foreign investors hesitated over local currency volatility and repatriation complexities. In response, modern Bangladeshi founders have adopted a dual-entity playbook: incorporating holding structures in Singapore, Delaware, or Dubai, while anchoring core research, development, and operational muscle in Dhaka.",
            "This approach unlocks deep unit-economic advantages. Dhaka boasts over 25,000 engineering and STEM graduates every year. The engineering quality matches regional peers, yet runway efficiency allows Dhaka-based startups to iterate through product-market fit two to three times longer than Silicon Valley or Singapore-headquartered competitors on the same capital raise.",
          ],
          callout: {
            type: "stat",
            title: "Capital Efficiency Ratio",
            text: "Every $100K invested in a Dhaka engineering hub produces approximately 2.8x the engineering output and runway longevity compared to traditional tier-1 tech hubs.",
          },
        },
        {
          heading: "3. Institutional Capital Is Taking Notice",
          body: [
            "While international venture funding tightened globally, tier-one global investors — including Sequoia Surge, 500 Global, Wavemaker, and local angels — continue to write checks into high-conviction founders tackling supply chain fragmentation, agri-tech, and health logistics.",
            "The founders winning today are not chasing vanity metrics or hyper-subsidized user acquisition. Instead, they are hyper-focused on positive unit economics from day ninety, high gross margins, and solving non-discretionary operational headaches for Bangladesh's 8 million micro, small, and medium businesses (MSMEs).",
          ],
        },
      ],
      takeaways: [
        "Infrastructure maturity has reached the inflection point where software can generate compounding network effects.",
        "The Delaware/Singapore + Dhaka engineering model provides an unbeatable capital efficiency moat for global and regional software plays.",
        "Sustainable unit economics and tangible B2B utility take precedence over cash-burning consumer subsidies.",
        "Dhaka Founders is dedicated to documenting, connecting, and catalyzing every builder driving this paradigm forward.",
      ],
    },
  },
  {
    slug: "the-bootstrappers-playbook-from-banani-to-global-saas",
    title: "The Bootstrapper's Playbook: Scaling from Banani to Global Customers on $0 VC",
    excerpt:
      "How bootstrapped software teams in Dhaka are building six-figure ARR micro-SaaS products by targeting hyper-specific developer tooling and workflow automation.",
    category: "Playbook",
    coverGradient: "linear-gradient(135deg, #0284C7 0%, #0369A1 50%, #0F172A 100%)",
    categoryColor: "#0284C7",
    author: {
      name: "Farhana Rahman",
      role: "Founder, DevPulse Labs",
      avatar: "FR",
      bio: "Farhana built DevPulse from a small bedroom in Banani into an internationally recognized developer productivity tool with over 12,000 paying users.",
    },
    publishedAt: "September 12, 2026",
    readTime: "5 min read",
    tags: ["Bootstrapping", "SaaS", "Product", "Revenue"],
    stats: [
      { label: "Global Customer Share", value: "94%" },
      { label: "Average Time to $10k MRR", value: "9 Months" },
      { label: "Zero Dilution", value: "100% Owned" },
    ],
    content: {
      intro:
        "Raising a multi-million-dollar seed round makes for celebratory LinkedIn announcements, but in Dhaka, an equally potent movement is quietly thriving: self-funded, profit-first software companies that build for the world while maintaining 100% founder equity.",
      sections: [
        {
          heading: "Focus on Unsexy, Mission-Critical Problems",
          body: [
            "The easiest trap for first-time builders is attempting to create the next consumer social network or ride-sharing app. These businesses require tens of millions of dollars in marketing subsidies before network effects kick in.",
            "The bootstrap playbook flips this dynamic: find a specific B2B pain point — such as Shopify store analytics, PostgreSQL migration tooling, or localized payroll compliance — where a business gladly pays $49 to $299 per month if it saves them five hours of manual labor.",
          ],
          callout: {
            type: "tip",
            title: "Validation Before Writing Code",
            text: "Pre-sell your software before writing a single line of backend logic. If you cannot get 5 potential customers on a discovery call to commit to a beta test, you don't have a distribution problem — you have a value proposition problem.",
          },
        },
        {
          heading: "Leveraging Dhaka's Runway Advantage",
          body: [
            "In San Francisco or London, a founding team of three engineers burns $35,000+ monthly just on basic living and coworking expenses. In Dhaka, a dedicated team of three can live comfortably and execute with laser focus on $2,500 to $3,500 monthly.",
            "That low personal burn rate means you can afford to iterate for twelve or eighteen months without the existential panic of impending insolvency. That runway is your superpower.",
          ],
        },
      ],
      takeaways: [
        "Prioritize day-one cash flow over speculative user growth metrics.",
        "Target international business buyers where price sensitivity is lower.",
        "Use your geographical cost advantage to outlast competitors in niche markets.",
      ],
    },
  },
  {
    slug: "building-world-class-engineering-culture-in-dhaka",
    title: "Building a World-Class Engineering Culture in Dhaka: Lessons from 50+ Hires",
    excerpt:
      "A pragmatic guide for technical founders on hiring top local talent, instilling rigorous code quality, and competing with overseas remote salaries.",
    category: "Engineering",
    coverGradient: "linear-gradient(135deg, #38BDF8 0%, #0284C7 50%, #0F172A 100%)",
    categoryColor: "#38BDF8",
    author: {
      name: "Mahmudul Hasan",
      role: "VP of Engineering & Tech Mentor",
      avatar: "MH",
      bio: "Mahmudul has scaled engineering teams across South Asia, architecting high-throughput distributed systems handling 40M+ daily transactions.",
    },
    publishedAt: "September 04, 2026",
    readTime: "6 min read",
    tags: ["Engineering", "Culture", "Hiring", "Architecture"],
    stats: [
      { label: "Engineering Retention", value: "92%" },
      { label: "PR Cycle Time", value: "< 4 Hours" },
      { label: "Automated Test Coverage", value: "85%+" },
    ],
    content: {
      intro:
        "Every tech startup in Dhaka eventually faces the same talent paradox: how do you attract, cultivate, and retain top-tier engineers when multinational companies and foreign remote contractors are dangling dollar-denominated salaries?",
      sections: [
        {
          heading: "Engineers Leave Bad Processes, Not Just for Higher Pay",
          body: [
            "While competitive compensation is necessary, top engineering talent in Bangladesh frequently leaves organizations due to chaotic deployments, lack of architectural autonomy, and zero mentorship.",
            "When you build a transparent culture that values continuous integration, automated testing, blameless post-mortems, and modern stacks (Next.js, TypeScript, Supabase, Go), great engineers choose to stay because they are actually learning and shipping code they are proud of.",
          ],
          callout: {
            type: "insight",
            title: "Culture as a Moat",
            text: "Invest heavily in internal tech talks, open-source contributions, and clear career leveling. When an engineer feels their personal trajectory accelerates faster inside your company, salary is no longer the sole decision factor.",
          },
        },
        {
          heading: "Adopt Async Communication & Written Documentation",
          body: [
            "Traditional Dhaka corporate culture often relies on endless in-person meetings and verbal hand-offs. High-growth tech companies replace this with written RFCs (Request for Comments), clear architectural diagrams, and structured GitHub Pull Request reviews.",
            "Writing forces clear thinking, creates searchable organizational memory, and prepares your team to operate seamlessly on a global standard.",
          ],
        },
      ],
      takeaways: [
        "Replace verbal instructions with written documentation and design RFCs.",
        "Emphasize code reviews, automated CI/CD, and fast feedback loops.",
        "Provide equity ownership or profit-sharing to align long-term incentives.",
      ],
    },
  },
  {
    slug: "demystifying-fundraising-for-bangladeshi-founders",
    title: "Demystifying Seed Fundraising for Bangladeshi Founders: Term Sheets, SAFEs & Valuations",
    excerpt:
      "Everything early-stage founders in Bangladesh need to know about navigating angel syndicates, Y Combinator-style SAFEs, and cross-border entity structures.",
    category: "Fundraising",
    coverGradient: "linear-gradient(135deg, #0EA5E9 0%, #0369A1 50%, #0F172A 100%)",
    categoryColor: "#0EA5E9",
    author: {
      name: "Samiha Anjum",
      role: "Angel Investor & Strategic Advisor",
      avatar: "SA",
      bio: "Samiha is an active angel investor in Dhaka's early-stage ecosystem, having backed 14 pre-seed and seed stage startups.",
    },
    publishedAt: "August 28, 2026",
    readTime: "8 min read",
    tags: ["Fundraising", "SAFEs", "Cap Table", "Angels"],
    stats: [
      { label: "Standard SAFE Dilution", value: "10% - 18%" },
      { label: "Median Seed Round Size", value: "$350,000" },
      { label: "Typical Close Timeline", value: "8 - 12 Weeks" },
    ],
    content: {
      intro:
        "Fundraising in emerging ecosystems like Dhaka can often feel like navigating a maze shrouded in conflicting advice. Between local angel expectations and international institutional standards, early founders frequently accept predatory terms that handicap their cap tables forever.",
      sections: [
        {
          heading: "Standardize on the Post-Money SAFE",
          body: [
            "Do not spend months negotiating convoluted 60-page shareholder agreements for a $150,000 pre-seed round. Use the standardized Y Combinator Post-Money SAFE (Simple Agreement for Future Equity).",
            "It saves thousands of dollars in legal fees, protects founder voting rights, and provides investors with straightforward economic alignment when your priced Series A arrives.",
          ],
          callout: {
            type: "tip",
            title: "Cap Table Golden Rule",
            text: "Never surrender more than 15% to 20% of equity in your pre-seed or angel round. If founders are left with under 60% by Series A, downstream venture capital firms will deem the company uninvestable.",
          },
        },
        {
          heading: "Build Relationships Months Before You Need Capital",
          body: [
            "Investors invest in lines, not dots. If an investor meets you for the first time on the day you ask for $500,000, they only have a single snapshot. But if you send a concise monthly update showing week-over-week progress, by the time you open your round, your traction speaks for itself.",
          ],
        },
      ],
      takeaways: [
        "Avoid giving away board seats or restrictive veto rights in early angel rounds.",
        "Maintain clean cap tables with standard Delaware or Singapore holding structures.",
        "Treat investor updates as ongoing trust-building engines.",
      ],
    },
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string): BlogPost[] {
  const others = BLOG_POSTS.filter((p) => p.slug !== currentSlug);
  const sameCategory = others.filter((p) => p.category === category);
  if (sameCategory.length >= 2) return sameCategory.slice(0, 2);
  return others.slice(0, 2);
}
