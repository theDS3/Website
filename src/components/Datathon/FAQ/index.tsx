import React from 'react'
import { FlipCard } from './Card'

export interface FAQ {
  question: string
  answer: string
}

export interface FAQsProps {
  faqs: FAQ[]
}

export function FAQ({ faqs }: FAQsProps) {
  return (
    <section id="faq" className="space-y-12 min-[620px]:py-[30vh]">
      <h1 className="lg:justify-center col-span-2 text-white text-4xl font-medium tracking-widest md:text-5xl lg:text-7xl text-center sm:flex sm:justify-center">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {faqs.map((faq, index) => (
          <FlipCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}
