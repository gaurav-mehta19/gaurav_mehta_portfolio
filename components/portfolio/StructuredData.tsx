import { portfolioData } from "@/lib/portfolio-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.gauravmehta.online";

/**
 * Emits Person + WebSite JSON-LD so search engines can attribute the site to a
 * real person (rich results / knowledge panel eligibility). Built from
 * portfolioData so it stays in sync with the visible content.
 */
export default function StructuredData() {
  const sameAs = portfolioData.socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href);

  const knowsAbout = Array.from(
    new Set(portfolioData.skillGroups.flatMap((group) => group.items)),
  );

  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: portfolioData.name,
    url: siteUrl,
    email: portfolioData.email,
    jobTitle: portfolioData.role,
    description: portfolioData.summary,
    image: `${siteUrl}/og-image.png`,
    sameAs,
    knowsAbout,
    worksFor: portfolioData.experience.slice(0, 1).map((exp) => ({
      "@type": "Organization",
      name: exp.company,
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${portfolioData.name} — Portfolio`,
    description: portfolioData.summary,
    inLanguage: "en-US",
    publisher: { "@id": `${siteUrl}/#person` },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
