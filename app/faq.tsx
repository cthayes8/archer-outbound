"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is this different from MSP marketing agencies?",
    answer:
      "They create templated content shared across hundreds of MSPs and hope someone Googles \u201cIT support near me.\u201d We build you an AI agent that actively finds the specific businesses in your territory that need managed IT and books meetings with them. It\u2019s outbound prospecting, not passive inbound \u2014 and everything is custom to your MSP.",
  },
  {
    question: "Why not just buy an AI SDR tool and do it myself?",
    answer:
      "You could \u2014 the same way your clients could manage their own IT instead of hiring you. Tools like Apollo or AiSDR require you to configure targeting, write sequences, manage deliverability, warm domains, monitor reply quality, and optimize constantly. We do all of that for you. You get the results without the learning curve or the time investment.",
  },
  {
    question: "Will the outreach sound like spam?",
    answer:
      "The opposite. We send fewer, more targeted messages \u2014 not mass blasts. Every email is personalized to the specific prospect\u2019s business, industry, and pain points. Your agent writes in your brand voice, referencing real context about each company. The goal is quality conversations, not volume.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your agent runs on fully isolated infrastructure \u2014 your data never touches another client\u2019s environment. And our integration is minimal: we only need a dedicated sending email address and your calendar booking link. No CRM access, no API keys, no risk to your clients\u2019 data.",
  },
  {
    question: "Who sends the emails?",
    answer:
      "Outreach goes from a branded email address at your domain \u2014 a dedicated team member name like sarah@yourmsp.com. If you\u2019d prefer not to use your primary domain, we can set up a similar subdomain or lookalike domain instead. Either way, we handle the entire sending infrastructure: domain setup, warm-up, reputation management, and deliverability monitoring. Everything lands in the inbox.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Your agent goes live in 3 weeks. Most clients see initial meetings within the first month as we calibrate targeting and messaging. By month 2-3, the system is fully optimized and delivering consistent pipeline. We set realistic expectations \u2014 not inflated promises.",
  },
  {
    question: "What\u2019s the commitment?",
    answer:
      "6-month minimum. Outbound takes time to calibrate, and we invest significant resources building your custom agent. The MSPs who see the best results give the system time to compound. Month-to-month is available after the initial term.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="section-tag">FAQ</div>
      <h2 className="section-heading">Questions MSP owners ask</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
            <button
              className="faq-toggle"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3>{faq.question}</h3>
              <svg
                className="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
