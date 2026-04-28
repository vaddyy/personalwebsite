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
      "Where I turn coverage, social chatter, and brand noise into the kind of insight a team can actually move with.",
    meta: "2024 - Now",
    href: "https://www.cision.com/",
  },
  {
    title: "Coca-Cola",
    description:
      "Tracking peaks, sentiment shifts, and the little public signals that tell you when a brand has entered the room.",
    meta: "Media intelligence",
    href: "https://www.coca-colacompany.com/",
  },
  {
    title: "The LEGO Group",
    description:
      "Narrative mapping, audience signals, and keeping an eye on how playful ideas travel once the internet gets hold of them.",
    meta: "Social listening",
    href: "https://www.lego.com/",
  },
  {
    title: "Skyscanner",
    description:
      "Travel stories, competitor movement, and the useful difference between what gets covered and what gets remembered.",
    meta: "Brand tracking",
    href: "https://www.skyscanner.net/",
  },
  {
    title: "Motorsport + wellbeing",
    description:
      "Two very different worlds, both full of signals: speed, care, reputation, communities, and surprisingly human patterns.",
    meta: "Client mix",
  },
  {
    title: "Tealfeed",
    description:
      "Content strategy with momentum: more engagement, more organic traffic, and sharper reasons for people to come back.",
    meta: "2022",
    href: "https://tealfeed.com/",
  },
  {
    title: "Dab of India",
    description:
      "Campaigns, social calendars, customer behaviour, and the early lesson that beautiful ideas still need proof.",
    meta: "2021",
  },
];

export default function WorkPage() {
  return (
    <SiteShell>
      <InteriorPage
        title="Work"
        description="I work somewhere between strategy and sense-making. A lot of it starts messy: coverage, comments, dashboards, competitor moves, tiny clues. Then I pull it into a story that feels useful."
        items={workItems}
      />
    </SiteShell>
  );
}
