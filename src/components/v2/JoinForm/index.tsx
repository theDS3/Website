'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand } from '@/utils/brand';

type State = 'idle' | 'sending' | 'done' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-[color:var(--c)]';

export default function JoinForm() {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState('sending');
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.get('email'),
          name: data.get('name'),
          company: data.get('company'), // honeypot
        }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <motion.div
        className="mt-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}>
        <span
          className="mx-auto mb-4 block h-1.5 w-12 rounded-full"
          style={{ background: brand.green }}
        />
        <h2
          className="text-2xl font-bold"
          style={{ color: brand.green }}>
          You&rsquo;re on the list!
        </h2>
        <p className="mt-3 text-white/70">
          Thanks for joining. Watch your inbox for DS3 events and updates.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 flex w-full max-w-md flex-col gap-5 text-left"
      style={{ '--c': brand.green } as React.CSSProperties}>
      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        <span>
          Email <span className="text-red-400">*</span>
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-white/80">
        <span>
          Full name <span className="text-red-400">*</span>
        </span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClass}
        />
      </label>

      {/* Honeypot: hidden from people, bots fill it in */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <button
        type="submit"
        disabled={state === 'sending'}
        className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#101010] disabled:opacity-50">
        {state === 'sending' ? 'Sending…' : 'Join the mailing list'}
      </button>

      {state === 'error' && (
        <p
          role="alert"
          className="text-sm text-red-400">
          Something went wrong. Please try again, or email us directly.
        </p>
      )}

      <p className="text-xs text-white/40">
        We only use this to send you DS3 events and updates.
      </p>
    </form>
  );
}
