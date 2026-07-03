import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gauravmehta.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gaurav Mehta | Backend-Focused Full-Stack Engineer",
    template: "%s | Gaurav Mehta",
  },
  description:
    "Gaurav Mehta — Backend-focused Full-Stack Software Engineer building scalable backend systems, fintech infrastructure, and AI-powered workflow platforms with TypeScript, Node.js, Next.js, PostgreSQL, and Redis.",
  keywords: [
    "Gaurav Mehta",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Software Engineer",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "Fintech",
    "AI Workflow",
    "Distributed Systems",
    "Portfolio",
  ],
  authors: [{ name: "Gaurav Mehta", url: siteUrl }],
  creator: "Gaurav Mehta",
  publisher: "Gaurav Mehta",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Gaurav Mehta | Backend-Focused Full-Stack Engineer",
    description:
      "Backend-focused Full-Stack Engineer building scalable backend systems, fintech infrastructure, and AI-powered workflow platforms.",
    url: "/",
    siteName: "Gaurav Mehta",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 669,
        alt: "Gaurav Mehta — Backend-Focused Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Mehta | Backend-Focused Full-Stack Engineer",
    description:
      "Backend-focused Full-Stack Engineer building scalable backend systems, fintech infrastructure, and AI-powered workflow platforms.",
    creator: "@gauravmehta043",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var saved = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = saved || (systemDark ? 'dark' : 'light');
                document.documentElement.dataset.theme = theme;
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
