import Link from "next/link";
import { HeroDna } from "../components/HeroDna";
import { Navigation } from "../components/Navigation";
import { PortfolioMotion } from "../components/PortfolioMotion";

const contentStates = [
  {
    label: "01 / Verified research",
    title: "ScienceDirect research article",
    body: "The current research index contains one verified external research link supplied for Shiza. Full citation details should be completed only after the article metadata is confirmed.",
    href: "https://www.sciencedirect.com/science/article/pii/S3050787126003446?via%3Dihub",
    action: "Open article",
  },
  {
    label: "02 / Citation status",
    title: "Citation metadata pending",
    body: "Title, authorship order, journal issue, DOI, and publication date are intentionally not shown here until they can be verified from a stable source.",
  },
  {
    label: "03 / Future additions",
    title: "Research context to be provided",
    body: "Methods, figures, abstracts, and supporting laboratory context can be added later without inventing any academic or institutional details.",
  },
];

const readinessItems = [
  "One verified ScienceDirect research link recorded",
  "Editorial maroon and beige visual system",
  "Responsive home composition for scientific audiences",
  "No fabricated biography, metrics, affiliations, or citations",
];

function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow" data-hero-reveal>Scientific portfolio</p>
        <h1 id="hero-title" data-hero-reveal>Shiza Shahzad</h1>
        <p className="profession" data-hero-reveal>Microbiologist & Molecular Geneticist</p>
        <p className="hero-intro" data-hero-reveal>
          A focused professional profile for work in microbiology, molecular
          genetics, and the careful communication of verified scientific
          experience.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <Link className="button primary" href="#research">
            Explore Research
          </Link>
          <Link className="button secondary" href="#contact">
            Contact Shiza
          </Link>
        </div>
      </div>
      <HeroDna />
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="profile-section section-shell" id="profile" aria-labelledby="profile-title" data-motion-section>
      <div className="section-kicker" data-section-reveal>Profile / editorial summary</div>
      <div className="split-heading">
        <h2 id="profile-title" data-section-reveal>A research presence built around evidence.</h2>
        <p data-section-reveal>
          This first version establishes the structure and tone of Shiza's
          portfolio using only confirmed information, including a single
          external research record. The design is ready for a biography,
          education, laboratory experience, and publication metadata when those
          details are available.
        </p>
      </div>
      <div className="readiness-grid" aria-label="Current site readiness" data-stagger-reveal>
        {readinessItems.map((item) => (
          <div className="readiness-item" key={item}>
            <span aria-hidden="true" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section className="research-section" id="research" aria-labelledby="research-title" data-motion-section>
      <div className="section-shell research-inner">
        <div>
          <p className="eyebrow light" data-section-reveal>Research index</p>
          <h2 id="research-title" data-section-reveal>One verified research record.</h2>
        </div>
        <div className="content-state-list" data-stagger-reveal>
          {contentStates.map((item) => (
            <article className="content-state" key={item.label}>
              <p>{item.label}</p>
              <div>
                <h3>{item.title}</h3>
                <span>{item.body}</span>
                {"href" in item ? (
                  <a className="research-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.action}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title" data-motion-section>
      <div className="contact-panel">
        <p className="section-kicker" data-section-reveal>Contact / next content</p>
        <h2 id="contact-title" data-section-reveal>Ready for Shiza's verified details.</h2>
        <p data-section-reveal>
          Add a real email address, CV file, biography, research projects, and
          publication records to turn this foundation into a production
          portfolio without changing the scientific art direction.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Shiza Shahzad</strong>
        <span>Microbiologist & Molecular Geneticist</span>
      </div>
      <div className="footer-actions">
        <a href="https://syntrastudio.co" target="_blank" rel="noreferrer">
          Designed & developed by Syntra Studio
        </a>
        <Link href="#top">Return to top</Link>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProfileSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
      <PortfolioMotion />
    </>
  );
}
