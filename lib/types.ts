export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  stars?: number;
  highlight?: string;
  image?: string;
  date?: string;
  type?: string;
}

export interface Experience {
  role: string;
  company: string;
  logo?: string;
  location?: string;
  period: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface Principle {
  title: string;
  description: string;
}
