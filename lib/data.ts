export const profile = {
  name: "Wilhelm Gusztav Francia",
  initials: "WF",
  title: "Project / Product Manager",
  location: "Manila, Philippines",
  phone: "+63 917 308 9040",
  email: "gusztavfrancia97@gmail.com",
  linkedin: "https://www.linkedin.com/in/wilhelm-gusztav-francia",
  linkedinLabel: "linkedin.com/in/wilhelm-gusztav-francia",
  tagline: "I turn business objectives into roadmaps engineers actually want to build.",
  summary:
    "Project & Product Manager with 5+ years of experience translating business objectives into roadmaps and driving cross-functional execution across platform, infrastructure, and operations. Proven at facilitating planning workshops, mentoring delivery leaders, and presenting KPIs to C-level executives to enable strategic decision-making. Strong technical foundation bridging product strategy and engineering execution. Fluent in English and Filipino.",
  competencies: [
    "Strategy Execution & Roadmap Framing",
    "Cross-functional Leadership",
    "Process Improvement & Change Management",
    "Infrastructure, Security & Tooling Strategy",
    "Platform, Marketplace & Systems Architecture",
    "Agile Execution, Roadmaps & OKRs",
  ],
};

export const highlights = [
  {
    metric: "30%",
    label: "Delivery predictability improved",
    detail:
      "Owned program execution across 10+ engineers, designers, and PMs at Symbols using WIP limits, unified tracking, and release milestones.",
  },
  {
    metric: "50%",
    label: "Operational throughput gain in 3 weeks",
    detail:
      "Drove change management and workflow redesign at SERVPRO through process mapping, bottleneck analysis, and targeted automation.",
  },
  {
    metric: "4",
    label: "Enterprise storefronts, millions of users",
    detail:
      "Led technical execution for Saks Fifth Avenue, Saks Off 5th, Vari, and Berkshire Hathaway — including Apple Pay and BOPIS rollouts.",
  },
  {
    metric: "100+",
    label: "Users across a full tech migration",
    detail:
      "Managed end-to-end technology programs — vendor selection, procurement, configuration, data migration — for field and office operations.",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  companyBlurb: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Project Manager",
    company: "Symbols",
    companyBlurb: "No-code UI kit platform for designers and editors",
    location: "Portland, U.S.A.",
    period: "August 2025 – Present",
    bullets: [
      "Translated leadership priorities into multi-quarter delivery roadmaps, aligning product, engineering, and QA on strategic outcomes and execution plans.",
      "Facilitated cross-functional planning, prioritization, and delivery governance workshops to align stakeholders on scope, sequencing, and tradeoffs.",
      "Owned program execution across 10+ engineers, designers, and PMs; improved delivery predictability by 30% through WIP limits, unified tracking, and release milestones.",
      "Defined and presented executive KPIs (delivery predictability, cycle time, release stability, defect trends, capacity utilization) to C-level stakeholders to inform prioritization and investment tradeoffs.",
      "Mentored PMs and engineers on best practices, risk management, and quality standards; led continuous improvement workshops to remove bottlenecks and standardize workflows.",
    ],
  },
  {
    role: "Project Manager and Software Manager",
    company: "SERVPRO",
    companyBlurb: "Company focused on reconstruction in disaster response",
    location: "Portland, U.S.A.",
    period: "August 2024 – May 2025",
    bullets: [
      "Led operational strategy execution by framing system implementation roadmaps and facilitating cross-department planning workshops.",
      "Drove change management and workflow redesign through process mapping, bottleneck analysis, and targeted automation; improved operational throughput by 50% in 3 weeks.",
      "Managed end-to-end technology programs (vendor selection, procurement, configuration, data migration) for 100+ users across field and office operations.",
      "Built and presented executive dashboards and KPIs to leadership, improving visibility into risks, progress, and resourcing needs.",
    ],
  },
  {
    role: "Digital Commerce Engineer & Team Lead",
    company: "ITG Software Inc.",
    companyBlurb: "Company focused on web development",
    location: "Birmingham, U.S.A.",
    period: "February 2020 – November 2022",
    bullets: [
      "Led technical execution for enterprise e-commerce platforms, including Saks Fifth Avenue, Saks Off 5th, Vari, and Berkshire Hathaway, aligning product strategy with engineering delivery.",
      "Facilitated release planning and cross-team coordination; ensured high availability during peak traffic and promotions for platforms serving millions of users.",
      "Led implementation of Apple Pay and Buy Online, Pick Up In Store (BOPIS) solutions across multiple enterprise storefronts.",
      "Ran performance audits using Salesforce Commerce Cloud tools and Google Lighthouse, improving page speed and reliability.",
      "Served as technical lead bridging product requirements and engineering execution, mentoring developers and aligning delivery with business priorities.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Blue Cross and Blue Shield of Alabama",
    companyBlurb: "Largest benefits provider in the state of Alabama",
    location: "Hoover, U.S.A.",
    period: "August 2019 – December 2019",
    bullets: [
      "Contributed within Scrum sprints, backlog grooming, and sprint planning cycles, supporting regulated healthcare platform releases.",
      "Assisted in project coordination and delivery for the myBlueCross portal serving statewide users.",
      "Improved sprint predictability by applying story point estimation and retrospective-driven process improvements.",
    ],
  },
];

export const skills = {
  Languages: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML", "CSS", "SCSS"],
  "Frameworks & Tech": ["React", "Salesforce Commerce Cloud", "MPI", "OpenGL"],
  "Platforms & Tools": ["Git", "GitHub", "Jira", "Figma", "VS Code", "Google Workspace"],
  "Payments & Commerce": ["Apple Pay", "BOPIS", "Enterprise E-commerce Platforms"],
  "Systems & Ops": ["Linux", "Ubuntu", "Apple Business Manager", "MDM/RMM"],
};

export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  period: string;
  detail: string;
};

export const education: EducationEntry[] = [
  {
    degree: "M.Eng, Computer Science",
    school: "Oregon State University",
    location: "Corvallis, U.S.A.",
    period: "September 2022 – June 2024",
    detail: "Summa Cum Laude, CGPA 3.93",
  },
  {
    degree: "BS, Computer Science",
    school: "Jacksonville State University",
    location: "Jacksonville, U.S.A.",
    period: "August 2015 – December 2019",
    detail: "Magna Cum Laude, CGPA 3.8",
  },
];

export const certifications = [
  {
    name: "Google Project Management Professional Certificate",
    issuer: "Coursera",
    detail: "Agile delivery, stakeholder management, risk planning, roadmapping, KPI-driven execution",
  },
];
