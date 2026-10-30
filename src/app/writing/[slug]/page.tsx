import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { ArticleContents, PageFooter } from "@/components/portfolio";
import { essays, readTime } from "@/lib/writing";
import { sitePath } from "@/lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return essays.map(essay => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find(e => e.slug === slug);
  return { title: essay ? `${essay.title} | Vishal Dhuper` : "Writing | Vishal Dhuper", description: essay?.excerpt };
}

export default async function EssayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const essay = essays.find(e => e.slug === slug);
  if (!essay) notFound();
  const next = essays[(essays.indexOf(essay) + 1) % essays.length];

  return (
    <SiteShell>
      <main className="portfolio essay-page" id="main-content" tabIndex={-1}>
        <article className="essay-article">
          <header>
            <a className="back-link" href={sitePath("/writing/")}><span aria-hidden="true">&#8592;</span> All writing</a>
            <p className="eyebrow">{essay.category} / {readTime(essay)}</p>
            <h1>{essay.title}</h1>
            <p className="essay-deck">{essay.excerpt}</p>
            <p className="essay-byline">Vishal Dhuper <span>{essay.format}</span></p>
          </header>
          <ArticleContents items={essay.sections.flatMap((section, index) => section.heading ? [{ href: `#piece-${index + 1}`, title: section.heading }] : [])} />
          <div className="essay-body">
            {essay.sections.map((section, index) => (
              <section id={`piece-${index + 1}`} tabIndex={-1} key={index}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map(p => <p key={p}>{p}</p>)}
              </section>
            ))}
          </div>
          <footer className="essay-provenance"><h2>About this piece</h2><p>{essay.provenance}</p></footer>
        </article>
        <PageFooter label="Next essay" next={next.title} href={`/writing/${next.slug}/`} className="reading-footer" />
      </main>
    </SiteShell>
  );
}
