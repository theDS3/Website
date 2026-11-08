import type { StaticImageData } from 'next/image';
import { brand } from '@/utils/brand';

import img1 from '@/public/Datathon/carousel/IMG_1818.png';
import img2 from '@/public/Datathon/carousel/IMG_1883.png';
import img3 from '@/public/Datathon/carousel/IMG_1898.png';
import img4 from '@/public/Datathon/carousel/IMG_7688.png';
import img5 from '@/public/Datathon/carousel/IMG_7700.png';
import img6 from '@/public/Datathon/carousel/IMG_7703.png';
import img7 from '@/public/Datathon/carousel/IMG_7704.png';
import img8 from '@/public/Datathon/carousel/IMG_7735.png';

import img9 from '@/public/Bootcamp/Carousel/IMG_7174.jpg';
import img10 from '@/public/Bootcamp/Carousel/IMG_7169.jpg';
import img11 from '@/public/Bootcamp/Carousel/IMG_1399.jpg';
import img12 from '@/public/Bootcamp/Carousel/IMG_1397.jpg';
import img13 from '@/public/Bootcamp/Carousel/IMG_1396.jpg';
import img14 from '@/public/Bootcamp/Carousel/DSCF4345.jpg';

import img15 from '@/public/Bootcamp/Projects/TARS.jpg';
import img16 from '@/public/Bootcamp/Projects/Newt.jpg';
import img17 from '@/public/Bootcamp/Projects/Glioblastoma.jpg';

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
  photos?: StaticImageData[]; // real photos; when present, use these instead of placeholders
  showcase: {
    title: string;
    team: string;
    text: string;
    tags: string[];
    photos?: StaticImageData[]; // project photos; the first one is shown on the card
  }[];
  faqs: { question: string; answer: string }[];
  content?: {
    title: string;
    date: string;
    recordings?: string[]; // [] shows "Recordings soon"; leave out to show nothing
    slides?: string | null; // a link; leave out for "coming soon"; null hides it
    notebook?: string | null;
  }[];
};

const highlights = [
  'Highlight photo 1',
  'Highlight photo 2',
  'Highlight photo 3',
  'Highlight photo 4',
  'Highlight photo 5',
  'Highlight photo 6',
];

// Shared placeholder projects (no photos, so they show the tinted tile)
const showcase: EventData['showcase'] = [
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

const mlFaqs = [
  {
    question: 'What is the Machine Learning Bootcamp?',
    answer:
      'A bi-weekly workshop series to build a foundation in Machine Learning technologies and methodologies.',
  },
  {
    question: "What's in it for me?",
    answer:
      'Engage in interactive labs and practical exercises designed to enhance your understanding and application of Machine Learning concepts. It also provides an opportunity for participants to focus on building real-world projects.',
  },
  {
    question: 'Will sessions be recorded?',
    answer:
      'The workshop is more exciting to attend in-person and to meet new people! The workshop material will be posted on our website.',
  },
  {
    question: 'How many students can participate?',
    answer:
      'Although we make our resources available to everyone, only 100 students will be accepted into the program.',
  },
  {
    question: 'Why should I apply?',
    answer:
      'Registered students will be given exclusive access to the project-building workshops and a certificate of completion signed by CMS faculty.',
  },
];

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
    highlights: [],
    showcase: [],
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
    highlights: [],
    showcase: [],
    faqs: [
      {
        question: 'What is the Machine Learning Bootcamp?',
        answer:
          'A bi-weekly workshop series to build a foundation in Machine Learning technologies and methodologies.',
      },
      {
        question: "What's in it for me?",
        answer:
          'Engage in interactive labs and practical exercises designed to enhance your understanding and application of Machine Learning concepts. It also provides an opportunity for participants to focus on building real-world projects.',
      },
      {
        question: 'Will sessions be recorded?',
        answer:
          'The workshop is more exciting to attend in-person and to meet new people! The workshop material will be posted on our website.',
      },
      {
        question: 'How many students can participate?',
        answer:
          'Although we make our resources available to everyone, only 100 students will be accepted into the program.',
      },
      {
        question: 'Why should I apply?',
        answer:
          'Registered students will be given exclusive access to the project-building workshops and a certificate of completion signed by CMS faculty.',
      },
    ],
    content: [
      {
        title: 'Introduction to ML',
        date: 'October 12th',
        slides:
          'https://utoronto-my.sharepoint.com/:p:/r/personal/kyaw_thiha_mail_utoronto_ca/Documents/ML%20Bootcamp-1.pptx?d=w5fac8beb45b144049411b9eb07e11be9&csf=1&web=1&e=thAlza',
      },
      {
        title: 'Introduction to CNNs',
        date: 'October 19th',
        slides:
          'https://docs.google.com/presentation/d/1ZzGCNo-EY7IsvfH98CZNvhUgb2Tlc5NER3KCeWe_rfA/edit?slide=id.p#slide=id.p',
      },
    ],
  },
  // Past
  {
    slug: 'agentic-ai-bootcamp',
    title: 'Agentic AI Bootcamp',
    status: 'past',
    color: brand.green,
    tagline: 'Hands-on sessions on building with AI agents.',
    about:
      "Curious about AI but not sure where to start? DS3's Agentic AI Bootcamp gives you the tools, guidance, and skills to dive into Agentic AI. Come join us and start your journey today!",
    date: 'Fall Semester, Biweekly on Fridays, 2025',
    time: '4:00 PM – 6:00 PM',
    location: 'IA2040(The Cloud), UTSC',
    highlights,
    photos: [img9, img10, img11, img12, img13, img14],
    showcase: [
      {
        title: 'TARS',
        team: 'Divy Wadhwani',
        text: 'To help therapists handle more clients and provide timely support. The goal is to enhance (not replace) therapy by leveraging AI, making mental health care more efficient and accessible.',
        tags: ['Python', 'LLMs', 'Agents'],
        photos: [img15],
      },
      {
        title: 'Newt',
        team: 'Ojas Singh, Aryan Jain',
        text: 'Our Solution: Newt Newt is a tool that transforms lecture content into Khan Academy or 3Blue1Brown-style educational videos.',
        tags: ['Python', 'LLMs', 'Agents'],
        photos: [img16],
      },
      {
        title: 'Glioblastoma',
        team: 'Zuhal Olomi, Elena Osipyan, Isabelle',
        text: 'A short description of what this team built and what problem it solves.',
        tags: ['Python', 'LLMs', 'Agents'],
        photos: [img17],
      },
    ],
    content: [
      {
        title: 'Introduction to Neural Networks (Theory Focus)',
        date: 'Sep 12',
        slides:
          'https://drive.google.com/file/d/15Q49rIijTOWc2sfJg4POe3HjbG0YLq8I/view',
        notebook:
          'https://colab.research.google.com/drive/1dYVWA2jIHElAYp-LmW_nSwTjBJneX_ok?usp=drive_link',
      },
      {
        title: 'Introduction to LLMs',
        date: 'Sep 26',
        slides:
          'https://drive.google.com/file/d/1hOdy1ipZMUaiWpGswThJ7p_jcIMjkqI_/view',
        notebook:
          'https://colab.research.google.com/drive/1gO7b3kWSDdtto8M5n9piTn_88CCdUiE2',
      },
      {
        title: 'Modern LLMs & Generative AI',
        date: 'Oct 10',
        slides:
          'https://drive.google.com/file/d/1xXJ3eAQvhtatR-e0p2hx56WZjxD0jPgy/view',
      },
      {
        title: 'Agents with Agno',
        date: 'Oct 24',
        slides:
          'https://drive.google.com/file/d/1zKmb3QGz8O2ksAO_OVcGwd5dy7VcJ0Jk/view',
        notebook: 'https://docs.agno.com/',
      },
      { title: 'Building with Agno', date: 'Nov 7' },
      { title: 'RAG, Semantic Search, and Deployment', date: 'Nov 21' },
      { title: 'Agent Project Build Session', date: 'Jan 16' },
      {
        title: 'Panel & Showcase',
        date: 'Jan 23',
        slides: null,
        notebook: null,
      },
    ],
    faqs: [
      {
        question: 'What is the Agentic AI Bootcamp?',
        answer:
          'A bi-weekly workshop series to build a foundation in Agentic AI technologies and methodologies.',
      },
      {
        question: "What's in it for me?",
        answer:
          'Engage in interactive labs and practical exercises designed to enhance your understanding and application of Agentic AI concepts. It also provides an opportunity for participants to focus on building real-world projects.',
      },
      {
        question: 'Will sessions be recorded?',
        answer:
          'The workshop is more exciting to attend in-person and to meet new people! The workshop material will be posted on our website.',
      },
      {
        question: 'How many students can participate?',
        answer:
          'Although we make our resources available to everyone, only 100 students will be accepted into the program.',
      },
      {
        question: 'Why should I apply?',
        answer:
          'Registered students will be given exclusive access to the project-building workshops and a certificate of completion signed by CMS faculty.',
      },
    ],
  },
  {
    slug: 'agentic-ai-hackathon',
    title: 'Agentic AI Hackathon',
    status: 'past',
    color: brand.purple,
    tagline:
      'A weekend to build autonomous AI agents that work with real data.',
    about:
      'The fourth annual Agentic AI Hackathon hosted by the Data Science & Statistics Society offers a unique challenge in building autonomous AI agents that interact with real-world data. Join us for a thrilling weekend of creativity and innovation!',
    date: 'February 14–15, 2026',
    time: '10:00 AM – 6:00 PM',
    location: 'UTSC, Toronto',
    highlights,
    photos: [img1, img2, img3, img4, img5, img6, img7, img8],
    showcase: [],
    faqs: [
      {
        question: 'What is the Agentic AI Hackathon?',
        answer:
          'A weekend long AI hackathon where participants build autonomous AI agents that interact with real world data',
      },
      {
        question: 'When and where will the Hackathon take place?',
        answer: 'February 14th–15th, 2026 @ UTSC',
      },
      {
        question: 'Who can participate?',
        answer: 'Students from all universities/high schools are welcome!',
      },
      {
        question: 'Is there a registration fee?',
        answer: 'No! It is a free event!',
      },
      {
        question: 'Is it individual or in groups?',
        answer:
          'Both are fine! However, groups may have a maximum of 4 members',
      },
      {
        question: 'Will there be prizes?',
        answer:
          'Yes! We have exciting prizes for the top teams, including cash awards, internship opportunities, and tech gadgets. Specific prize details will be announced closer to the event.',
      },
    ],
  },
  {
    slug: 'machine-learning-bootcamp-2024',
    title: 'Machine Learning Bootcamp 2024',
    status: 'past',
    color: brand.pink,
    tagline: 'A hands-on introduction to ML, from regression to deep learning.',
    about:
      'A fall 2024 workshop series that walked through machine learning from the ground up: an introduction to ML, data visualization, regression, classification and deep learning. Slides and recordings from each session are below.',
    date: 'Sep 20 – Nov 29, 2024 (Fridays)',
    time: '?:00 PM – ?:00 PM', // fill in
    location: 'UTSC, Toronto', // confirm the room
    highlights: [],
    photos: [],
    showcase: [],
    faqs: mlFaqs,
    content: [
      {
        title: 'Introduction to ML',
        date: 'Sep 20',
        recordings: [
          'https://www.youtube.com/watch?v=S1ELzaj4m-Y',
          'https://www.youtube.com/watch?v=57_4_0ebrJ8',
        ],
        slides:
          'https://drive.google.com/file/d/1C0x-Tgy_-NmNNBQX2dVve7_hrKLqqyyK/view',
      },
      {
        title: 'Data Visualization',
        date: 'Oct 4',
        recordings: ['https://www.youtube.com/watch?v=fiXKY5OSC34'],
        slides:
          'https://drive.google.com/file/d/1lqdI6nkoyIaPWYWsSAT5zF9Wmd-42gFy/view',
      },
      {
        title: 'Regression Techniques',
        date: 'Oct 18',
        recordings: [],
        slides:
          'https://drive.google.com/file/d/1l4bklrSgh-wW5ShfkgX-sxGbY_Arol_V/view',
      },
      {
        title: 'Classification Methods',
        date: 'Oct 25',
        recordings: ['https://www.youtube.com/watch?v=-gtXV9MnG1c'],
        slides:
          'https://drive.google.com/file/d/1vf9W0ea98853kTWWZjO4WV-6rnNVplHI/view',
      },
      {
        title: 'Deep Learning I',
        date: 'Nov 15',
        recordings: [],
        slides:
          'https://drive.google.com/file/d/1a0yaA-GaO7KhW0xfdOvuwYuTYfyGR17g/view',
      },
      {
        title: 'Deep Learning II',
        date: 'Nov 29',
        recordings: ['https://www.youtube.com/watch?v=af2jjx-diKM'],
        slides:
          'https://drive.google.com/file/d/1mbzkySOzSETFKDEqolR8y25fDd4xhB2F/view',
      },
    ],
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
