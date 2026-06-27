import type {
  Achievement,
  BlogPost,
  Certification,
  EducationEntry,
  ExperienceEntry,
  Project,
  Publication,
  ResearchInterest,
  SkillCategory,
  Testimonial,
} from "./types";

export const profile = {
  name: "Pratik Sharma",
  initials: "PS",
  title: "Computer Science Student",
  roles: [
    "AI Engineer",
    "Backend Developer",
    "Machine Learning Enthusiast",
    "Research Assistant",
  ],
  location: "Nepal",
  email: "sharmapratikabcd@gmail.com",
  phone: "+977 9841327376",
  phoneHref: "+9779841327376",
  linkedin: "https://www.linkedin.com/in/pratik-sharma-ab17b2344/",
  github: "https://github.com/PratikSharma264",
  githubUsername: "PratikSharma264",
  domain: "portfolio-five-rho-kjc7ra8zsi.vercel.app",
  siteUrl: "https://portfolio-five-rho-kjc7ra8zsi.vercel.app",
  resumeUrl: "#", // TODO: replace with a real PDF in /public/resume.pdf
  availability: "Open to internships & research collaborations",
  summary:
    "I build retrieval-augmented and applied-ML systems, then ship them as real, usable software. Most of my time goes into the gap between a model that works in a notebook and a system that holds up in production — evaluation, failure analysis, and the backend plumbing around it.",
  bio: [
    "I'm a Computer Science undergraduate based in Nepal, focused on the applied side of AI: retrieval-augmented generation, NLP, and the infrastructure that makes machine learning systems trustworthy enough to actually deploy.",
    "My coursework and side projects sit at the intersection of three things — large language models, the data engineering that feeds them, and the backend work needed to put them in front of real users. I'm equally comfortable profiling a Spark job and shipping a Next.js front end for it.",
    "Right now I'm most interested in why RAG pipelines fail silently — retrieval misses, stale context, hallucinated citations — and how to detect those failures before a user sees them, particularly in medical and other high-stakes domains.",
  ],
  goals:
    "Looking for internship, research-assistant, or junior engineering roles where I can work on applied ML systems end-to-end — from data pipeline to model to the product surface people touch.",
  strengths: [
    "Translates research papers into working pipelines",
    "Comfortable across the stack: data, model, API, UI",
    "Writes for failure cases first, not just the happy path",
    "Self-directed — most projects below started outside any classroom",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    blurb: "What I reach for day to day",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 40 },
      { name: "TypeScript", level: 30 },
      { name: "Java", level: 10 },
      { name: "SQL", level: 70 },
      { name: "C++", level: 70 },
      { name: "C", level: 64 },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    blurb: "Shipping the product layer",
    skills: [
      { name: "Next.js", level: 20 },
      { name: "React", level: 20 },
      { name: "Django", level: 80 },
      { name: "Tailwind CSS", level: 50 },
      { name: "HTML", level: 60 },
      { name: "CSS", level: 60 },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning & AI",
    blurb: "Where most of my research time goes",
    skills: [
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 70 },
      { name: "NLP", level: 82 },
      { name: "RAG Systems", level: 84 },
      { name: "LLM Integration", level: 80 },
    ],
  },
  {
    id: "data",
    title: "Databases",
    blurb: "Where the data actually lives",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Cassandra", level: 50 },
    ],
  },
  // {
  //   id: "bigdata",
  //   title: "Big Data",
  //   blurb: "Pipelines at scale",
  //   skills: [
  //     { name: "Spark", level: 74 },
  //     { name: "Hadoop", level: 70 },
  //     { name: "Hive", level: 66 },
  //     { name: "Sqoop", level: 58 },
  //     { name: "Flume", level: 55 },
  //     { name: "Pig", level: 52 },
  //   ],
  // },
  {
    id: "devops",
    title: "DevOps",
    blurb: "Keeping it running",
    skills: [
      { name: "Git", level: 70 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 50 },
      { name: "Linux", level: 60 },
      { name: "CI/CD", level: 68 },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "clinical-rag-failure-classification",
    title: "Clinical RAG Failure Classification System",
    tagline: "Catching retrieval failures before a clinician sees them",
    description:
      "A diagnostic layer that sits inside a medical retrieval-augmented generation pipeline and classifies why a given answer might be untrustworthy — missing context, irrelevant retrieval, or contradicted-by-source generation — instead of only scoring the final answer.",
    category: "ai",
    status: "research",
    pipeline: ["Query", "Retrieve", "Classify failure mode", "Flag or answer"],
    features: [
      "Medical document retrieval over a clinical corpus",
      "A dedicated retrieval-failure detection model, separate from the generator",
      "End-to-end RAG pipeline with swappable retriever/generator components",
      "LLM integration for answer synthesis with failure-aware fallbacks",
    ],
    tech: ["Python", "PyTorch", "LangChain", "FAISS", "scikit-learn"],
    challenges:
      "Most RAG evaluation only scores the final answer, which hides whether a wrong answer came from bad retrieval or bad generation. Building a labeled failure-mode dataset and a classifier that separates the two was the core technical problem.",
    impact:
      "Gives a concrete, inspectable reason when a clinical RAG answer should be trusted less — a step toward RAG systems that fail loudly instead of silently in high-stakes domains.",
    github: "https://github.com/PratikSharma264/Clinical_Rag",
    accent: "amber",
  },
  {
    slug: "grubmate-food-delivery",
    title: "GrubMate",
    tagline: "A full-stack food delivery platform, built end to end",
    description:
      "A multi-sided food delivery platform covering customers, restaurants, and delivery riders — order placement, restaurant-side order management, and live delivery tracking in one system.",
    category: "web",
    status: "in-progress",
    features: [
      "User management and authentication across customer and restaurant accounts",
      "Restaurant management dashboard for menus and incoming orders",
      "Live delivery tracking",
      "Order management from placement through fulfillment",
    ],
    tech: ["Django", "PostgreSQL", "React", "REST APIs"],
    challenges:
      "Coordinating state across three different user roles (customer, restaurant, rider) in real time without the order pipeline getting out of sync was the main design challenge.",
    impact:
      "A complete, working reference for multi-sided marketplace architecture — the kind of system design question that shows up in full-stack interviews.",
    github: "https://github.com/PratikSharma264/FoodDeliveryWebApp",
    accent: "glacier",
  },
  // {
  //   slug: "bigdata-analytics-platform",
  //   title: "Big Data Analytics Platform",
  //   tagline: "Hadoop and Spark, end to end on a real dataset",
  //   description:
  //     "An analytics pipeline built on the Hadoop ecosystem with Spark for processing, taking raw data from ingestion through transformation to a visualized output layer.",
  //   category: "data",
  //   status: "in-progress",
  //   features: [
  //     "Hadoop ecosystem setup for distributed storage",
  //     "Spark processing for transformation at scale",
  //     "Data visualization layer on top of processed output",
  //   ],
  //   tech: ["Hadoop", "Spark", "Hive", "Python"],
  //   challenges:
  //     "Tuning Spark jobs against a Hadoop cluster's actual resource limits — rather than just getting a job to finish on a laptop — was the most useful, least classroom-taught part of this project.",
  //   impact:
  //     "Coursework-derived but built past the minimum requirement: a working big-data pipeline that mirrors how analytics infrastructure looks in production.",
  //   github: "https://github.com/PratikSharma264",
  //   accent: "moss",
  // },
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Retrieval-Augmented Generation",
    description:
      "Failure detection, evaluation, and reliability of RAG pipelines beyond top-line accuracy.",
  },
  {
    title: "Medical AI",
    description:
      "Applying LLMs and retrieval systems to clinical text where errors carry real cost.",
  },
  {
    title: "Explainable AI",
    description:
      "Making model decisions — especially retrieval decisions — inspectable rather than opaque.",
  },
  {
    title: "Natural Language Processing",
    description: "Core NLP methods underpinning retrieval and generation systems.",
  },
  {
    title: "Knowledge Graphs",
    description:
      "Structured knowledge as a complement to vector retrieval for grounded generation.",
  },
];

export const publications: Publication[] = [
  {
    title: "[Add publication title — or remove this section if not applicable yet]",
    venue: "[Venue / preprint server]",
    date: "[Add date]",
    status: "in-progress",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Higher Secondary Education",
    institution: "Global School of Science",
    location: "Baneshwor,Nepal",
    start: "2021",
    end: "2022",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
  {
    degree: "Bachelor in Computer Science",
    institution: "Khwopa Engineering College",
    location: "Bhaktapur, Nepal",
    start: "2023",
    end: "...",
    coursework: [
      "Machine Learning",
      "Artificial Intelligence",
      "Computer Networks",
      "Database Systems",
      "Computer Organization and Architecture",
    ],
  },
];

// export const certifications: Certification[] = [
//   {
//     name: "[Certification Name]",
//     issuer: "[Issuing Platform]",
//     date: "[Add date]",
//     link: "#",
//   },
//   {
//     name: "[Certification Name]",
//     issuer: "[Issuing Platform]",
//     date: "[Add date]",
//     link: "#",
//   },
// ];

// export const achievements: Achievement[] = [
//   {
//     title: "[Achievement / competition placement]",
//     org: "[Organizer]",
//     date: "[Add date]",
//     description: "[One line on what it was and what you did.]",
//   },
//   {
//     title: "[Hackathon name]",
//     org: "[Organizer]",
//     date: "[Add date]",
//     description: "[What you built, in one line.]",
//   },
// ];

// export const experience: ExperienceEntry[] = [
//   {
//     role: "[Role title]",
//     org: "[Company / lab name]",
//     type: "internship",
//     start: "[Start]",
//     end: "[End / Present]",
//     location: "[Remote / City]",
//     points: [
//       "[What you owned — one concrete line]",
//       "[A measurable outcome, if you have one]",
//     ],
//   },
// ];

// export const testimonials: Testimonial[] = [
//   {
//     name: "[Name]",
//     role: "[Their role, relationship to you]",
//     quote:
//       "[A short quote about working with you. Replace with a real one from a professor, mentor, or collaborator — or remove this section.]",
//   },
//   {
//     name: "[Name]",
//     role: "[Their role, relationship to you]",
//     quote: "[Another short, real quote goes here.]",
//   },
// ];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-rag-fails-silently",
    title: "Why RAG pipelines fail silently — and how to catch it",
    excerpt:
      "Most RAG evaluation only looks at the final answer. That hides whether the failure came from retrieval or generation — here's a sharper way to look at it.",
    category: "RAG Systems",
    tags: ["RAG", "AI", "Evaluation"],
    date: "2026-02-14",
    content: [
      "A retrieval-augmented generation pipeline has two places to fail: the retriever can return the wrong context, or the generator can ignore good context and answer badly anyway. Scoring only the final output collapses these into one number, which makes debugging close to impossible.",
      "Splitting evaluation into a retrieval-quality check and a generation-faithfulness check — even a rough one — makes failure analysis tractable. You start to see whether your error budget is a retriever problem or a prompting problem, which are fixed in completely different ways.",
      "This is the core idea behind the clinical RAG failure classifier in my projects section: a small model whose only job is to label *why* an answer might be wrong, sitting alongside the main pipeline rather than inside it.",
    ],
  },

  // {
  //   slug: "bull-stack-for-ml-engineers",
  //   title: "The full-stack skills that actually help an ML project ship",
  //   excerpt:
  //     "A model in a notebook and a model in front of a user are different projects. Here's the non-ML work that closes that gap.",
  //   category: "Machine Learning",
  //   tags: ["Django", "Full-Stack", "ML"],
  //   date: "2025-11-22",
  //   content: [
  //     "Most of the work between 'the model works' and 'the product works' is unglamorous: an API contract that won't change under you, a job queue for anything slower than a button click, and a UI that tells the user when the model is uncertain instead of presenting every answer with equal confidence.",
  //     "Django on the backend and a typed frontend (Next.js + TypeScript) cover almost all of it — the ML-specific part is usually smaller than people expect.",
  //   ],
  // },
];

export const blogCategories = Array.from(
  new Set(blogPosts.map((post) => post.category)),
);

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags)),
);

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#education", label: "Education" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];
