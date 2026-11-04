'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Intro() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  // People who prefer less motion skip the intro entirely
  if (done || reduce) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#a855f7]"
      initial={{ y: 0 }}
      animate={{ y: '-100%' }}
      transition={{ delay: 1.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setDone(true)}>
      <motion.span
        className="text-7xl font-bold text-[#101010]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        DS3
      </motion.span>
    </motion.div>
  );
}
