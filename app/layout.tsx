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
  title: "Gaurav Mehta | Portfolio",
  description:
    "Gaurav Mehta — Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL. View projects, experience, and engineering notes.",
  openGraph: {
    title: "Gaurav Mehta | Portfolio",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL.",
    url: "/",
    siteName: "Gaurav Mehta",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 669,
        alt: "Gaurav Mehta — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Mehta | Portfolio",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL.",
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
