const header = {
  homepage: "https://shakyanandk.github.io",
  title: "SK.",
};

const about = {
  name: "Shakyanand Kamble",
  role: "Senior Software Developer",
  description:
    "Experienced software engineer with {highlight:8 years} of delivering enterprise-grade applications across consumer and core banking domains, with additional expertise in Supply Chain Management. Proven track record in driving complex projects to successful completion while ensuring business objectives are met.",
  location: "Available for Remote & On-site Opportunities",
  resume:
    "https://drive.google.com/file/d/1-xpEYbi_2ujnc3S6VoRuKVSUbecYnxE-/view?usp=drive_link",
  social: {
    linkedin: "https://www.linkedin.com/in/shakyanand-kamble-63b01593/",
    github: "https://github.com/shakyanandk",
  },
};

const projects = [
  {
    name: "Sales Management App",
    description:
      "Sales management app for healthcare professionals to manage their visits and sells to retails stores. It included various features such as leave approvals based on the roles",
    stack: ["React Native", "JavaScript", "MySQL"],
    sourceCode: "https://github.com/shakyanandk/salesproject",
    category: "Mobile App",
  },
  {
    name: "Vehicle Service App",
    description:
      "Car service app for managing the servicing of the vehicles. This included scanning the VIN of the vehicles and submitting the evidences to the service center for assesment of the repairs",
    stack: ["React Native", "TypeScript", "SQLite"],
    sourceCode: "https://github.com/harshrajk/rntextdetect",
    category: "Mobile App",
  },
  {
    name: "ULS Order Management App",
    description:
      "An order management app for a healthcare client to provide their products to retail and stockist providers. It included incentives and coupon redemptions based on the order history",
    stack: ["React Native", "TypeScript", "SQLite"],
    sourceCode: "https://github.com/shakyanandk/ulsapp",
    category: "Mobile App",
  },
  {
    name: "MovieStock App",
    description:
      "An app to display your favourite movies, shows, people. All in one place",
    stack: ["React Native", "TypeScript", "API"],
    sourceCode: "https://github.com/shakyanandk/MovieStock",
    category: "Mobile App",
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services Training and Certification",
    link: "https://www.credly.com/badges/ada38385-9a50-48d0-9b73-b202df7ba3da/linked_in_profile",
    skills: ["AWS", "Cloud Architecture", "Solutions Design"],
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services Training and Certification",
    link: "https://www.credly.com/badges/75f2fb05-9b12-47ed-a37d-694dde25ca5c/linked_in_profile",
    skills: ["AWS", "Cloud Computing", "DevOps"],
  },
  {
    name: "Oracle Cloud Infrastructure Foundations 2020 Certified Associate",
    issuer: "Oracle",
    link: "https://www.youracclaim.com/badges/3e756bee-22b0-4e65-b879-cd5fd740bee1?source=linked_in_profile",
    skills: ["Oracle Cloud", "Infrastructure", "Database"],
  },
  {
    name: "Javascript",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/08a4d8bb640b",
    skills: ["JavaScript", "Programming", "Problem Solving"],
  },
  {
    name: "React",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/f7c3905e1069",
    skills: ["React", "Frontend", "Component Development"],
  },
  {
    name: "Flutter",
    issuer: "Udemy",
    link: "http://ude.my/UC-e4aba48d-e41e-4545-81ae-8df71dfa853f",
    skills: ["Flutter", "Mobile Development", "Dart"],
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Angular",
      "Vue",
      "HTML",
      "CSS",
    ],
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Backend Development",
    skills: ["Java", "ASP.NET", "PL/SQL", "Oracle", "RESTful APIs"],
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter"],
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    title: "Testing & Tools",
    skills: [
      "Jest",
      "Enzyme",
      "Vitest",
      "Karma",
      "Git",
      "CI/CD",
      "Agile Methodology",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Oracle Cloud", "Docker", "Jenkins", "Microservices"],
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Copilot", "Claude"],
    color: "from-orange-500 to-red-600",
  },
];

const experience = [
  {
    title: "Senior Software Developer",
    company: "ThinkNext Software Solutions",
    duration: "June 2025 - Present",
    description:
      "Developing scalable front-end applications for a dynamic e-commerce platform, focusing on performance, accessibility, and seamless integration with ASP.NET backend.",
    achievements: [
      "Developed and maintained 20+ modular, reusable Vue JS components using TypeScript, improving developer productivity by 30%",
      "Optimized front-end performance, reducing initial page load time by 25%",
      "Integrated secure RESTful APIs with the ASP.NET backend, enhancing transaction speed and reliability for multiple active users",
      "Collaborated with cross-functional teams using JIRA to design, track, and deliver new product features within Agile sprints",
    ],
  },
  {
    title: "Senior Consultant",
    company: "EY",
    duration: "April 2021 - May 2025",
    description:
      "Delivered high-impact full-stack and UI development solutions for cross-border payments, banking, and manufacturing clients in Agile environments.",
    achievements: [
      "Built a payment remediation tool using Vue JS and Pinia, improving payment partner efficiency by 20% for B2B portal users",
      "Developed Oracle PL/SQL procedures supporting BY SCM software, reducing data processing latency by 35%",
      "Built Vue JS dashboards for SCM and order tracking, increasing operational visibility across 10+ business units",
      "Enhanced net banking applications for a U.S. investment bank, improving onboarding completion rate by 15% through optimized workflows",
      "Worked across diverse stacks including Vue JS, React JS, Angular JS, TypeScript, Next.js, GraphQL, Java Spring Boot, and ASP.NET",
    ],
  },
  {
    title: "Staff Consultant",
    company: "Oracle",
    duration: "Sep 2017 - March 2021",
    description:
      "Developed FLEXCUBE Core Banking product customizations and provided end-to-end implementation, migration, and production support for global banking clients.",
    achievements: [
      "Delivered 30+ FLEXCUBE customizations from requirements gathering through deployment, reducing client onboarding timelines by 20%",
      "Designed and developed client-facing functional screens, improving banking customer usability scores by 15%",
      "Played a key role in upgrade migration projects, ensuring 100% data accuracy across multiple European banking clients",
      "Provided critical production support during Go-Live in Athens, Greece, ensuring smooth launch with zero major incidents",
      "Worked extensively with Java, PL/SQL, Spring Boot, Microservices, OJET, and Knockout JS",
    ],
  },
];

const contact = {
  email: "shakyanandkamble@gmail.com",
  intro: "Ready to bring your next project to life?",
  description: "Let's discuss how I can help you achieve your goals.",
  location: "Rolling Meadows, IL, USA",
};

const navigation = {
  items: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ],
};

const sections = {
  projects: {
    title: "Featured Projects",
    subtitle: "A showcase of my recent work and personal projects",
  },
  skills: {
    title: "Skills & Technologies",
    subtitle: "Technologies I work with and expertise I bring to every project",
    experience:
      "{highlight:8+ years} of professional experience delivering scalable solutions",
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey in software development and key achievements",
  },
  contact: {
    title: "Let's Work Together",
    subtitle: "Ready to bring your next project to life?",
  },
};

export {
  header,
  about,
  projects,
  skillCategories as skills,
  contact,
  certifications,
  experience,
  navigation,
  sections,
};
