import { sitePath } from "@/lib/paths";

export type StoryEntry = {
  href: string;
  number: number;
  title: string;
  eyebrow: string;
  excerpt: string;
  meta: string;
};

export function StoryIndex({ entries, className = "" }: { entries: StoryEntry[]; className?: string }) {
  return <ol className={`story-index ${className}`}>{entries.map(entry => <li key={entry.href}><a className="story-row" href={sitePath(entry.href)}><span className="story-number">{String(entry.number).padStart(2, "0")}</span><div className="story-copy"><p className="eyebrow">{entry.eyebrow}</p><h3>{entry.title}</h3><p className="story-excerpt">{entry.excerpt}</p></div><span className="story-meta">{entry.meta}</span><span className="story-arrow" aria-hidden="true">&#8599;</span></a></li>)}</ol>;
}
