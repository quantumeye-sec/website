'use client';

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to Formspree/Getform or an API route if you add one later
  }
  return (
    <form className="grid gap-4 max-w-2xl" onSubmit={handleSubmit}>
      <input type="text" placeholder="Full name" className="bg-slate-950/50 border border-white/10 p-3 rounded" required />
      <input type="email" placeholder="Work email" className="bg-slate-950/50 border border-white/10 p-3 rounded" required />
      <input type="text" placeholder="Company" className="bg-slate-950/50 border border-white/10 p-3 rounded" />
      <input type="url" placeholder="Website / App URL" className="bg-slate-950/50 border border-white/10 p-3 rounded" />
      <textarea placeholder="What would you like tested? Goals, timelines, constraints." className="bg-slate-950/50 border border-white/10 p-3 rounded min-h-32" />
      <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-2xl font-semibold">Request Quote</button>
    </form>
  );
}

