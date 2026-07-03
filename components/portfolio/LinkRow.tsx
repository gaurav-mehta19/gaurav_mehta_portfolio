import Link from "next/link";

type LinkRowProps = {
  links: { label: string; href: string }[];
  className?: string;
};

export default function LinkRow({ links, className }: LinkRowProps) {
  return (
    <div className={`link-row ${className ?? ""}`.trim()}>
      {links.map((link) =>
        link.href.startsWith("http") ? (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {link.label}
          </Link>
        ) : (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="text-link"
          >
            {link.label}
          </a>
        )
      )}
    </div>
  );
}
