export type SkillLevel = {
  name: string;
  level: number; // 0-100
};

export type SkillCategory = {
  id: string;
  title: string;
  blurb: string;
  skills: SkillLevel[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "ai" | "web" ;
  status: "live" | "in-progress" | "research";
  features: string[];
  tech: string[];
  challenges: string;
  impact: string;
  github?: string;
  demo?: string;
  accent: "amber" | "glacier" | "moss";
  pipeline?: string[]; // for the RAG-style diagram chip trail
};

export type ResearchInterest = {
  title: string;
  description: string;
};

export type Publication = {
  title: string;
  venue: string;
  date: string;
  status: "published" | "under-review" | "in-progress";
  link?: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  coursework: string[];
  note?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export type Achievement = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export type ExperienceEntry = {
  role: string;
  org: string;
  type: "internship" | "freelance" | "volunteer" | "research";
  start: string;
  end: string;
  location: string;
  points: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  content: string[];
};
