import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Mehta | Portfolio",
  description:
    "Gaurav Mehta — Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL. View projects, experience, and engineering notes.",
  openGraph: {
    title: "Gaurav Mehta | Portfolio",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gaurav Mehta | Portfolio",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, Next.js, Node.js, and PostgreSQL.",
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
      className={manrope.variable}
    >
      <body className={`antialiased ${inter.className}`}>
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
