import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { ArticleContents, PageFooter } from "@/components/portfolio";
import { ListeningStudy } from "@/components/listening-study";
import { ReportSpread } from "@/components/report-spread";
import { workStories } from "@/lib/work-stories";
import { sitePath } from "@/lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return workStories.map(story => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = workStories.find(item => item.slug === slug);
  return { title: story ? `${story.title || story.company} | Work | Vishal Dhuper` : "Work | Vishal Dhuper", description: story?.summary };
}

export default async function WorkStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = workStories.findIndex(item => item.slug === slug);
  if (index === -1) notFound();
  const story = workStories[index];
  const next = workStories[(index + 1) % workStories.length];

  return (
    <SiteShell>
      <main className="portfolio work-story-page" id="main-content" tabIndex={-1}>
        <a className="back-link" href={sitePath(`/work/#${story.group === "selected" ? "selected" : "earlier"}`)}><span aria-hidden="true">&#8592;</span> All work</a>
        <article className={`essay-article work-story${story.exhibit ? " work-story-wide" : ""}`}>
          <header>
            <p className="eyebrow">{story.group === "selected" ? story.company : "An earlier chapter"} / {story.period}</p>
            <h1>{story.title || story.company}</h1>
            <p className="essay-deck">{story.introduction}</p>
            <p className="essay-byline">{story.role}<span>Vishal Dhuper / a retrospective</span></p>
          </header>
          <ArticleContents label="In this chapter" items={story.sections.map((section, i) => ({ href: `#chapter-${i + 1}`, title: section.heading }))} />
          {story.exhibit && <section className="work-exhibit" aria-labelledby="work-exhibit-title"><h2 id="work-exhibit-title" className="sr-only">{story.exhibit === "listening" ? "Listening in practice" : "Reading the reports"}</h2>{story.exhibit === "listening" ? <ListeningStudy /> : <ReportSpread />}</section>}
          {story.process.length > 0 && <ol className="work-process" aria-label="Work approach">
            {story.process.map((step, i) => <li key={step.title}><span>0{i + 1}</span><h2>{step.title}</h2><p>{step.note}</p></li>)}
          </ol>}
          <div className="essay-body">
            {story.sections.map((section, i) => <section id={`chapter-${i + 1}`} tabIndex={-1} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}
          </div>
          <footer className="essay-provenance"><h2>About this chapter</h2><p>{story.sourceNote}</p></footer>
        </article>
        <PageFooter next={`Next chapter / ${next.company}`} href={`/work/${next.slug}/`} />
      </main>
    </SiteShell>
  );
}
