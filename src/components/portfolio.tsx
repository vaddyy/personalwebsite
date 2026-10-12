import Image from "next/image";
import type { ReactNode } from "react";
import { profileLinks } from "@/lib/content";
import { sitePath } from "@/lib/paths";

export function PageHeading({ title, children, folio }: { title: string; children: ReactNode; folio: string }) {
  return <header className="portfolio-heading"><div><h1>{title}</h1><p className="portfolio-intro">{children}</p></div><p className="folio">Vishal Dhuper<br />{folio}</p></header>;
}

export function ChapterLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="chapter-label"><span>{number}</span>{children}</p>;
}

export function CaseDetails({ children, label = "Inside the work" }: { children: ReactNode; label?: string }) {
  return <details className="case-details"><summary>{label}<span aria-hidden="true" className="details-mark" /></summary><div className="details-body">{children}</div></details>;
}

export function RoleNote({ title, children }: { title: string; children: ReactNode }) {
  return <div className="role-note"><h3>{title}</h3><p>{children}</p></div>;
}

export function ArticleContents({ items, label = "In this piece" }: { items: { href: string; title: string }[]; label?: string }) {
  return <div className="article-contents"><CaseDetails label={label}><nav aria-label={label}><ol className="reading-contents">{items.map((item, i) => <li key={item.href}><a href={item.href}><span>{String(i + 1).padStart(2, "0")}</span>{item.title}</a></li>)}</ol></nav></CaseDetails></div>;
}

export function PortfolioImage({ name, alt, width, height, priority = false, className = "" }: { name: string; alt: string; width: number; height: number; priority?: boolean; className?: string }) {
  return <Image className={`portfolio-image ${className}`} src={sitePath(`/images/${name}`)} alt={alt} width={width} height={height} unoptimized priority={priority} />;
}

export function PageFooter({ next, href }: { next: string; href: string }) {
  return <footer className="portfolio-footer"><a href={sitePath(href)} className="next-link">{next}<span aria-hidden="true">&#8599;</span></a><div className="footer-links"><a href={profileLinks.email}>Email</a><a href={profileLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profileLinks.instagram} target="_blank" rel="noreferrer">Instagram</a></div></footer>;
}
