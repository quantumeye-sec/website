// app/page.js
import Image from "next/image";
import Ribbon from "../components/Ribbon";
import ContactForm from "../components/ContactForm";

// Static import = basePath-safe on GitHub Pages and preserves intrinsic aspect ratio
import logoSrc from "../public/logo.png";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Lightweight animated background (CSS-only; see .cyber-bg in globals.css) */}
      <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none cyber-bg" />

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-black/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between gap-4">
          {/* Brand block */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative inline-block shrink-0">
              {/* Pulse glow behind logo (utility defined in globals.css) */}
              <span aria-hidden className="pulse-glow" />
              <Image
                src={logoSrc}
                alt="QuantumEye Security logo"
                // Use intrinsic dimensions to satisfy Next; display size via CSS
                width={logoSrc.width}
                height={logoSrc.height}
                priority
                className="h-10 w-auto sm:h-12 md:h-14 rounded-xl object-contain"
                sizes="(min-width: 768px) 3.5rem, 2.5rem"
              />
            </div>

            <div className="leading-none whitespace-nowrap">
              <div className="text-slate-100 font-semibold tracking-tight">
                QuantumEye Security
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400">
                Pentesting &amp; Red Team Consulting
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#method" className="hover:text-white">Method</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#proof" className="hover:text-white">Proof</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex bg-violet-400 text-slate-900 font-semibold px-4 py-2 rounded-2xl"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                  Offensive security,<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600">
                    without the drama.
                  </span>
                </h1>
                <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
                  Boutique penetration testing &amp; red-team consulting for startups,
                  scaleups, and regulated enterprises. We blend attacker tradecraft
                  with measurable risk reduction.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="bg-violet-400 text-slate-900 px-5 py-3 rounded-2xl font-semibold"
                  >
                    Start an Engagement →
                  </a>
                  <a
                    href="#services"
                    className="border border-violet-500/50 px-5 py-3 rounded-2xl font-semibold text-slate-200"
                  >
                    Explore Services
                  </a>
                </div>
              </div>

              <aside className="bg-slate-900/70 border border-white/10 rounded-3xl p-6">
                <h2 className="text-slate-100 font-bold text-lg flex items-center gap-2">
                  🛡️ Real Attack Paths Uncovered
                </h2>
                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  <li>• Web &amp; API vulns with PoC exploits</li>
                  <li>• Internal lateral movement maps</li>
                  <li>• Cloud misconfig to data-access chains</li>
                  <li>• Rogue AP &amp; WPA2/Enterprise tests</li>
                  <li>• Red/Purple team with measurable detections</li>
                </ul>

                {/* Violet badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-violet">ISO 27001</span>
                  <span className="badge badge-violet">SOC 2</span>
                  <span className="badge badge-violet">HIPAA</span>
                  <span className="badge badge-violet">GDPR</span>
                  <span className="badge badge-violet">Jira-ready evidence</span>
                </div>
              </aside>
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              Precision{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600">
                penetration testing
              </span>{" "}
              for modern stacks
            </h2>
            <p className="text-slate-300/80 max-w-3xl mb-10">
              Choose a focused assessment or combine into a program. Every
              engagement includes reproducible methodology, evidence, and
              prioritized fixes.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🌐 Web / API Pentest — OWASP, authz flaws, SSRF/RCE, logic bugs.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                📱 Mobile App Pentest — Runtime hooking, storage, transport security.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🖥️ Network Pentest — AD abuse, segmentation validation, credential surface.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                ☁️ Cloud Pentest — AWS/Azure/GCP IAM, CI/CD supply chain.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                📡 Wireless Security — Evil twin, rogue AP, WPA2-Enterprise.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                👥 Social Engineering — Phish/smish/vish, MFA fatigue, awareness.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                ⚔️ Red / Purple Team — Adversary emulation &amp; detection tuning.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                ✅ Compliance Readiness — ISO 27001, SOC 2, HIPAA, GDPR mapping.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🔍 Secure SDLC — Threat modeling, code review, pipeline hardening.
              </div>
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              A repeatable method that proves risk &amp; accelerates fixes
            </h2>

            <div className="grid md:grid-cols-4 gap-6 text-sm">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🔐 Scoping — ROE, guardrails, data-handling, windows.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🔑 Discovery — Recon, fingerprinting, trust boundaries.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                🐛 Exploitation — Validate chains, PoCs, impact evidence.
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                📝 Report &amp; Fix — Priorities, control mappings, retest included.
              </div>
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Industries (violet-glow chips) */}
      <section id="industries" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
              From VC-backed to regulated
            </h2>

            <div className="grid md:grid-cols-5 gap-4 text-sm">
              {[
                "SaaS & Platforms",
                "Fintech & Cloud-native",
                "MSPs",
                "Healthcare / HIPAA",
                "Critical Infrastructure",
              ].map((label) => (
                <div key={label} className="chip chip-violet">
                  <span className="text-violet-300">◆</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
              Reporting that moves the needle
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">🏁 Exploit-first Evidence</div>
                <ul className="list-disc list-inside text-slate-300/90 space-y-2">
                  <li>Screenshots &amp; request/response traces</li>
                  <li>Replayable PoCs (where safe)</li>
                  <li>Impact narratives non-security folks grok</li>
                </ul>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">🧩 Fix-Ready Output</div>
                <ul className="list-disc list-inside text-slate-300/90 space-y-2">
                  <li>Jira/Linear-ready tickets</li>
                  <li>Control mappings (ISO 27001, SOC 2, HIPAA, GDPR)</li>
                  <li>Retest included to verify closure</li>
                </ul>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">🤝 Developer Partnership</div>
                <ul className="list-disc list-inside text-slate-300/90 space-y-2">
                  <li>Office hours for engineers</li>
                  <li>Mitigation paths when refactor is heavy</li>
                  <li>Security champions enablement</li>
                </ul>
              </div>
            </div>
          </Ribbon>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">FAQ</h2>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">How fast can we start?</div>
                <div className="text-slate-300/90">
                  Scoping call this week, kickoff as early as next week depending on complexity and change windows.
                </div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">Will you test production?</div>
                <div className="text-slate-300/90">
                  Yes—with rate limits, guardrails, and real-time comms to avoid impact. Pre-prod also supported.
                </div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">Do you provide a retest?</div>
                <div className="text-slate-300/90">
                  Yes. Every engagement includes a remediation retest to verify closure.
                </div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
                <div className="font-semibold text-slate-100 mb-2">
                  Can you map findings to ISO 27001 / SOC 2 / HIPAA / GDPR?
                </div>
                <div className="text-slate-300/90">
                  Absolutely. We include control mappings and evidence-ready language.
                </div>
              </div>
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 items-center">
          <Ribbon className="pt-10 pb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
              Get a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600">
                fixed-fee quote
              </span>
            </h2>
            <p className="text-slate-300/80 max-w-3xl mb-10">
              Tell us about your environment and objectives. We’ll propose scope, sample test cases, and timeline.
            </p>

            {/* Client-side form component posts to your endpoint */}
            <ContactForm />

            <div className="mt-6 text-sm text-slate-400">
              wcorcoran@quantumeye-security.com
            </div>
          </Ribbon>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-sm text-slate-300/90">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            © {new Date().getFullYear()} QuantumEye Security — Offense-driven security. Evidence-backed results.
          </div>
          <div className="space-x-3">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

