import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { CaseDetails, ChapterLabel, PageFooter, PageHeading } from "@/components/portfolio";
import { profileLinks } from "@/lib/content";

export const metadata: Metadata = { title: "Moments | Vishal Dhuper", description: "Coffee, small detours and the everyday bits. A few personal notes by Vishal Dhuper." };

export default function MomentsPage() {
  return <SiteShell><main className="portfolio portfolio-moments" id="main-content" tabIndex={-1}>
    <PageHeading title="Moments" folio="Away from the work">Not everything needs a brief.<br />Some things are just <em>good parts of a day.</em></PageHeading>
    <section className="moment-piece" aria-labelledby="coffee-title">
      <ChapterLabel number="01">Usually starts here</ChapterLabel>
      <div className="moment-text"><h2 id="coffee-title">Just a coffee.<br /><em>Famous last words.</em></h2><div><p>I usually go in for one thing. Then there&apos;s a good table, something in the pastry case, and suddenly I&apos;m staying a little longer.</p><p>The coffee matters. So does having nowhere urgent to be for the next twenty minutes.</p><a className="text-link" href={profileLinks.broonbrown} target="_blank" rel="noreferrer">The coffee gets its own page / @broonbrown <span aria-hidden="true">&#8599;</span></a></div></div>
      <CaseDetails label="And then, probably another coffee."><p className="moment-afterthought">I like the bits around the cup as much as the cup itself. The chairs, the light, the decision to order something else. A small stop that turns into the nicest part of the afternoon.</p></CaseDetails>
    </section>
    <section className="moment-piece" aria-labelledby="detour-title">
      <ChapterLabel number="02">On the way somewhere</ChapterLabel>
      <div className="moment-text"><h2 id="detour-title">A small detour.<br /><em>No particular reason.</em></h2><div><p>A quieter street. A window worth stopping at. The long way back when the short way would have been perfectly fine.</p><p>I spend enough of my day trying to make sense of things. It&apos;s nice to let a few of them just be interesting.</p><a className="text-link" href={profileLinks.instagram} target="_blank" rel="noreferrer">The everyday bits / Instagram <span aria-hidden="true">&#8599;</span></a></div></div>
      <CaseDetails label="Not everything has to turn into something."><p className="moment-afterthought">Sometimes the point is just that I noticed it. No useful takeaway, no big explanation. I liked it, and that was enough.</p></CaseDetails>
    </section>
    <PageFooter next="Back to the introduction" href="/" />
  </main></SiteShell>;
}
