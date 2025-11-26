export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons
}

export interface EducationItem {
  id: string;
  name: string;
  institution: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Coming Soon';
  grade?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}