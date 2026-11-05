import { brand } from '@/utils/brand';

export type EventStatus = 'current' | 'past';

export type EventData = {
  slug: string;
  title: string;
  status: EventStatus;
  color: string;
  tagline: string;
  about: string;
  date: string;
  time: string;
  location: string;
  highlights: string[]; // captions for the photo placeholders
  showcase: { title: string; team: string; text: string; tags: string[] }[];
  faqs: { question: string; answer: string }[];
};

const highlights = [
  'Highlight photo 1',
  'Highlight photo 2',
  'Highlight photo 3',
  'Highlight photo 4',
  'Highlight photo 5',
  'Highlight photo 6',
];

const showcase = [
  {
    title: 'Project name',
    team: 'Team name',
    text: 'A short description of what this team built and what problem it solves.',
    tags: ['Python', 'ML'],
  },
  {
    title: 'Project name',
    team: 'Team name',
    text: 'A short description of what this team built and what problem it solves.',
    tags: ['Data', 'Visualization'],
  },
  {
    title: 'Project name',
    team: 'Team name',
    text: 'A short description of what this team built and what problem it solves.',
    tags: ['LLMs', 'Agents'],
  },
];

const faqs = [
  {
    question: 'Who can attend?',
    answer:
      'Placeholder: say who this event is for and whether any experience is needed.',
  },
  {
    question: 'Does it cost anything?',
    answer: 'Placeholder: add pricing here, or say it is free.',
  },
  {
    question: 'What should I bring?',
    answer: 'Placeholder: laptop, charger, student ID, anything else.',
  },
  {
    question: 'How do I sign up?',
    answer:
      'Placeholder: link the registration form, or point people to the mailing list.',
  },
];

const TBA = {
  date: 'Date to be announced',
  time: 'Time to be announced',
  location: 'Location to be announced',
};

export const events: EventData[] = [
  // Current
  {
    slug: 'build-your-own-wrapped',
    title: 'Build Your Own Wrapped',
    status: 'current',
    color: brand.pink,
    tagline: 'Turn your own data into a personal year-in-review.',
    about:
      'Placeholder: describe the event. What will people build, what will they learn, and what do they need to bring?',
    ...TBA,
    date: 'November BLANKth, 2026',
    time: '?:00 PM – ?:00 PM',
    location: 'IAXXXX, Toronto',
    highlights,
    showcase,
    faqs,
  },
  {
    slug: 'machine-learning-bootcamp',
    title: 'Machine Learning Bootcamp',
    status: 'current',
    color: brand.purple,
    tagline: 'A hands-on introduction to building and evaluating ML models.',
    about:
      'Placeholder: describe the bootcamp. Cover the topics, the format and who it is for.',
    ...TBA,
    date: 'Fall Semester, Biweekly on Mondays, 2026',
    time: '4:00 PM – 6:00 PM',
    location: 'UTSC, Toronto',
    highlights,
    showcase,
    faqs,
  },
  // Past
  {
    slug: 'agentic-ai-bootcamp',
    title: 'Agentic AI Bootcamp',
    status: 'past',
    color: brand.green,
    tagline: 'Hands-on sessions on building with AI agents.',
    about:
      'Placeholder: describe the bootcamp. Cover the topics, the format and the final project showcase.',
    ...TBA,
    date: 'Fall Semester, Biweekly on Fridays, 2025',
    time: '4:00 PM – 6:00 PM',
    location: 'UTSC, Toronto',
    highlights,
    showcase,
    faqs,
  },
  {
    slug: 'agentic-ai-hackathon',
    title: 'Agentic AI Hackathon',
    status: 'past',
    color: brand.purple,
    tagline:
      'A weekend to build autonomous AI agents that work with real data.',
    about:
      'Placeholder: describe the hackathon. Cover the challenge, the teams and the prizes.',
    ...TBA,
    date: 'February 14–15, 2026',
    time: '10:00 AM – 6:00 PM',
    location: 'UTSC, Toronto',
    highlights,
    showcase,
    faqs,
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
