import { profileLinks } from "@/lib/content";
import { Reveal } from "@/components/reveal-system";

export function HeroStatement() {
  return (
    <main className="home-stage">
      <h1 className="sr-only">Vishal Dhuper, creative marketing and media intelligence professional</h1>
      <div className="home-copy" aria-label="Introduction">
        <span className="home-text" style={{ "--delay": 0 } as React.CSSProperties}>
          Yo! I&apos;m{" "}
          <Reveal label="Vishal Dhuper">
            . I&apos;m not sure how to intro myself{" "}
            <Reveal label="anymore">
              . My background is in media analysis, but I love everything related to{" "}
              <Reveal label="strategy">
                . In the last few years I&apos;ve found my niche: making sense of conversations and turning them into
                stories people actually care about.
              </Reveal>
            </Reveal>
          </Reveal>{" "}
        </span>

        <span className="home-text" style={{ "--delay": 1 } as React.CSSProperties}>
          I work at{" "}
          <Reveal label="Cision">
            . It&apos;s where I spend most of my time understanding how brands show up in the{" "}
            <Reveal label="real world">
              , and what people actually take away from it.{" "}
            </Reveal>
            I wear many different{" "}
            <Reveal label="hats">
              . But my main focus is shaping ideas through{" "}
              <Reveal label="content">
                , audience understanding, and a bit of <span className="serif-italic">thoughtful overthinking</span>.
              </Reveal>
              {" "}
              Before that, I worked at{" "}
              <Reveal label="Tealfeed">, helping grow content and digital presence,</Reveal> and at{" "}
              <Reveal label="Dab of India">
                , where I got properly stuck into{" "}
                <Reveal label="campaigns">
                  ,{" "}
                  <Reveal label="social">, and figuring out what works (and what really doesn&apos;t).</Reveal>
                </Reveal>
              </Reveal>
            </Reveal>
          </Reveal>{" "}
        </span>

        <span className="home-text" style={{ "--delay": 2 } as React.CSSProperties}>
          I live in{" "}
          <Reveal label="London">
            {" "}
            now, but I was born in{" "}
            <Reveal label="Ahmednagar">
              , a small town near{" "}
              <Reveal label="Pune">
                . I studied there, worked there for a bit, and later moved to London for my master&apos;s in marketing,
                which is where things started to properly click.
              </Reveal>
            </Reveal>
          </Reveal>{" "}
        </span>

        <span className="home-text" id="contact" style={{ "--delay": 3 } as React.CSSProperties}>
          You can find me on{" "}
          <Reveal label="LinkedIn">
            , where my profile is{" "}
            <a className="home-link" href={profileLinks.linkedin} rel="noreferrer" target="_blank">
              here
            </a>
            . I&apos;m also on Instagram, or you can drop me an{" "}
            <a className="home-link" href={profileLinks.email}>
              email
            </a>
            .
          </Reveal>
        </span>
      </div>
    </main>
  );
}
