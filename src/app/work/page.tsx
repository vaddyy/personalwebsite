import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ChapterLabel, PageFooter, PageHeading } from "@/components/portfolio";
import { StoryIndex } from "@/components/story-index";
import { WordStudy } from "@/components/word-study";
import { workStories } from "@/lib/work-stories";
import { sitePath } from "@/lib/paths";

export const metadata: Metadata = { title: "Work | Vishal Dhuper", description: "Selected stories from social listening, media intelligence, strategy and content. The work, and the thinking behind it." };

export default function WorkPage() {
  const selected = workStories.filter(story => story.group === "selected");
  const earlier = workStories.filter(story => story.group !== "selected");
  const featured = selected[0];
  return (
    <SiteShell><main className="portfolio portfolio-work" id="main-content" tabIndex={-1}>
      <PageHeading title="Work" folio="Selected work / 01-05">I spend a lot of time with things people say. The interesting part is finding <em>the story worth telling.</em></PageHeading>
      <nav className="collection-nav" aria-label="Work chapters"><a href="#selected">Selected work <span>01-03</span></a><a href="#earlier">Earlier chapters <span>04-05</span></a></nav>
      <section className="work-selection" id="selected" aria-labelledby="listening-title">
        <ChapterLabel number="01">Brandwatch / Social listening</ChapterLabel>
        <div className="work-feature">
          <div className="feature-introduction"><h2 id="listening-title">People talk.<br /><em>I pay attention.</em></h2><p>I find the useful conversations, look at what people mean, and turn the noise into something a team can act on.</p><a className="text-link" href={sitePath(`/work/${featured.slug}/`)}>Inside the work <span aria-hidden="true">&#8599;</span></a><p className="source-caption">Queries / Categories / Dashboards / Interpretation</p></div>
          <WordStudy kind="work" />
        </div>
        <StoryIndex entries={selected.slice(1).map((story, index) => ({ number: index + 2, href: `/work/${story.slug}/`, eyebrow: `${story.company} / ${story.role.split(" / ")[0]}`, title: story.title || story.company, excerpt: story.summary, meta: story.period }))} />
      </section>
      <section className="work-history" id="earlier" aria-labelledby="origin-title">
        <div className="collection-heading"><h2 id="origin-title">Before all<br /><em>the spreadsheets.</em></h2><p>I was closer to the content and campaigns. These are the earlier chapters, and a few things I still carry into the work.</p></div>
        <StoryIndex className="earlier-index" entries={earlier.map((story, index) => ({ number: index + 4, href: `/work/${story.slug}/`, eyebrow: story.role, title: story.company, excerpt: story.summary, meta: story.period }))} />
      </section>
      <PageFooter next="A few things I've written" href="/writing/" />
    </main></SiteShell>
  );
}
