<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Archer Outbound — AI-Powered Pipeline on Autopilot</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0a;
    --surface: #111111;
    --surface-2: #1a1a1a;
    --border: #222222;
    --text: #f0f0f0;
    --text-muted: #888888;
    --accent: #c8ff3c;
    --accent-dim: rgba(200, 255, 60, 0.08);
    --accent-glow: rgba(200, 255, 60, 0.15);
    --serif: 'Instrument Serif', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; background: #0a0a0a; }

  body {
    background: #0a0a0a;
    color: #ffffff;
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* --- NAV --- */
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 1.25rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }

  .logo {
    font-family: var(--sans);
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
    background: var(--accent);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-icon svg {
    width: 16px;
    height: 16px;
  }

  nav a.cta-nav {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--bg);
    background: var(--accent);
    padding: 0.6rem 1.4rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s;
  }

  nav a.cta-nav:hover { opacity: 0.85; transform: translateY(-1px); }

  /* --- HERO --- */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8rem 2rem 4rem;
    position: relative;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    pointer-events: none;
    opacity: 0.4;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    border: 1px solid var(--border);
    border-radius: 100px;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    background: var(--surface);
    animation: fadeUp 0.8s ease both;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  h1 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 1.05;
    letter-spacing: -0.03em;
    max-width: 800px;
    margin-bottom: 1.5rem;
    animation: fadeUp 0.8s 0.1s ease both;
    color: #ffffff;
  }

  h1 em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-sub {
    font-size: 1.15rem;
    color: #bbbbbb;
    max-width: 520px;
    line-height: 1.7;
    margin-bottom: 2.5rem;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 2.2rem;
    background: var(--accent);
    color: var(--bg);
    font-weight: 700;
    font-size: 1rem;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.25s;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .hero-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--accent-glow); }

  .hero-cta svg { width: 18px; height: 18px; transition: transform 0.2s; }
  .hero-cta:hover svg { transform: translateX(3px); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* --- PAIN / PROBLEM --- */
  .pain {
    padding: 6rem 2rem;
    text-align: center;
  }

  .pain-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 2rem;
  }

  .pain-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1px;
    max-width: 900px;
    margin: 0 auto;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
  }

  .pain-card {
    background: var(--surface);
    padding: 2.5rem 2rem;
    text-align: left;
  }

  .pain-card .number {
    font-family: var(--serif);
    font-size: 2.5rem;
    color: #a8d832;
    margin-bottom: 0.5rem;
  }

  .pain-card h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  .pain-card p {
    font-size: 0.9rem;
    color: #aaaaaa;
    line-height: 1.6;
  }

  /* --- HOW IT WORKS --- */
  .how {
    padding: 6rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--accent);
    margin-bottom: 1rem;
  }

  .how h2 {
    font-family: var(--serif);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .step {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
    border-top: 1px solid var(--border);
  }

  .step-num {
    font-family: var(--serif);
    font-size: 2rem;
    color: #a8d832;
    opacity: 0.8;
  }

  .step h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.4rem;
    color: #ffffff;
  }

  .step p {
    font-size: 0.95rem;
    color: #aaaaaa;
    line-height: 1.6;
  }

  /* --- COMPARISON --- */
  .compare {
    padding: 6rem 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .compare h2 {
    font-family: var(--serif);
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
  }

  .compare-table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
  }

  .compare-table .col-header {
    padding: 1.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
  }

  .compare-table .col-header:last-child {
    background: var(--accent-dim);
    color: var(--accent);
  }

  .compare-table .cell {
    padding: 1.2rem 1.5rem;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-muted);
  }

  .compare-table .cell:nth-child(3n) {
    background: var(--accent-dim);
    color: var(--text);
    font-weight: 500;
  }

  .compare-table .cell:nth-last-child(-n+3) {
    border-bottom: none;
  }

  /* --- SOCIAL PROOF PLACEHOLDER --- */
  .proof {
    padding: 6rem 2rem;
    text-align: center;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .proof-quote {
    font-family: var(--serif);
    font-style: italic;
    font-size: clamp(1.5rem, 3vw, 2.2rem);
    max-width: 700px;
    margin: 0 auto 1.5rem;
    line-height: 1.4;
    color: #ffffff;
  }

  .proof-attr {
    font-size: 0.85rem;
    color: #999999;
  }

  /* --- FINAL CTA --- */
  .final-cta {
    padding: 8rem 2rem;
    text-align: center;
    position: relative;
  }

  .final-cta::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
    pointer-events: none;
    opacity: 0.3;
  }

  .final-cta h2 {
    font-family: var(--serif);
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;
  }

  .final-cta h2 em {
    font-style: italic;
    color: var(--accent);
  }

  .final-cta p {
    color: #bbbbbb;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
  }

  .final-cta a {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 2.5rem;
    background: var(--accent);
    color: var(--bg);
    font-weight: 700;
    font-size: 1.05rem;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.25s;
    position: relative;
  }

  .final-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 30px var(--accent-glow); }

  /* --- FOOTER --- */
  footer {
    padding: 2rem;
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-muted);
    border-top: 1px solid var(--border);
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 640px) {
    nav { padding: 1rem; }
    .pain-grid { grid-template-columns: 1fr; }
    .compare-table { grid-template-columns: 1fr 1fr 1fr; font-size: 0.8rem; }
    .compare-table .cell, .compare-table .col-header { padding: 1rem 0.8rem; }
    .step { grid-template-columns: 40px 1fr; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="logo">
    <div class="logo-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2L2 22h20L12 2z"/>
      </svg>
    </div>
    Archer Outbound
  </div>
  <a href="#book" class="cta-nav">Book a Demo</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="badge">
    <span class="badge-dot"></span>
    AI-Powered Outbound Sales
  </div>
  <h1>Your pipeline,<br>on <em>autopilot</em></h1>
  <p class="hero-sub">We deploy AI agents that find your ideal prospects, write personalized outreach, and book qualified meetings — so your team can focus on closing.</p>
  <a href="#book" class="hero-cta">
    See How It Works
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </a>
</section>

<!-- PAIN POINTS -->
<section class="pain">
  <div class="pain-label">The Problem</div>
  <div class="pain-grid">
    <div class="pain-card">
      <div class="number">$65K</div>
      <h3>The cost of one junior SDR</h3>
      <p>Salary, benefits, tools, training, management overhead — and 3-6 months before they're ramped.</p>
    </div>
    <div class="pain-card">
      <div class="number">82%</div>
      <h3>Of cold emails are ignored</h3>
      <p>Generic outreach gets deleted. Personalization at scale is nearly impossible for human teams.</p>
    </div>
    <div class="pain-card">
      <div class="number">4.2h</div>
      <h3>Daily on non-selling tasks</h3>
      <p>Your sales team spends most of their day on research, data entry, and follow-ups — not closing.</p>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="how">
  <div class="section-label">How It Works</div>
  <h2>Three steps to a full pipeline</h2>
  <div class="steps">
    <div class="step">
      <div class="step-num">01</div>
      <div>
        <h3>We learn your ideal customer</h3>
        <p>Share your ICP, messaging, and goals. We configure a custom AI outbound system tailored to your business, industry, and voice.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">02</div>
      <div>
        <h3>AI agents go to work</h3>
        <p>Our multi-agent system researches prospects, crafts hyper-personalized outreach, manages follow-ups, and handles replies — 24/7, at scale.</p>
      </div>
    </div>
    <div class="step">
      <div class="step-num">03</div>
      <div>
        <h3>You take the meetings</h3>
        <p>Qualified meetings land on your calendar. You show up, close deals, and grow. We handle everything upstream.</p>
      </div>
    </div>
  </div>
</section>

<!-- COMPARISON -->
<section class="compare">
  <div class="section-label">The Math</div>
  <h2>Replace the grind, keep the pipeline</h2>
  <div class="compare-table">
    <div class="col-header">&nbsp;</div>
    <div class="col-header">Traditional SDR</div>
    <div class="col-header">Archer Outbound</div>

    <div class="cell">Monthly cost</div>
    <div class="cell">$5,000 – $7,000+</div>
    <div class="cell">From $3,000/mo</div>

    <div class="cell">Ramp time</div>
    <div class="cell">3 – 6 months</div>
    <div class="cell">1 week</div>

    <div class="cell">Emails per day</div>
    <div class="cell">50 – 80</div>
    <div class="cell">500+</div>

    <div class="cell">Personalization</div>
    <div class="cell">Limited by time</div>
    <div class="cell">Every single message</div>

    <div class="cell">Availability</div>
    <div class="cell">Business hours</div>
    <div class="cell">24/7/365</div>

    <div class="cell">Turnover risk</div>
    <div class="cell">High</div>
    <div class="cell">Zero</div>
  </div>
</section>

<!-- SOCIAL PROOF -->
<section class="proof">
  <p class="proof-quote">"We went from zero outbound to 15+ qualified meetings per month — without hiring a single rep."</p>
  <p class="proof-attr">— Early pilot client <!--Replace with real testimonial--></p>
</section>

<!-- FINAL CTA -->
<section class="final-cta" id="book">
  <h2>Ready to fill<br>your <em>calendar?</em></h2>
  <p>Book a 15-minute demo. We'll show you exactly how our AI agents would work for your business.</p>
  <a href="https://calendly.com/YOUR-LINK" target="_blank">
    Book Your Demo
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </a>
</section>

<footer>
  &copy; 2025 Archer Outbound. All rights reserved.
</footer>

</body>
</html>