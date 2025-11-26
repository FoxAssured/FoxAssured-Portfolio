import { Project, Experience, Service, EducationItem, SkillCategory } from './types';

export const EMAIL = "foxassured@gmail.com";
export const GITHUB_URL = "https://github.com/FoxAssured";
export const LINKEDIN_URL = "https://www.linkedin.com/in/kyle-fox1/";

export const SKILLS: SkillCategory[] = [
  {
    category: "Automation & Tools",
    skills: ["Playwright", "Cypress", "Postman", "K6", "OWASP ZAP", "AWS Cloud"]
  },
  {
    category: "Languages & Scripting",
    skills: ["TypeScript", "JavaScript", "Python", "C#", "SQL", "HTML/CSS"]
  },
  {
    category: "Core QA & Leadership",
    skills: ["Manual QA", "Test Planning", "Test Leadership", "Defect Tracking", "Excel", "GitHub", "CI/CD"]
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Test Automation',
    description: 'Building robust, scalable automated test suites using Playwright or Cypress to reduce regression time.',
    iconName: 'Bot'
  },
  {
    id: 's2',
    title: 'QA Consulting & Auditing',
    description: 'Analyzing existing QA processes and implementing best practices to improve software quality culture.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 's3',
    title: 'Test Plan Creation',
    description: 'Detailed documentation of test strategies, scenarios, and cases ensuring comprehensive coverage and clear traceability.',
    iconName: 'FileText'
  },
  {
    id: 's4',
    title: 'CI/CD Integration',
    description: 'Seamlessly integrating automated tests into pipelines (GitHub Actions, AWS) for continuous feedback.',
    iconName: 'GitMerge'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Playwright UI Tests',
    description: 'A robust E2E testing framework for a complex financial application. Implements Page Object Model (POM) and handles dynamic authentication flows.',
    technologies: ['Playwright', 'TypeScript', 'POM', 'GitHub Actions'],
    imageUrl: 'https://playwright.dev/img/playwright-logo.svg',
    githubUrl: 'https://github.com/FoxAssured/Playwright-UI-Tests-SwagLabs',
  },
  {
    id: 'p2',
    title: 'Python Data Comparison Tool',
    description: 'Automated script to validate large datasets across different environments. Drastically reduced manual verification time for data migration projects.',
    technologies: ['Python', 'Pandas', 'Excel', 'SQL', 'Data Validation'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    githubUrl: 'https://github.com/FoxAssured/Python-Data-Comparison-Tool',
  },
  {
    id: 'p3',
    title: 'Performance & Security Suite',
    description: 'Integrated performance testing using K6 and security scanning with OWASP ZAP to ensure application resilience and compliance.',
    technologies: ['K6', 'OWASP ZAP', 'JavaScript', 'Security Testing'],
    // Using a Data URI for the Green Shield to ensure 100% reliability
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTZhMzRhIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6Ii8+PHBhdGggZD0ibTkgMTIgMiAyIDQtNCIvPjwvc3ZnPg==',
    githubUrl: 'https://github.com/FoxAssured/Performance-And-Security-Project'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e0',
    role: 'SDET Contractor',
    company: 'FoxAssured',
    period: 'Present',
    location: 'Remote',
    responsibilities: [
      'Delivering specialized QA Automation, SDET (Software Development Engineer in Test), and Test Architecture solutions for various clients.',
      'Optimizing test strategies, framework implementation, and CI/CD pipeline integration.',
      'Providing expert consultancy on software quality best practices and tool selection.'
    ]
  },
  {
    id: 'e1',
    role: 'Automation Engineer',
    company: 'Third Financial',
    period: 'January 2025 – Present',
    location: 'Remote',
    responsibilities: [
      'Developed and maintained automated end-to-end test suites using Playwright to ensure robust UI testing coverage across core financial applications.',
      'Collaborated closely with developers and product teams through Jira to track test coverage and defects.',
      'Gained hands-on experience with Jest for unit and integration testing in JavaScript/TypeScript environments.'
    ]
  },
  {
    id: 'e2',
    role: 'QA Engineer',
    company: 'Linney',
    period: 'February 2024 – January 2025',
    location: 'Nottingham',
    responsibilities: [
      'Engineered automated tests using Playwright and TypeScript, enhancing efficiency and accuracy in testing processes.',
      'Conducted meticulous testing on screens and media players for renowned brands like McDonald\'s, TUI and Starbucks.',
      'Ensured exceptional user experiences and product reliability through rigorous manual and automated validation.'
    ]
  },
  {
    id: 'e3',
    role: 'Junior Software Tester',
    company: 'Tribal Group',
    period: 'April 2021 – August 2023',
    location: 'Nottingham',
    responsibilities: [
      'Successfully operated as the test lead on multiple projects, managing and coaching 2 new testers.',
      'Launched the test plan environment within Azure DevOps.',
      'Created summary reports to accurately and efficiently convey the test status to stakeholders.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'ed1',
    name: 'Certified Test Automation Engineer',
    institution: 'ISTQB',
    date: 'August 2025',
    status: 'Completed'
  },
  {
    id: 'ed2',
    name: 'Certified Tester Foundation Level',
    institution: 'ISTQB',
    date: 'July 2022',
    status: 'Completed'
  },
  {
    id: 'ed3',
    name: 'Level 4 Software Testing Apprenticeship',
    institution: 'BCS',
    date: 'April 2021 – April 2023',
    status: 'Completed',
    grade: 'Distinction'
  },
  {
    id: 'ed4',
    name: 'Certified Developer - Associate',
    institution: 'Amazon Web Services',
    date: 'Coming Soon',
    status: 'Coming Soon'
  }
];