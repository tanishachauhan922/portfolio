/**
 * Portfolio Data Configuration
 * Centralized data source for Tanisha Chauhan's portfolio website.
 * Update your personal URLs, usernames, and contact info here.
 */

export const personalInfo = {
  name: "Tanisha Chauhan",
  preferredName: "Tanisha",
  role: "Full-Stack Developer",
  tagline: "Building scalable web applications & solving algorithmic challenges",
  shortBio:
    "Pre-final-year Computer Science student at G.L. Bajaj Institute of Technology and Management. Passionate about Data Structures & Algorithms, full-stack web engineering, and crafting clean, reliable software. Currently expanding skills in Python.",
  aboutParagraphs: [
    "Hello! I'm Tanisha Chauhan, a pre-final-year Computer Science undergraduate at G.L. Bajaj Institute of Technology and Management with an expected graduation in 2028.",
    "My primary focus lies at the intersection of robust problem-solving and modern web engineering. I spend significant time working through Data Structures and Algorithms in C++ and building responsive, full-stack applications with React, Node.js, Express, and MongoDB.",
    "I believe in writing clean, readable code and building software that addresses real-world needs. Beyond the MERN stack, I am actively expanding my skillset with Python to explore backend tooling, scripting, and data-driven applications.",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    institution: "G.L. Bajaj Institute of Technology and Management",
    location: "Greater Noida, Uttar Pradesh, India",
    status: "Pre-final Year",
    expectedGraduation: "2028",
    highlights: [
      "Rigorous coursework in Data Structures & Algorithms, OOPs, DBMS, and OS",
      "Active participant in algorithmic problem solving and coding competitions",
      "Hands-on project development bridging theoretical CS with modern web stacks"
    ]
  },
  resumePath: "/resume.pdf", // Place your updated resume as resume.pdf in the public/ folder
};

export const contactInfo = {
  email: "tanishachauhan.dev@example.com", // REPLACE with your actual email
  emailPlaceholder: true, // Set to false once you replace with your real email
  linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME", // REPLACE with your LinkedIn URL
  linkedinPlaceholder: true,
  githubUrl: "https://github.com/YOUR_GITHUB_USERNAME", // REPLACE with your GitHub profile URL
  githubPlaceholder: true,
  leetcodeUrl: "https://leetcode.com/YOUR_LEETCODE_USERNAME", // REPLACE with your LeetCode profile URL
  leetcodePlaceholder: true,
  location: "India",
  availability: "Open to Internships & Project Collaborations",
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for algorithmic problem solving and development",
    skills: [
      { name: "C++", note: "Primary language for DSA & problem solving", level: "Proficient" },
      { name: "JavaScript (ES6+)", note: "Modern web standard, asynchronous programming", level: "Proficient" },
      { name: "Python", note: "Currently learning & building scripts", level: "Learning" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Foundational principles guiding scalable architecture",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", note: "Arrays, Trees, Graphs, DP, Sorting & Searching", level: "Core Focus" },
      { name: "Object-Oriented Programming (OOP)", note: "Encapsulation, Polymorphism, Inheritance", level: "Proficient" },
      { name: "Problem Solving", note: "Analytical reasoning & algorithmic optimization", level: "Active" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and fast user interfaces",
    skills: [
      { name: "React.js", note: "Hooks, Component Architecture, State Management", level: "Proficient" },
      { name: "Tailwind CSS", note: "Utility-first modern styling & responsiveness", level: "Proficient" },
      { name: "HTML5 & CSS3", note: "Semantic structure & accessible markup", level: "Proficient" },
      { name: "Lucide Icons & UI UX", note: "Clean visual hierarchy & micro-interactions", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Database",
    description: "Server architecture, REST APIs, and database persistence",
    skills: [
      { name: "Node.js", note: "Runtime environment for scalable server logic", level: "Proficient" },
      { name: "Express.js", note: "RESTful API routes, middleware, and controllers", level: "Proficient" },
      { name: "MongoDB", note: "NoSQL document storage, indexing, schema design", level: "Proficient" },
      { name: "RESTful APIs", note: "CRUD operations, JSON contracts, status codes", level: "Proficient" },
    ],
  },
  {
    category: "Developer Tools & Cloud",
    description: "Version control, cloud services, and build tooling",
    skills: [
      { name: "Git", note: "Version control, branching, clean commits", level: "Proficient" },
      { name: "GitHub", note: "Code collaboration, repository management", level: "Proficient" },
      { name: "Postman", note: "API endpoint testing & debugging", level: "Proficient" },
      { name: "Vite", note: "Modern fast frontend tooling", level: "Proficient" },
      { name: "Cloudinary", note: "Cloud media uploads & optimization", level: "Familiar" },
      { name: "Vercel", note: "Frontend deployment and CI/CD hosting", level: "Familiar" },
    ],
  },
];

export const projectsData = [
  {
    id: "ai-ad-generator",
    title: "AI Ad Generator",
    badge: "Full-Stack AI Project",
    tagline: "Intelligent advertising campaign & creative copy generation platform",
    description:
      "A comprehensive full-stack application that leverages Google Gemini AI to generate high-converting advertisement copy, headline variations, and marketing creative assets. Features a dedicated Express backend, MongoDB database for saving campaigns, and Cloudinary for media asset hosting.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "Cloudinary",
    ],
    features: [
      "Gemini AI integration for dynamic, multi-format advertisement copy generation",
      "Custom Node.js & Express RESTful API backend handling prompt processing securely",
      "MongoDB database to save, organize, and retrieve generated ad campaigns",
      "Cloudinary integration for managing and serving optimized visual assets",
      "Responsive, clean React user interface styled with Tailwind CSS utility classes",
    ],
    liveUrl: "https://ai-ad-generator-seven.vercel.app/",
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/ai-ad-generator",
    githubPlaceholder: true,
    accentColor: "indigo",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker / Budget Tracker",
    badge: "Frontend & Analytics",
    tagline: "Personal finance and expenditure tracking web application",
    description:
      "A practical and intuitive personal finance tracker that allows users to monitor daily income and expenses, organize spendings into custom categories, and gain visual clarity into expenditure habits through dynamic charts and reliable browser LocalStorage persistence.",
    technologies: [
      "React",
      "JavaScript",
      "LocalStorage",
      "Tailwind CSS",
      "Charts",
    ],
    features: [
      "Real-time expense and income logging with automatic balance recalculation",
      "Categorized transactions (Food, Utilities, Entertainment, Transportation, etc.)",
      "Visual chart breakdown displaying spending distributions at a glance",
      "Browser LocalStorage persistence ensuring data remains safe across browser sessions",
      "Fast transaction filtering, sorting, and seamless one-click deletion",
    ],
    liveUrl: "https://expense-tracker-pi-mauve-78.vercel.app/",
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/expense-tracker",
    githubPlaceholder: true,
    accentColor: "emerald",
  },
];

export const codingProfiles = [
  {
    id: "github",
    name: "GitHub",
    handle: "YOUR_GITHUB_USERNAME",
    placeholder: true,
    url: "https://github.com/YOUR_GITHUB_USERNAME",
    focus: "Open Source & Web Projects",
    description:
      "Explore full-stack web applications, project repositories, source code implementations, and Git version control history.",
    highlights: ["React & Node.js Projects", "Clean Modular Architecture", "Active Commits"],
    icon: "Github",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "YOUR_LEETCODE_USERNAME",
    placeholder: true,
    url: "https://leetcode.com/YOUR_LEETCODE_USERNAME",
    focus: "Data Structures & Algorithms",
    description:
      "Algorithmic problem-solving in C++, focusing on arrays, strings, recursion, dynamic programming, and computational complexity.",
    highlights: ["C++ Implementations", "Data Structures Practice", "Algorithmic Efficiency"],
    icon: "Code2",
  },
];
