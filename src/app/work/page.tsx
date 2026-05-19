import type { Metadata } from "next";

import { InteriorPage } from "@/components/interior-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Work",
  description: "Strategy, media intelligence, and brand work by Vishal Dhuper.",
};

const workItems = [
  {
    title: "Cision / Signal Practice",
    description:
      "Current home. I read coverage, social noise and competitor movement, then turn it into the kind of calm note a team can use.",
    meta: "Now",
  },
  {
    title: "Coca-Cola / Everyday Rituals",
    description:
      "With a brand that big, the interesting thing is rarely scale itself. It is the tiny public ritual: a bottle, a joke, a campaign, a memory.",
    meta: "Culture",
  },
  {
    title: "The LEGO Group / Serious Play",
    description:
      "A brick can carry parents, collectors, nostalgia, creativity and community. The work is noticing which feeling is driving the story.",
    meta: "Community",
  },
  {
    title: "Skyscanner / Travel Weather",
    description:
      "Searches have moods. Dreaming, delaying, comparing, panic-booking, saving for later. I like finding the weather underneath the intent.",
    meta: "Intent",
  },
  {
    title: "Motorsport / Fast Theatre",
    description:
      "Speed is only the surface. Under it: loyalty, rivalry, spectacle, sponsorship, risk, and a fandom that never sits still.",
    meta: "Reputation",
  },
  {
    title: "Health + Wellbeing / Care Language",
    description:
      "A quieter category with sharper stakes. Trust, proof, doubt and reassurance matter more than making the loudest claim.",
    meta: "Trust",
  },
  {
    title: "Tealfeed / Momentum Desk",
    description:
      "The startup chapter. Angles, search, distribution, feedback, content experiments, and learning how fast a small win can teach.",
    meta: "Growth",
  },
  {
    title: "Dab of India / Campaign Floor",
    description:
      "Early agency muscles: calendars, client notes, social behaviour, and the useful pain of seeing which ideas survive the week.",
    meta: "Campaigns",
  },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Work"
        description="Work is the room-reading bit. Newsrooms, comment sections, client questions, competitor noise. I listen for the one thing a brand can actually use."
        items={workItems}
      />
    </SiteShell>
  );
}
