import type { Metadata } from "next";

import { InteriorPage } from "@/components/interior-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Work",
  description: "Strategy, media intelligence, and brand work by Vishal Dhuper.",
};

const workItems = [
  {
    title: "Cision",
    description:
      "My current home for media intelligence. I spend the day reading the room at scale, then shrinking it back down to what a brand should notice, remember, or do next.",
    meta: "Now",
  },
  {
    title: "Coca-Cola",
    description:
      "Big-brand listening with plenty of texture: rituals, reactions, campaigns, culture, and the tiny shifts that show when attention has actually moved.",
    meta: "Media intelligence",
  },
  {
    title: "The LEGO Group",
    description:
      "A brand where play does serious work. I look for how nostalgia, creativity, parents, collectors, and communities quietly shape the bigger picture.",
    meta: "Audience read",
  },
  {
    title: "Skyscanner",
    description:
      "Travel has its own mood. With Skyscanner, the useful bit is often spotting what people are planning, avoiding, dreaming about, or suddenly reconsidering.",
    meta: "Brand tracking",
  },
  {
    title: "Motorsport + wellbeing",
    description:
      "Very different rooms, same instinct. One moves on pace and spectacle; the other on trust and care. Both need the noise translated properly.",
    meta: "Client mix",
  },
  {
    title: "Tealfeed",
    description:
      "A startup chapter where I learned how growth feels up close: scrappy plans, faster feedback, better distribution, and a lot of useful experiments.",
    meta: "Growth",
  },
  {
    title: "Dab of India",
    description:
      "The early agency muscle. Campaign calendars, social behaviour, client needs, and the lesson that taste matters, but proof makes the room quieter.",
    meta: "Campaigns",
  },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Work"
        description="This is the paid-to-be-curious bit. I work with brands, culture, and public reaction, then turn the messy middle into something clear enough for a team to trust."
        items={workItems}
      />
    </SiteShell>
  );
}
