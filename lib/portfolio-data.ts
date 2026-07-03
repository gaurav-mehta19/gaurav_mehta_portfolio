export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  status?: "Shipped" | "Building";
  description: string;
  highlights: string[];
  tech: string[];
  thumbnail: string;
  links: ProjectLink[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  logo: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type PortfolioData = {
  name: string;
  role: string;
  summary: string;
  email: string;
  resumeHref: string;
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
  skillGroups: SkillGroup[];
};

export const portfolioData: PortfolioData = {
  name: "Gaurav Mehta",
  role: "Full-Stack Software Engineer",
  summary:
    "Full-stack software engineer specializing in scalable backend systems, modern web applications, and AI-powered products. I build with TypeScript, Next.js, Node.js, and PostgreSQL, focusing on performance, clean architecture, and developer experience. Built fintech systems, workflow orchestration engines, and LLM-driven automation platforms, with proven impact across production-scale startups.",
  email: "mehta.gaurav086@gmail.com",
  resumeHref:
    "https://drive.google.com/file/d/1Rrd8f7GP5E-FPY6kAjxyeJzDtjNl62GP/view?usp=sharing",
  socials: [
    { label: "GitHub", href: "https://github.com/gaurav-mehta19" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gaurav-mehta-286071247",
    },
    { label: "X", href: "https://x.com/gauravmehta043" },
    { label: "LeetCode", href: "https://leetcode.com/u/unni19/" },
    { label: "mehta.gaurav086@gmail.com", href: "mailto:mehta.gaurav086@gmail.com" },
  ],
  projects: [
    {
      name: "NextFlow",
      status: "Building",
      description:
        "Visual LLM workflow builder — a drag-and-connect canvas where workflows execute as recursive DAGs with live per-node state streamed to the browser.",
      highlights: [
        "Architected a **recursive DAG execution engine** on Trigger.dev where each node blocks only on its direct upstream dependencies — fast branches proceed immediately instead of stalling behind slow siblings.",
        "Guaranteed **exactly-once execution** in diamond-shaped DAGs with scoped idempotency keys, so shared upstream nodes run a single time even when fanned out to concurrent downstreams.",
        "Eliminated client polling by streaming **live per-node execution state over a single SSE channel** per workflow, cutting redundant serverless invocations.",
        "Used **checkpointed waits** so time-delayed nodes consume zero compute while suspended; the database is history-of-record, not a coordination layer.",
        "Built end-to-end: **React Flow canvas** with debounced autosave, Clerk-authenticated + Zod-validated API routes, and Gemini/Transloadit integrations.",
      ],
      tech: [
        "Next.js 14",
        "TypeScript",
        "Trigger.dev v4",
        "React Flow",
        "PostgreSQL",
        "Prisma",
        "Clerk",
      ],
      thumbnail: "/projects/nextflow/thumbnail.png",
      links: [
        { label: "GitHub", href: "https://github.com/gaurav-mehta19/nextflow" },
        { label: "Live", href: "https://nextflow-topaz-xi.vercel.app" },
      ],
    },
    {
      name: "InstantPay",
      status: "Shipped",
      description:
        "Fintech payment wallet built as a monorepo with a modular backend architecture — service, repository, and adapter layers with clean separation of business logic.",
      highlights: [
        "Secure webhook processing with **HMAC signature verification** and idempotency checks to prevent duplicate transactions.",
        "Transaction lifecycle **state machine** (Processing → Success/Failed) enforcing valid state transitions.",
        "**Integer-based money representation** eliminating floating-point precision issues.",
        "CI/CD with **GitHub Actions and Docker**; route-level code splitting on the frontend.",
      ],
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Turborepo", "Docker"],
      thumbnail: "/projects/instantpay/thumbnail.png",
      links: [
        { label: "GitHub", href: "https://github.com/gaurav-mehta19/InstantPay" },
        {
          label: "Live",
          href: "https://instant-pay-user-app.vercel.app",
        },
      ],
    },
  ],
  experience: [
    {
      role: "Full-Stack Intern",
      company: "Second Brain Labs",
      period: "Nov 2025 - Dec 2025",
      logo: "/projects/logos/second_brain_labs_logo.jpeg",
      highlights: [
        "Built an end-to-end **AI-driven campaign suggestion pipeline** using LinkedIn data extraction and Apify APIs to generate personalized outreach campaigns.",
        "Integrated an **LLM-based content generation pipeline** for dynamic message personalization, reducing manual effort and improving engagement quality.",
        "Enhanced manually created campaigns with LLM-assisted workflows — refining messaging, clarity, and personalization.",
        "Developed external APIs for campaign management, automated outreach, and user lifecycle handling.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Trading Studio",
      period: "Apr 2025 - Aug 2025",
      logo: "/projects/logos/tradingstudio_logo.jpeg",
      highlights: [
        "Optimized PostgreSQL queries and indexing, reducing response times from **3s to under 500ms** for core analytics workflows.",
        "Increased test coverage from **40% to 85%** with an automated testing framework, significantly reducing production bugs.",
        "Delivered **60+ production features** and improvements within 4 months.",
        "Improved system responsiveness by up to **600%** in high-traffic areas.",
        "Built a query management platform enabling non-technical users to create and analyze complex reports.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Languages & Core",
      items: [
        "TypeScript",
        "JavaScript",
        "Go",
        "C++",
        "SQL",
        "Node.js",
        "Express",
        "Hono",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      label: "AI & Automation",
      items: [
        "LLM Integration",
        "Prompt Engineering",
        "AI Workflow Design",
        "Content Generation Pipelines",
      ],
    },
    {
      label: "Infrastructure & DevOps",
      items: [
        "AWS (EC2/S3)",
        "Cloudflare Workers",
        "Nginx",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Git",
        "Turborepo",
        "GitHub Actions",
      ],
    },
  ],
};
