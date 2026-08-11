import Link from "next/link";
import { HeroDna } from "../components/HeroDna";
import { Navigation } from "../components/Navigation";
import { PortfolioMotion } from "../components/PortfolioMotion";

const contentStates = [
  {
    label: "01 / Research",
    title: "Research work",
    body: "Project titles, methods, figures, and outcomes will appear here once Shiza provides verified research details.",
  },
  {
    label: "02 / Publications",
    title: "Scholarly record",
    body: "Publication entries are intentionally hidden until real citation metadata, links, or DOI details are supplied.",
  },
  {
    label: "03 / Experience",
    title: "Academic and laboratory timeline",
    body: "Education, laboratory roles, and professional milestones can be added without changing the visual system.",
  },
];

const readinessItems = [
  "Typed content model for future research and publication data",
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
          portfolio using only confirmed information. The design is ready for a
          biography, education, laboratory experience, research projects, and
          publication metadata when those details are available.
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
          <h2 id="research-title" data-section-reveal>Prepared for real scientific work.</h2>
        </div>
        <div className="content-state-list" data-stagger-reveal>
          {contentStates.map((item) => (
            <article className="content-state" key={item.label}>
              <p>{item.label}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
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
