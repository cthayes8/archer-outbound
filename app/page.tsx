import FAQ from "./faq";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo">
          <div className="logo-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#09090b"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 22h20L12 2z" />
            </svg>
          </div>
          Archer Outbound
          <span className="logo-badge">For MSPs</span>
        </div>
        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#book" className="nav-cta">
            Book a Demo
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Built Exclusively for Managed Service Providers
        </div>
        <h1>
          Your own AI agent
          <br />
          that <em>sells for you</em>
        </h1>
        <p className="hero-sub">
          Stop paying for templated blogs nobody reads. Your AI agent finds the
          right companies in your territory, reaches out in your voice, and books
          qualified meetings on your calendar.
        </p>
        <div className="hero-actions">
          <a href="#book" className="btn-primary">
            Book a Demo
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
          <a href="#how" className="btn-ghost">
            See how it works
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="section-tag">The Problem</div>
        <h2 className="section-heading">
          You didn&apos;t start an MSP
          <br />
          to become a <em>marketer</em>
        </h2>
        <p className="section-sub">
          Yet here you are — paying thousands for results that never come.
        </p>
        <div className="problem-grid">
          <div className="problem-card">
            <span className="icon">💸</span>
            <h3>$3–5K/month on marketing with zero meetings</h3>
            <p>
              Templated blog posts and recycled newsletters that every other MSP
              in your market is running. No pipeline, no new logos.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">⏰</span>
            <h3>No time to prospect when you&apos;re running the business</h3>
            <p>
              Between tickets, projects, and managing your team, outbound selling
              falls to the bottom of the list every single week.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">👻</span>
            <h3>Your ideal clients don&apos;t know you exist</h3>
            <p>
              Hundreds of 50-200 person companies in your territory need managed
              IT — but they&apos;re not Googling for it. They need to be found.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">📋</span>
            <h3>DIY AI tools still need you to run them</h3>
            <p>
              You bought the software, watched the demos, and never had time to
              set it up properly. Sound familiar?
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOUR AGENT DOES */}
      <section className="agent-section">
        <div className="center">
          <div className="section-tag">What Your Agent Does</div>
          <h2 className="section-heading">
            Targeted outreach.
            <br />
            <em>Not spray and pray.</em>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Your agent sends fewer, better messages — personalized to each
            prospect&apos;s business, industry, and pain points. The result:
            higher reply rates and meetings that actually convert.
          </p>
        </div>
        <div className="agent-features">
          <div className="agent-feat">
            <span className="feat-icon">🔍</span>
            <h3>Researches your territory</h3>
            <p>
              Identifies companies in your area that match your ICP — right
              industry, right size, right pain points. No purchased lists.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">✍️</span>
            <h3>Writes like your best rep</h3>
            <p>
              Every email and LinkedIn message references real context about the
              prospect&apos;s business. Your brand voice. Their specific
              situation.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">🔄</span>
            <h3>Handles the follow-up</h3>
            <p>
              Multi-touch sequences, reply handling, and objection management —
              your agent stays on it until there&apos;s a clear yes or no.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">📅</span>
            <h3>Books on your calendar</h3>
            <p>
              Qualified meetings with decision-makers appear on your calendar.
              You just show up and have the conversation.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">📊</span>
            <h3>Reports what&apos;s working</h3>
            <p>
              See exactly which messages convert, which prospects engage, and how
              your pipeline is growing — every week.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">🧠</span>
            <h3>Gets smarter over time</h3>
            <p>
              Your agent learns which messaging, industries, and company profiles
              convert best — and doubles down on what works.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="section-tag">Getting Started</div>
        <h2 className="section-heading">
          Your agent goes live
          <br />
          in <em>three weeks</em>
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot">01</div>
            <div>
              <h3>Discovery &amp; ICP workshop</h3>
              <p>
                We learn your business — ideal client profile, target industries,
                service area, differentiators, brand voice, and what&apos;s
                worked or hasn&apos;t in the past. This becomes the foundation
                your agent is built on.
              </p>
              <span className="timeline-tag">Week 1</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">02</div>
            <div>
              <h3>We build your agent</h3>
              <p>
                We configure your dedicated AI sales agent — email
                infrastructure, sending domains, prospect research pipelines,
                personalized outreach sequences — all tuned to your specific
                market and territory.
              </p>
              <span className="timeline-tag">Week 2</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">03</div>
            <div>
              <h3>Calibration launch</h3>
              <p>
                Your agent runs a targeted initial campaign. You review the
                messaging, flag adjustments, and we fine-tune until every email
                sounds like it came from your best salesperson.
              </p>
              <span className="timeline-tag">Week 3</span>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot">04</div>
            <div>
              <h3>Full deployment &amp; ongoing optimization</h3>
              <p>
                Your agent goes live at full scale. We continuously optimize
                targeting, messaging, and deliverability. You get weekly
                reporting and a direct line to our team. You just take the
                meetings.
              </p>
              <span className="timeline-tag">Ongoing</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="compare">
        <div className="section-tag">The Math</div>
        <h2 className="section-heading">
          How we stack up against
          <br />
          <em>every alternative</em>
        </h2>
        <div className="compare-table">
          <div className="ch">{"\u00A0"}</div>
          <div className="ch">MSP Marketing Agency</div>
          <div className="ch">DIY AI SDR Tools</div>
          <div className="ch">Hiring an SDR</div>
          <div className="ch">Your AI Agent</div>

          <div className="c">Monthly cost</div>
          <div className="c">$3,000 – $6,000</div>
          <div className="c">$500 – $1,500</div>
          <div className="c">$5,000 – $8,000+</div>
          <div className="c">From $4,000/mo</div>

          <div className="c">What you get</div>
          <div className="c">Blogs &amp; SEO</div>
          <div className="c">Software you configure</div>
          <div className="c">1 person, limited hours</div>
          <div className="c">Done-for-you outbound</div>

          <div className="c">Who does the work</div>
          <div className="c">Their team</div>
          <div className="c">You</div>
          <div className="c">Your hire</div>
          <div className="c">Your AI agent</div>

          <div className="c">Meetings booked</div>
          <div className="c">Not their job</div>
          <div className="c">If you configure it right</div>
          <div className="c">5-10/month (if ramped)</div>
          <div className="c">10-15+/month</div>

          <div className="c">Personalization</div>
          <div className="c">Templated for all MSPs</div>
          <div className="c">Depends on your effort</div>
          <div className="c">Limited by time</div>
          <div className="c">Every single message</div>

          <div className="c">Time to results</div>
          <div className="c">3-6 months (SEO)</div>
          <div className="c">Weeks (if you know how)</div>
          <div className="c">3-6 months (ramp)</div>
          <div className="c">Meetings within weeks</div>

          <div className="c">Your time required</div>
          <div className="c">Low</div>
          <div className="c">High</div>
          <div className="c">Medium (managing)</div>
          <div className="c">None — take meetings</div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-tag">Pricing</div>
        <h2 className="section-heading">
          Simple pricing.
          <br />
          <em>Meetings on your calendar.</em>
        </h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          You&apos;re already spending $3-5K/month on marketing that
          doesn&apos;t book meetings. Here&apos;s what happens when that budget
          actually works.
        </p>
        <div className="price-box">
          <div className="price-label">AI Outbound SDR</div>
          <div className="price-amount">$4,000</div>
          <div className="price-period">
            per month + one-time $2,500 setup
          </div>
          <p className="price-desc">
            The output of an $80K/year SDR hire at a fraction of the cost. Your
            AI agent prospects, personalizes outreach, handles follow-up, and
            books qualified meetings — every day, without taking a day off.
          </p>
          <ul className="price-includes">
            <li>
              Finds companies in your territory that match your ICP
            </li>
            <li>
              Personalized email outreach from a branded address at your domain
            </li>
            <li>
              LinkedIn outreach to connect with decision-makers
            </li>
            <li>
              Reply handling, follow-up, and objection management
            </li>
            <li>
              Qualified meetings booked directly on your calendar
            </li>
            <li>
              Weekly reporting on outreach, replies, and pipeline
            </li>
            <li>
              Ongoing optimization of targeting and messaging
            </li>
            <li>
              Dedicated email infrastructure setup and deliverability management
            </li>
          </ul>
          <a href="#book" className="price-cta">
            Book a Demo
          </a>
        </div>
        <p className="pricing-note">
          6-month minimum commitment. Month-to-month available after initial
          term.
        </p>
      </section>

      {/* OWNERSHIP */}
      <section className="ownership">
        <div className="ownership-inner">
          <div className="ownership-text">
            <div className="section-tag">Your Agent, Your Advantage</div>
            <h2>
              This isn&apos;t a shared platform.
              <br />
              It&apos;s <em>your</em> sales team.
            </h2>
            <p>
              Your AI agent is dedicated exclusively to your MSP — configured to
              your brand, your voice, your ICP, and your territory. No
              templates. No shared systems.
            </p>
            <ul className="ownership-points">
              <li>
                <div className="op-icon">🔒</div>
                <div>
                  <h4>Fully isolated infrastructure</h4>
                  <p>
                    Your agent runs on dedicated systems. Your prospect data and
                    messaging never touch another client&apos;s environment.
                  </p>
                </div>
              </li>
              <li>
                <div className="op-icon">🎯</div>
                <div>
                  <h4>Built for your market</h4>
                  <p>
                    Your ICP, your service area, your differentiators. Every
                    message reflects what makes your MSP the right choice.
                  </p>
                </div>
              </li>
              <li>
                <div className="op-icon">🛡️</div>
                <div>
                  <h4>Lightweight integration</h4>
                  <p>
                    All we need is a dedicated sending email address and your
                    calendar link. No CRM access, no API keys, no security risk
                    to your clients&apos; environments.
                  </p>
                </div>
              </li>
              <li>
                <div className="op-icon">📈</div>
                <div>
                  <h4>Compounds over time</h4>
                  <p>
                    Your agent learns which messaging converts and which
                    prospects engage — results get better every month, not worse.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="ownership-visual">
            <div className="ov-header">Your Agent — Live Dashboard</div>
            <div className="ov-row">
              <span className="label">Sending as</span>
              <span className="value">Sarah Mitchell, [Your MSP]</span>
            </div>
            <div className="ov-row">
              <span className="label">Territory</span>
              <span className="value">Tampa Bay Metro</span>
            </div>
            <div className="ov-row">
              <span className="label">Targeting</span>
              <span className="value">SMBs, 25-200 employees</span>
            </div>
            <div className="ov-divider"></div>
            <div className="ov-row">
              <span className="label">Prospects researched</span>
              <span className="value">342</span>
            </div>
            <div className="ov-row">
              <span className="label">Personalized outreach sent</span>
              <span className="value">187</span>
            </div>
            <div className="ov-row">
              <span className="label">Reply rate</span>
              <span className="value accent">11.2%</span>
            </div>
            <div className="ov-row">
              <span className="label">Conversations active</span>
              <span className="value">21</span>
            </div>
            <div className="ov-row">
              <span className="label">Meetings booked this month</span>
              <span className="value accent">12</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* FINAL CTA */}
      <section className="final-cta" id="book">
        <h2>
          Ready to stop waiting
          <br />
          for the phone to <em>ring?</em>
        </h2>
        <p>
          Book a 30-minute demo. We&apos;ll show you exactly how your AI agent
          would target prospects in your territory — and what the first month
          looks like.
        </p>
        <a
          href="https://calendar.app.google/FByi8pP5YdoPbxu86"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Book Your Demo
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

      <footer>
        &copy; 2026 Archer Outbound. All rights reserved. Built exclusively for
        managed service providers.
      </footer>
    </>
  );
}
