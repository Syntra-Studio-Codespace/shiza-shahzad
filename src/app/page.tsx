import Link from "next/link";
import { HeroDna } from "../components/HeroDna";
import { Navigation } from "../components/Navigation";
import { PortfolioMotion } from "../components/PortfolioMotion";

const researchRecord = {
  label: "Verified research",
  title: "ScienceDirect research article",
  source: "ScienceDirect",
  identifier: "PII: S3050787126003446",
  body: "A verified external research record for Shiza Shahzad, presented through the publisher's ScienceDirect article page.",
  href: "https://www.sciencedirect.com/science/article/pii/S3050787126003446?via%3Dihub",
  action: "View article",
};

const readinessItems = [
  "Microbiology-focused profile",
  "Molecular genetics perspective",
  "Verified publisher research record",
  "Evidence-led scientific presentation",
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
          Shiza Shahzad's portfolio is shaped around microbiology, molecular
          genetics, and verified scientific work. The presentation keeps the
          emphasis on evidence, clarity, and professional credibility.
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
        <div className="research-heading">
          <p className="eyebrow light" data-section-reveal>Research</p>
          <h2 id="research-title" data-section-reveal>Selected scientific work.</h2>
          <p data-section-reveal>
            A concise record of Shiza Shahzad's verified research presence,
            anchored to the publisher source.
          </p>
        </div>
        <article className="research-record" data-stagger-reveal>
          <div className="research-record-meta">
            <span>{researchRecord.label}</span>
            <span>{researchRecord.source}</span>
          </div>
          <h3>{researchRecord.title}</h3>
          <p>{researchRecord.body}</p>
          <dl className="research-facts" aria-label="Research record details">
            <div>
              <dt>Source</dt>
              <dd>{researchRecord.source}</dd>
            </div>
            <div>
              <dt>Identifier</dt>
              <dd>{researchRecord.identifier}</dd>
            </div>
            <div>
              <dt>Record</dt>
              <dd>Publisher article page</dd>
            </div>
          </dl>
          <a className="research-link" href={researchRecord.href} target="_blank" rel="noreferrer">
            {researchRecord.action}
          </a>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title" data-motion-section>
      <div className="contact-panel">
        <p className="section-kicker" data-section-reveal>Contact</p>
        <h2 id="contact-title" data-section-reveal>Professional correspondence.</h2>
        <p data-section-reveal>
          For academic correspondence, collaboration inquiries, and verified
          profile updates related to microbiology and molecular genetics.
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
