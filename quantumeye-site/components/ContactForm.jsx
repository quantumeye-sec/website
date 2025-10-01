// components/ContactForm.jsx
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      // TODO: wire up your endpoint here (Formspree/Netlify/email/etc.)
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  const base =
    'w-full rounded-2xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-400 ' +
    'px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-400 ' +
    'transition';

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-3xl">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" type="text" required placeholder="Your name" className={base} />
        <input name="email" type="email" required placeholder="Work email" className={base} />
      </div>
      <input name="company" type="text" placeholder="Company" className={base} />
      <input name="scope" type="text" placeholder="Scope (web, API, cloud, internal, etc.)" className={base} />
      <textarea
        name="details"
        rows={5}
        placeholder="Objectives, targets, timelines, and any constraints…"
        className={base}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-glow-violet px-5 py-3 rounded-2xl font-semibold disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Request quote'}
      </button>
      {status === 'success' && (
        <div className="text-sm text-emerald-300">Thanks! We’ll get back to you shortly.</div>
      )}
      {status === 'error' && (
        <div className="text-sm text-rose-300">Something went wrong. Please try again.</div>
      )}
    </form>
  );
}

