import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ChapterLabel, PageFooter, PageHeading } from "@/components/portfolio";
import { StoryIndex } from "@/components/story-index";
import { WordStudy } from "@/components/word-study";
import { essays, readTime } from "@/lib/writing";
import { sitePath } from "@/lib/paths";

export const metadata: Metadata = { title: "Writing | Vishal Dhuper", description: "Research, field notes and a few thoughts about what words leave out. Writing by Vishal Dhuper." };

export default function WritingPage() {
  const featured = essays[0];
  return <SiteShell><main className="portfolio portfolio-writing" id="main-content" tabIndex={-1}>
    <PageHeading title="Writing" folio="Research / Practice / Notebook">Usually a question I can&apos;t leave alone. <br className="intro-break" />Sometimes an answer. Often a better question.</PageHeading>
    <section className="featured-writing" aria-labelledby="featured-title">
      <ChapterLabel number="01">Research / {readTime(featured)}</ChapterLabel>
      <div className="essay-feature">
        <div className="feature-introduction"><h2 id="featured-title"><a href={sitePath(`/writing/${featured.slug}/`)}>{featured.title}</a></h2><p>{featured.excerpt}</p><a className="text-link" href={sitePath(`/writing/${featured.slug}/`)}>Read the essay <span aria-hidden="true">&#8599;</span></a><p className="source-caption">Adapted from my MSc dissertation.<br />Kingston University, London.</p></div>
        <WordStudy kind="writing" />
      </div>
      <blockquote className="essay-line"><p>Don&apos;t make the promise bigger than the proof.</p><footer>A line from the essay.</footer></blockquote>
    </section>
    <section className="writing-index" aria-labelledby="notes-title"><div className="section-running-title"><h2 id="notes-title">Notes from the work.</h2><span>Two shorter thoughts.</span></div><StoryIndex entries={essays.slice(1).map((essay, index) => ({ number: index + 2, href: `/writing/${essay.slug}/`, eyebrow: `${essay.category} / ${essay.format.split(" / ")[0]}`, title: essay.title, excerpt: essay.excerpt, meta: readTime(essay) }))} /></section>
    <p className="editorial-note">The research piece comes from my dissertation. The shorter notes are new portfolio drafts, not previously published articles.</p>
    <PageFooter next="Away from the work" href="/moments/" />
  </main></SiteShell>;
}
