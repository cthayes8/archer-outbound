export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo">
          <div className="logo-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          Archer Outbound
        </div>
        <a href="#book" className="cta-nav">
          Book a Demo
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="badge">
          <span className="badge-dot"></span>
          AI-Powered Outbound Sales
        </div>
        <h1>
          Your pipeline,
          <br />
          on <em>autopilot</em>
        </h1>
        <p className="hero-sub">
          We deploy AI agents that find your ideal prospects, write personalized
          outreach, and book qualified meetings — so your team can focus on
          closing.
        </p>
        <a href="#book" className="hero-cta">
          See How It Works
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      {/* PAIN POINTS */}
      <section className="pain">
        <div className="pain-label">The Problem</div>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="number">$65K</div>
            <h3>The cost of one junior SDR</h3>
            <p>
              Salary, benefits, tools, training, management overhead — and 3-6
              months before they&apos;re ramped.
            </p>
          </div>
          <div className="pain-card">
            <div className="number">82%</div>
            <h3>Of cold emails are ignored</h3>
            <p>
              Generic outreach gets deleted. Personalization at scale is nearly
              impossible for human teams.
            </p>
          </div>
          <div className="pain-card">
            <div className="number">4.2h</div>
            <h3>Daily on non-selling tasks</h3>
            <p>
              Your sales team spends most of their day on research, data entry,
              and follow-ups — not closing.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="section-label">How It Works</div>
        <h2>Three steps to a full pipeline</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <div>
              <h3>We learn your ideal customer</h3>
              <p>
                Share your ICP, messaging, and goals. We configure a custom AI
                outbound system tailored to your business, industry, and voice.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <div>
              <h3>AI agents go to work</h3>
              <p>
                Our multi-agent system researches prospects, crafts
                hyper-personalized outreach, manages follow-ups, and handles
                replies — 24/7, at scale.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <div>
              <h3>You take the meetings</h3>
              <p>
                Qualified meetings land on your calendar. You show up, close
                deals, and grow. We handle everything upstream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="compare">
        <div className="section-label">The Math</div>
        <h2>Replace the grind, keep the pipeline</h2>
        <div className="compare-table">
          <div className="col-header">{"\u00A0"}</div>
          <div className="col-header">Traditional SDR</div>
          <div className="col-header">Archer Outbound</div>

          <div className="cell">Monthly cost</div>
          <div className="cell">$5,000 – $7,000+</div>
          <div className="cell">From $3,000/mo</div>

          <div className="cell">Ramp time</div>
          <div className="cell">3 – 6 months</div>
          <div className="cell">1 week</div>

          <div className="cell">Emails per day</div>
          <div className="cell">50 – 80</div>
          <div className="cell">500+</div>

          <div className="cell">Personalization</div>
          <div className="cell">Limited by time</div>
          <div className="cell">Every single message</div>

          <div className="cell">Availability</div>
          <div className="cell">Business hours</div>
          <div className="cell">24/7/365</div>

          <div className="cell">Turnover risk</div>
          <div className="cell">High</div>
          <div className="cell">Zero</div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="proof">
        <p className="proof-quote">
          &ldquo;We went from zero outbound to 15+ qualified meetings per month
          — without hiring a single rep.&rdquo;
        </p>
        <p className="proof-attr">— Early pilot client</p>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="book">
        <h2>
          Ready to fill
          <br />
          your <em>calendar?</em>
        </h2>
        <p>
          Book a 15-minute demo. We&apos;ll show you exactly how our AI agents
          would work for your business.
        </p>
        <a
          href="https://calendly.com/YOUR-LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Your Demo
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </section>

      <footer>© 2025 Archer Outbound. All rights reserved.</footer>
    </>
  );
}
