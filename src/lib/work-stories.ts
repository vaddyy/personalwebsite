export type WorkStory = {
  slug: string;
  company: string;
  period: string;
  role: string;
  summary: string;
  introduction: string;
  process: { title: string; note: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  sourceNote: string;
  title?: string;
  exhibit?: "listening" | "reporting";
  group?: "selected";
};

export const workStories: WorkStory[] = [
  {
    slug: "social-listening",
    company: "Brandwatch",
    title: "Finding the useful conversation.",
    group: "selected",
    exhibit: "listening",
    period: "Selected practice",
    role: "Social listening / Consumer intelligence",
    summary: "Queries, categories and dashboards that make the conversation easier to understand.",
    introduction: "There is always more conversation than anyone can read. My job is to find the part that matters, understand what is changing, and leave the team with something more useful than a bigger spreadsheet.",
    process: [],
    sections: [
      { heading: "Start with a question.", paragraphs: [
        "I use Brandwatch for social listening and competitor intelligence. Before I build a dashboard, I want to know what we're trying to understand. Who is getting attention? What is driving it? Which questions keep turning up?",
        "A good search is as much about leaving things out as bringing things in. I build and refine Boolean queries around names, context and exclusions, then read individual results to check that the conversation belongs in the first place.",
      ] },
      { heading: "Give the conversation some shape.", paragraphs: [
        "I build categories for themes such as launches, partnerships and customer experience. These answer a different question from sentiment. What people are discussing and how they feel about it shouldn't become the same label.",
        "One competitor-intelligence handoff brought together four competitor queries and five question-led dashboard tabs, with analyst tags for useful posts, spike drivers and noise. The aim was to make it possible to follow a finding back to its source.",
      ] },
      { heading: "Make the comparison fair.", paragraphs: [
        "A comparison needs the same dates, markets, languages and sources. Otherwise the chart can look convincing while telling us very little. When something spikes, I go back to the posts before deciding what caused it.",
        "Automated sentiment is a starting point. I check the language, keep the caveats visible, and distinguish an interesting pattern from a conclusion the evidence can actually support.",
      ] },
      { heading: "Leave something useful behind.", paragraphs: [
        "My contribution covers the queries, categories, dashboards and interpretation, along with a reusable template and guidance for reading the results. Not just the view of what happened, but a way for the team to keep asking better questions.",
        "The last step is a short brief: what changed, what it might mean, how confident we can be, and what deserves a closer look. A dashboard can show the movement. Someone still has to explain why it matters.",
      ] },
    ],
    sourceNote: "A portfolio reconstruction grounded in my dashboard template and competitor-intelligence handoff. Names, original query details and account information are withheld. The interactive examples are fictional, not live Brandwatch data or measured client outcomes.",
  },
  {
    slug: "media-intelligence",
    company: "Cision",
    title: "How did the story land?",
    group: "selected",
    exhibit: "reporting",
    period: "2024-2026",
    role: "Media Analyst / Media intelligence",
    summary: "Following the coverage, the messages that travelled, and the explanation behind the numbers.",
    introduction: "A brand can appear in a lot of places without the same story landing in all of them. At Cision, I looked past the total to understand what travelled, where it travelled, and what the coverage actually said.",
    process: [],
    sections: [
      { heading: "Different brands. Different questions.", paragraphs: [
        "My reporting portfolio included Coca-Cola, the LEGO Group and Skyscanner, alongside motorsport and health & wellbeing. The questions changed with the brand and the brief: reputation, message delivery, product visibility, markets or competitor coverage.",
        "The common thread was interpretation. A report needed to explain the change, not simply describe the shape of the chart.",
      ] },
      { heading: "The reading before the report.", paragraphs: [
        "I read and coded coverage, checked the data, compared periods and topics, and followed the source stories behind a change. In travel reporting, that included looking at market differences, potential audience, product mentions and competitor coverage.",
        "Sometimes a story appeared in more places without reaching a larger potential audience. That distinction mattered. More coverage did not automatically mean more attention, and neither figure was evidence of more sales.",
      ] },
      { heading: "Keep the tone in context.", paragraphs: [
        "For reputation work, I looked at message delivery, topic movement and tone. Human-coded news coverage and automated social sentiment were kept distinct rather than treated as interchangeable measures.",
        "A number was the beginning of the explanation. The language, sources and stories around it helped establish what we could reasonably say.",
      ] },
      { heading: "My part in it.", paragraphs: [
        "My contribution was the reading, coding, checking and interpretation, and then the writing that made it usable. I wanted someone opening the report to understand what drove the change and where to look next.",
        "The work sharpened a habit I still use: make the smallest useful claim the evidence can support. A clear explanation is worth more than a confident sentence that goes too far.",
      ] },
    ],
    sourceNote: "A retrospective based on my CV and travel/reputation reports. This spread is an explanatory reconstruction, not an original client deliverable. Client statistics, private correspondence and full reports are not published. Business outcomes are not inferred from coverage measures.",
  },
  {
    slug: "brandwatch-in-india",
    company: "Brandwatch in India",
    title: "A platform is not a plan.",
    group: "selected",
    period: "Proposal",
    role: "Strategy / Independent business-case proposal",
    summary: "Turning platform capabilities into a question, a focused pilot and a reason to keep using it.",
    introduction: "My Brandwatch-to-India proposal started with a fairly practical question: if a team had the platform tomorrow, what would they actually do differently? A list of features wasn't going to answer that.",
    process: [
      { title: "A real question", note: "A sector and a decision worth understanding." },
      { title: "A focused pilot", note: "A smaller test with an agreed definition of useful." },
      { title: "A reason to continue", note: "Findings connected to a practical next decision." },
    ],
    sections: [
      { heading: "Begin with the decision.", paragraphs: [
        "I framed the opportunity around sector questions rather than a tour of the software. A useful demonstration needs a recognisable problem: a competitor gaining attention, an audience question, or a change the team needs to understand.",
        "That makes the capability easier to judge. The question is no longer whether a dashboard looks impressive, but whether it helps someone do something they couldn't do as well before.",
      ] },
      { heading: "Keep the first version small.", paragraphs: [
        "The proposal set out a focused pilot. Define the question, agree what a useful result would look like, and build a way to test it before turning the idea into a larger commitment.",
        "My part was framing the opportunity, translating platform capabilities into sector questions and planning a testable route forward.",
      ] },
      { heading: "Know what is still a proposal.", paragraphs: [
        "This is a business-case proposal, not a completed launch. Forecasts are assumptions to test, not outcomes to display as if they already happened.",
        "What I like about this work is the bridge between possibility and practice. The technology has a lot to offer. The plan has to explain which part matters to this team, and why.",
      ] },
    ],
    sourceNote: "Adapted from my Brandwatch-to-India business-case proposal. No forecasts are presented as achieved revenue, adoption or campaign outcomes. This page describes the strategic framing, not a client launch or an endorsement by Brandwatch.",
  },
  {
    slug: "tealfeed",
    company: "Tealfeed",
    period: "2022",
    role: "Digital marketing & content strategy",
    summary: "Making the content, then figuring out how people would find it.",
    introduction: "This was where I got properly into digital and content marketing. The job wasn't finished when something was written. It still needed a way to reach the right people.",
    process: [
      { title: "The idea", note: "Content and creative thinking." },
      { title: "The route", note: "Social, digital and paid distribution." },
      { title: "The response", note: "Engagement, discovery and what to try next." },
    ],
    sections: [
      { heading: "A bit of context.", paragraphs: [
        "At Tealfeed, I worked across content strategy, digital marketing and campaigns. That meant thinking about the thing we were making and the plan around it: where it would appear, who it was for, and how we'd tell if it was working.",
        "I liked being close to both sides. The creative work gave the plan something to say. Distribution gave it somewhere to go.",
      ] },
      { heading: "What I worked on.", paragraphs: [
        "I helped develop and put a digital marketing plan into practice, with content distributed across different platforms rather than treated as a series of isolated posts. Online engagement and organic discovery were part of the same conversation.",
        "Alongside that, I worked on creative project ideas, made recommendations for social and digital marketing, and ran several advertising campaigns. There was a lot of moving between an idea and the practical question of how to make it work.",
        "It was collaborative work. I worked with people across the team to connect the content, the campaign and the way we put it out into the world.",
      ] },
      { heading: "The part I still use.", paragraphs: [
        "I don't think of distribution as the bit that happens after the interesting work. It changes the work itself. A person finding something in a feed is not in the same situation as someone already looking for it.",
        "That is what I carry into strategy now: start with the person and the context, then decide what the content needs to do. Not every good idea needs to appear everywhere.",
      ] },
    ],
    sourceNote: "A retrospective based on my CV and a contemporaneous Tealfeed reference. The outline above describes the approach, not an original campaign asset. Private correspondence and unverified campaign figures are not reproduced.",
  },
  {
    slug: "dab-of-india",
    company: "Dab of India",
    period: "2021",
    role: "Account Executive / Pune",
    summary: "Campaigns, social, and learning from what people actually did.",
    introduction: "Before the dashboards, I was closer to the posts. At Dab of India, I worked on social content and campaigns, then looked at the response to work out what should happen next.",
    process: [
      { title: "Plan it", note: "Content strategy and a working calendar." },
      { title: "Put it out", note: "Interactive campaigns and social advertising." },
      { title: "Learn from it", note: "Analytics, A/B tests and customer behaviour." },
    ],
    sections: [
      { heading: "A bit of context.", paragraphs: [
        "I was an Account Executive at Dab of India in Pune. The work covered targeted content, interactive campaigns, social media advertising and reporting. A mix of making things happen and checking what happened afterwards.",
        "It gave me a practical view of marketing. An idea could sound good in a conversation, but the audience still got to have the final say.",
      ] },
      { heading: "What I worked on.", paragraphs: [
        "I worked on targeted content strategy and interactive campaigns for Instagram, with the aim of building engagement and a stronger social presence. I also helped put a social media calendar into practice, making the publishing rhythm more consistent.",
        "Analytics and A/B testing were part of the work, not just something to add to the report. They gave us a way to compare approaches and understand what people responded to.",
        "I used reporting to bring customer behaviour into the conversation, alongside social advertising aimed at generating leads. The point was to connect what we put out with what people did next, rather than stop at the post itself.",
      ] },
      { heading: "The part I still use.", paragraphs: [
        "I still like a plan that leaves room to change its mind. A content calendar gives you a rhythm; the response tells you when to adjust it.",
        "That experience is part of why I enjoy analysis now. I know there are real choices on the other side of a report: a message to rewrite, a format to try, or an idea that needs another go.",
      ] },
    ],
    sourceNote: "A role retrospective based on my CV. Original client posts and campaign dashboards were not available for this preview, so no invented campaign screenshots, named clients or independently unverified growth figures are included.",
  },
];
