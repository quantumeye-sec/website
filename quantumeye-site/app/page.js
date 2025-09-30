import ContactForm from '../components/ContactForm'; 
export default function Page() {
  return (
    <main>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-600 grid place-items-center shadow-lg shadow-cyan-400/20">
              <span className="text-slate-950 text-lg">🔒</span>
            </div>
            <div>
              <div className="text-slate-100 font-semibold leading-tight">QuantumEye Security</div>
              <div className="text-xs text-slate-400 -mt-0.5">Pentesting & Red Team Consulting</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#method" className="hover:text-white">Method</a>
            <a href="#industries" className="hover:text-white">Industries</a>
            <a href="#proof" className="hover:text-white">Proof</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-block bg-cyan-400 text-slate-900 font-semibold px-4 py-2 rounded-2xl">
            Request a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Offensive security,<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500">
              without the drama.
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300/90 max-w-xl">
            Boutique penetration testing & red-team consulting for startups, scaleups, and regulated enterprises.
            We blend attacker tradecraft with measurable risk reduction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="bg-cyan-400 text-slate-900 px-5 py-3 rounded-2xl font-semibold">
              Start an Engagement →
            </a>
            <a href="#services" className="border border-white/20 px-5 py-3 rounded-2xl font-semibold text-slate-200">
              Explore Services
            </a>
          </div>
        </div>

        <aside className="bg-slate-900/70 border border-white/10 rounded-3xl p-6">
          <h2 className="text-slate-100 font-bold text-lg flex items-center gap-2">🛡️ Real Attack Paths Uncovered</h2>
          <ul className="mt-4 space-y-2 text-slate-300 text-sm">
            <li>• Web & API vulns with PoC exploits</li>
            <li>• Internal lateral movement maps</li>
            <li>• Cloud misconfig to data-access chains</li>
            <li>• Rogue AP & WPA2/Enterprise tests</li>
            <li>• Red/Purple team with measurable detections</li>
          </ul>
          <div className="mt-4 text-xs text-slate-400">ISO 27001 • SOC 2 • HIPAA • GDPR — Evidence packs & Jira-ready tickets</div>
        </aside>
      </section>

      {/* Services */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
          Precision <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500">penetration testing</span> for modern stacks
        </h2>
        <p className="text-slate-300/80 max-w-3xl mb-10">
          Choose a focused assessment or combine into a program. Every engagement includes reproducible methodology, evidence, and prioritized fixes.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🌐 Web / API Pentest — OWASP, authz flaws, SSRF/RCE, logic bugs.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">📱 Mobile App Pentest — Runtime hooking, storage, transport security.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🖥️ Network Pentest — AD abuse, segmentation validation, credential surface.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">☁️ Cloud Pentest — AWS/Azure/GCP IAM, CI/CD supply chain.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">📡 Wireless Security — Evil twin, rogue AP, WPA2-Enterprise.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">👥 Social Engineering — Phish/smish/vish, MFA fatigue, awareness.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">⚔️ Red / Purple Team — Adversary emulation & detection tuning.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">✅ Compliance Readiness — ISO 27001, SOC 2, HIPAA, GDPR mapping.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🔍 Secure SDLC — Threat modeling, code review, pipeline hardening.</div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">A repeatable method that proves risk & accelerates fixes</h2>
        <div className="grid md:grid-cols-4 gap-6 text-sm">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🔐 Scoping — ROE, guardrails, data-handling, windows.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🔑 Discovery — Recon, fingerprinting, trust boundaries.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">🐛 Exploitation — Validate chains, PoCs, impact evidence.</div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">📝 Report & Fix — Priorities, control mappings, retest included.</div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">From VC-backed to regulated</h2>
        <div className="grid md:grid-cols-5 gap-4 text-sm">
          {['SaaS & Platforms','Fintech & Cloud-native','MSPs','Healthcare / HIPAA','Critical Infrastructure'].map((label) => (
            <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-200">
              <span className="text-cyan-300">◆</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">Reporting that moves the needle</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="font-semibold text-slate-100 mb-2">🏁 Exploit-first Evidence</div>
            <ul className="list-disc list-inside text-slate-300/90 space-y-2">
              <li>Screenshots & request/response traces</li>
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
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="font-semibold text-slate-100 mb-2">How fast can we start?</div>
            <div className="text-slate-300/90">Scoping call this week, kickoff as early as next week depending on complexity and change windows.</div>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="font-semibold text-slate-100 mb-2">Will you test production?</div>
            <div className="text-slate-300/90">Yes—with rate limits, guardrails, and real-time comms to avoid impact. Pre-prod also supported.</div>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="font-semibold text-slate-100 mb-2">Do you provide a retest?</div>
            <div className="text-slate-300/90">Yes. Every engagement includes a remediation retest to verify closure.</div>
          </div>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4">
            <div className="font-semibold text-slate-100 mb-2">Can you map findings to ISO 27001 / SOC 2 / HIPAA / GDPR?</div>
            <div className="text-slate-300/90">Absolutely. We include control mappings and evidence-ready language.</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4">
          Get a <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500">fixed-fee quote</span>
        </h2>
	  <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-sm text-slate-300/90 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>© {new Date().getFullYear()} QuantumEye Security — Offense-driven security. Evidence-backed results.</div>
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

