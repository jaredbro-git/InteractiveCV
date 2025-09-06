export interface Skill {
  name: string;
  level: string; // e.g., "Expert", "Intermediate"
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export interface Hobby {
  name: string;
  description?: string;
}

export interface CVData {
  name: string;
  title: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education?: Education[];
  hobbies?: Hobby[];
}


export const cvData: CVData = {
  name: "Jared Jones Pankhurst",
  title: "Mainframe Developer",
  about: "I am a passionate mainframe application developer with experience in COBOL, CICS, and modern web technologies.",
  skills: [
    { name: "COBOL", level: "Intermediate" },
    { name: "CICS", level: "Intermediate" },
    { name: "SQL", level: "Intermediate"},
    { name: "JCL", level: "Intermediate" },
    { name: "Python", level: "Intermediate"},
    { name: "TypeScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
  ],
  experience: [
    {
      company: "Headway Systems Ltd",
      role: "Junior Software Support Specialist",
      startDate: "2021-11",
      endDate: "2023-02",
      description: "Worked on mapping data from a Object Oriented Jade database to exported Word and Excel documents and developed a Windows app to format the documents to fit client requests."
    },
    {
      company: "BNZ",
      role: "Technology Graduate",
      startDate: "2023-02",
      endDate: "2024-01",
      description: "Worked on small Mainframe development tasks while learning all about Mainframe technology."
    },
    {
      company: "BNZ",
      role: "Junior Analyst Programmer",
      startDate: "2024-01",
      endDate: "2025-01",
      description: "Worked developing the International Payments Mainframe applications, and learning the business logic of International Payments."
    },
    {
      company: "BNZ",
      role: "Analyst Programmer",
      startDate: "2025-01",
      endDate: "Present",
      description: "Working developing the International Payments applications in line with business requirements, and providing technical support."
    }
  ],
  projects: [
    {
      name: "Interactive Web CV",
      description: "A modern + CICS style CV built with React + Tailwind."
    },
  ],
  education: [
    {
      institution: "University of Canterbury",
      degree: "Bachelor of Computer Science",
      startDate: "2020-03",
      endDate: "2022-12"
    }
  ],
  hobbies: [
    { name: "Basketball" },
    { name: "Hip Hop Music" },
  ]
};
