'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (spam trap). If filled, silently succeed.
    if (data.get('website')) {
      setStatus({ state: 'success', message: 'Thanks! We\'ll be in touch shortly.' });
      form.reset();
      return;
    }

    setStatus({ state: 'loading', message: '' });

    try {
	if (!data.get('_replyto') && data.get('email')) {
  		data.set('_replyto', data.get('email'));
	}
      const res = await fetch('https://formspree.io/f/mjkawelr', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });

      if (res.ok) {
        setStatus({ state: 'success', message: 'Thanks! We’ll reply within one business day.' });
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = json?.errors?.[0]?.message || 'Submission failed. Please try again.';
        throw new Error(msg);
      }
    } catch (err) {
      setStatus({ state: 'error', message: err.message || 'Something went wrong.' });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mjkawelr"  // fallback if JS is disabled
      method="POST"
      className="grid gap-4 max-w-2xl"
    >
      {/* For inbox subject */}
      <input type="hidden" name="_subject" value="QuantumEye — Quote Request" />
      {/* Where replies should go */}
      <input type="hidden" name="_replyto" value="" />

      <input
        type="text" name="name" placeholder="Full name"
        className="bg-slate-950/50 border border-white/10 p-3 rounded"
        required
      />
      <input
        type="email" name="email" placeholder="Work email"
        className="bg-slate-950/50 border border-white/10 p-3 rounded"
        required
      />
      <input
        type="text" name="company" placeholder="Company"
        className="bg-slate-950/50 border border-white/10 p-3 rounded"
      />
      <input
        type="url" name="site" placeholder="Website / App URL"
        className="bg-slate-950/50 border border-white/10 p-3 rounded"
      />
      <textarea
        name="message" placeholder="What would you like tested? Goals, timelines, constraints."
        className="bg-slate-950/50 border border-white/10 p-3 rounded min-h-32"
        required
      />

      {/* Honeypot field (hidden from humans) */}
      <input
        type="text" name="website" autoComplete="off" tabIndex="-1"
        className="hidden" aria-hidden="true"
      />

      <button
        type="submit"
        className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-2xl font-semibold disabled:opacity-60"
        disabled={status.state === 'loading'}
      >
        {status.state === 'loading' ? 'Sending…' : 'Request Quote'}
      </button>

      <div className="h-6">
        {status.state === 'success' && (
          <p className="text-sm text-green-400" role="status" aria-live="polite">
            {status.message}
          </p>
        )}
        {status.state === 'error' && (
          <p className="text-sm text-rose-400" role="alert" aria-live="assertive">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}

