import FAQ from "./faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Archer Outbound",
      url: "https://archer-outbound.com",
      description:
        "We build dedicated AI sales agents for managed service providers. Your agent finds prospects in your territory, sends personalized outreach, and books qualified meetings on your calendar.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How is this different from MSP marketing agencies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They create templated content shared across hundreds of MSPs and hope someone Googles \u201cIT support near me.\u201d We build you an AI agent that actively finds the specific businesses in your territory that need managed IT and books meetings with them. It\u2019s outbound prospecting, not passive inbound \u2014 and everything is custom to your MSP.",
          },
        },
        {
          "@type": "Question",
          name: "Why not just buy an AI SDR tool and do it myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You could \u2014 the same way your clients could manage their own IT instead of hiring you. Tools like Apollo or AiSDR require you to configure targeting, write sequences, manage deliverability, warm domains, monitor reply quality, and optimize constantly. We do all of that for you. You get the results without the learning curve or the time investment.",
          },
        },
        {
          "@type": "Question",
          name: "Will the outreach sound like spam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The opposite. We send fewer, more targeted messages \u2014 not mass blasts. Every email is personalized to the specific prospect\u2019s business, industry, and pain points. Your agent writes in your brand voice, referencing real context about each company. The goal is quality conversations, not volume.",
          },
        },
        {
          "@type": "Question",
          name: "Is my data secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your agent runs on fully isolated infrastructure \u2014 your data never touches another client\u2019s environment. And our integration is minimal: we only need a dedicated sending email address and your calendar booking link. No CRM access, no API keys, no risk to your clients\u2019 data.",
          },
        },
        {
          "@type": "Question",
          name: "Who sends the emails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outreach goes from a branded email address at your domain \u2014 a dedicated team member name like sarah@yourmsp.com. If you\u2019d prefer not to use your primary domain, we can set up a similar subdomain or lookalike domain instead. Either way, we handle the entire sending infrastructure: domain setup, warm-up, reputation management, and deliverability monitoring. Everything lands in the inbox.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly will I see results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your agent goes live in 3 weeks. Most clients see initial meetings within the first month as we calibrate targeting and messaging. By month 2-3, the system is fully optimized and delivering consistent pipeline. We set realistic expectations \u2014 not inflated promises.",
          },
        },
        {
          "@type": "Question",
          name: "What\u2019s the commitment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "6-month minimum. Outbound takes time to calibrate, and we invest significant resources building your custom agent. The MSPs who see the best results give the system time to compound. Month-to-month is available after the initial term.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          Your outbound sales
          <br />
          on <em>autopilot</em>
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
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </span>
            <h3>$3–5K/month on marketing with zero meetings</h3>
            <p>
              Templated blog posts and recycled newsletters that every other MSP
              in your market is running. No pipeline, no new logos.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </span>
            <h3>No time to prospect when you&apos;re running the business</h3>
            <p>
              Between tickets, projects, and managing your team, outbound selling
              falls to the bottom of the list every single week.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
            </span>
            <h3>Your ideal clients don&apos;t know you exist</h3>
            <p>
              Hundreds of 50-200 person companies in your territory need managed
              IT — but they&apos;re not Googling for it. They need to be found.
            </p>
          </div>
          <div className="problem-card">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
            </span>
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
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </span>
            <h3>Researches your territory</h3>
            <p>
              Identifies companies in your area that match your ICP — right
              industry, right size, right pain points. No purchased lists.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
            </span>
            <h3>Writes like your best rep</h3>
            <p>
              Every email and LinkedIn message references real context about the
              prospect&apos;s business. Your brand voice. Their specific
              situation.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
            </span>
            <h3>Handles the follow-up</h3>
            <p>
              Multi-touch sequences, reply handling, and objection management —
              your agent stays on it until there&apos;s a clear yes or no.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
            </span>
            <h3>Books on your calendar</h3>
            <p>
              Qualified meetings with decision-makers appear on your calendar.
              You just show up and have the conversation.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
            </span>
            <h3>Reports what&apos;s working</h3>
            <p>
              See exactly which messages convert, which prospects engage, and how
              your pipeline is growing — every week.
            </p>
          </div>
          <div className="agent-feat">
            <span className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            </span>
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
          {/* Headers */}
          <div className="ch">{"\u00A0"}</div>
          <div className="ch ch-alt">MSP Marketing Agency</div>
          <div className="ch ch-alt">DIY AI SDR Tools</div>
          <div className="ch ch-alt">Hiring an SDR</div>
          <div className="ch ch-others">Others</div>
          <div className="ch ch-highlight">Your AI Agent</div>

          {/* Monthly cost */}
          <div className="c">Monthly cost</div>
          <div className="c c-alt">$3,000 – $6,000</div>
          <div className="c c-alt">$500 – $1,500</div>
          <div className="c c-alt">$5,000 – $8,000+</div>
          <div className="c c-others">$500 – $8,000+</div>
          <div className="c c-highlight">Custom</div>

          {/* What you get */}
          <div className="c">What you get</div>
          <div className="c c-alt">Blogs &amp; SEO</div>
          <div className="c c-alt">Software you configure</div>
          <div className="c c-alt">1 person, limited hours</div>
          <div className="c c-others">Blogs, software, or 1 hire</div>
          <div className="c c-highlight">Done-for-you outbound</div>

          {/* Who does the work */}
          <div className="c">Who does the work</div>
          <div className="c c-alt">Their team</div>
          <div className="c c-alt">You</div>
          <div className="c c-alt">Your hire</div>
          <div className="c c-others">You or your hire</div>
          <div className="c c-highlight">Your AI agent</div>

          {/* Meetings booked */}
          <div className="c">Meetings booked</div>
          <div className="c c-alt">Not their job</div>
          <div className="c c-alt">If you configure it right</div>
          <div className="c c-alt">5-10/month (if ramped)</div>
          <div className="c c-others">0 – 10/mo (maybe)</div>
          <div className="c c-highlight">10-15+/month</div>

          {/* Personalization */}
          <div className="c">Personalization</div>
          <div className="c c-alt">Templated for all MSPs</div>
          <div className="c c-alt">Depends on your effort</div>
          <div className="c c-alt">Limited by time</div>
          <div className="c c-others">Limited or templated</div>
          <div className="c c-highlight">Every single message</div>

          {/* Time to results */}
          <div className="c">Time to results</div>
          <div className="c c-alt">3-6 months (SEO)</div>
          <div className="c c-alt">Weeks (if you know how)</div>
          <div className="c c-alt">3-6 months (ramp)</div>
          <div className="c c-others">3 – 6 months</div>
          <div className="c c-highlight">Meetings within weeks</div>

          {/* Your time required */}
          <div className="c c-last-row">Your time required</div>
          <div className="c c-alt c-last-row">Low</div>
          <div className="c c-alt c-last-row">High</div>
          <div className="c c-alt c-last-row">Medium (managing)</div>
          <div className="c c-others c-last-row">Low to high</div>
          <div className="c c-highlight c-last-row">None — take meetings</div>
        </div>
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
                <div className="op-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <div>
                  <h4>Fully isolated infrastructure</h4>
                  <p>
                    Your agent runs on dedicated systems. Your prospect data and
                    messaging never touch another client&apos;s environment.
                  </p>
                </div>
              </li>
              <li>
                <div className="op-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
                <div>
                  <h4>Built for your market</h4>
                  <p>
                    Your ICP, your service area, your differentiators. Every
                    message reflects what makes your MSP the right choice.
                  </p>
                </div>
              </li>
              <li>
                <div className="op-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
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
                <div className="op-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                </div>
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
