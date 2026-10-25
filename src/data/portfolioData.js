/**
 * Portfolio Data Configuration
 * Centralized data source for Tanisha Chauhan's portfolio website.
 * Fully synced with Tanisha Chauhan's official resume and verified links.
 */

export const personalInfo = {
  name: "Tanisha Chauhan",
  preferredName: "Tanisha",
  role: "Full-Stack Developer",
  tagline: "Building scalable web applications & solving algorithmic challenges",
  shortBio:
    "Pre-final-year Computer Science student at G.L. Bajaj Institute of Technology and Management (SGPA: 8.755). Full-Stack Developer with hands-on experience in the MERN stack, REST APIs, and AI integrations. Solved 350+ DSA problems on LeetCode. Currently learning Python for AI & Machine Learning.",
  aboutParagraphs: [
    "Hello! I'm Tanisha Chauhan, a pre-final-year Computer Science undergraduate at G.L. Bajaj Institute of Technology and Management with an expected graduation in 2028 (SGPA: 8.755).",
    "My primary focus lies at the intersection of robust problem-solving and modern web engineering. I have solved 350+ problems on LeetCode with strong fundamentals in Data Structures and Algorithms in C++, while building and deploying full-stack web applications with React.js, Node.js, Express.js, and MongoDB.",
    "Currently learning Python to build a strong foundation in Artificial Intelligence and Machine Learning. Exploring Python fundamentals, data handling, and essential libraries to develop practical AI/ML skills and intelligent applications.",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    institution: "G.L. Bajaj Institute of Technology and Management",
    location: "Greater Noida, Uttar Pradesh, India",
    status: "Pre-final Year (2024–2028)",
    expectedGraduation: "2028",
    sgpa: "8.755",
    secondaryEducation: {
      institution: "Priyanka Modern School, Dhampur, Bijnor",
      board: "Higher Secondary Education (CBSE)",
      year: "Completed 2024",
    },
    highlights: [
      "Academic excellence in Computer Science & Engineering with an SGPA of 8.755",
      "Rigorous coursework in Data Structures & Algorithms, OOPs, DBMS, and OS",
      "Active participant in algorithmic problem solving and coding competitions",
      "Hands-on project development bridging theoretical CS with modern web stacks"
    ]
  },
  achievements: [
    {
      title: "Solved 350+ DSA Problems on LeetCode",
      description: "Consistent practice across arrays, strings, dynamic programming, trees, and algorithmic complexity optimization.",
    },
    {
      title: "Hackathon Participant",
      description: "Contributed to frontend development, UI/UX architecture, and component design in collaborative team projects.",
    },
    {
      title: "Design Member — Yuktikula Club",
      description: "Designed creative digital assets and posters for official college events and cultural festivals.",
    },
  ],
  resumePath: "/resume.pdf",
};

export const contactInfo = {
  email: "tanishachauhan922@gmail.com",
  emailPlaceholder: false,
  phone: "8630194828",
  linkedinUrl: "https://www.linkedin.com/in/tanisha-chauhan-902397331",
  linkedinPlaceholder: false,
  githubUrl: "https://github.com/tanishachauhan922",
  githubPlaceholder: false,
  leetcodeUrl: "https://leetcode.com/u/tanisha8_/",
  leetcodePlaceholder: false,
  location: "Greater Noida, Uttar Pradesh, India",
  availability: "Seeking Software Development & Full-Stack Internships",
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages used for algorithmic problem solving and development",
    skills: [
      { name: "C++", note: "Primary language for 350+ LeetCode DSA solutions", level: "Proficient" },
      { name: "JavaScript (ES6+)", note: "Modern web standard, asynchronous programming", level: "Proficient" },
      { name: "Python", note: "Currently learning for AI/ML foundations", level: "Learning" },
    ],
  },
  {
    category: "Core Computer Science",
    description: "Foundational principles guiding scalable architecture",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", note: "Arrays, Trees, Graphs, DP, Sorting & Searching", level: "Core Focus" },
      { name: "Object-Oriented Programming (OOP)", note: "Encapsulation, Polymorphism, Inheritance", level: "Proficient" },
      { name: "Problem Solving", note: "350+ problems solved on LeetCode", level: "Active" },
    ],
  },
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, and fast user interfaces",
    skills: [
      { name: "React.js", note: "Hooks, Component Architecture, State Management", level: "Proficient" },
      { name: "Tailwind CSS", note: "Utility-first modern styling & responsiveness", level: "Proficient" },
      { name: "HTML5 & CSS3", note: "Semantic structure & responsive layouts", level: "Proficient" },
      { name: "Lucide Icons & UI UX", note: "Clean visual hierarchy & micro-interactions", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Database",
    description: "Server architecture, REST APIs, and database persistence",
    skills: [
      { name: "Node.js", note: "Runtime environment for scalable server logic", level: "Proficient" },
      { name: "Express.js", note: "REST APIs, middleware, and authentication flows", level: "Proficient" },
      { name: "MongoDB & MongoDB Atlas", note: "NoSQL document storage, schemas, cloud clusters", level: "Proficient" },
      { name: "REST APIs & Auth", note: "CRUD operations, JWT authentication flows, status codes", level: "Proficient" },
    ],
  },
  {
    category: "AI & API Integration",
    description: "Integrating intelligent models and cloud media APIs",
    skills: [
      { name: "Google AI API", note: "AI-powered ad copy generation & prompt engineering", level: "Proficient" },
      { name: "Cloudflare AI", note: "Edge AI inference models and processing", level: "Familiar" },
      { name: "Magic Hour API", note: "AI video and creative asset generation", level: "Familiar" },
      { name: "Cloudinary", note: "Cloud media uploads & asset delivery optimization", level: "Proficient" },
    ],
  },
  {
    category: "Tools & Deployment",
    description: "Version control, development tooling, and cloud hosting",
    skills: [
      { name: "Git & GitHub", note: "Version control, branching, clean commits", level: "Proficient" },
      { name: "VS Code", note: "Primary IDE & development workflow", level: "Proficient" },
      { name: "Vercel", note: "Frontend deployment and CI/CD hosting", level: "Proficient" },
      { name: "Render", note: "Cloud backend hosting & web service deployments", level: "Proficient" },
      { name: "Vite", note: "Modern fast frontend bundling", level: "Proficient" },
    ],
  },
];

export const projectsData = [
  {
    id: "ai-ad-generator",
    title: "AI Ad Generator — AI Advertisement Creative Studio",
    badge: "Full-Stack AI Platform",
    tagline: "AI-powered web application for customized advertising creatives",
    description:
      "AI Ad Generator is an AI-powered web application that helps users create customized advertising creatives with minimal effort. Users can generate ad content and visuals based on their product, target audience, language, and preferred social media format. Built using React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Cloudinary, it simplifies the ad creation process and helps users create engaging promotional content.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google AI API",
      "Cloudflare AI",
      "Magic Hour API",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    features: [
      "Built and deployed a full-stack platform for creating AI-generated image and video ad creatives with customizable formats, platforms, languages, and visual styles.",
      "Implemented user authentication, reusable customizable templates, project management, an AI critic feature, and a dashboard for user activity.",
      "Integrated AI and third-party APIs (Cloudflare AI, Magic Hour API) to generate ad copy, headlines, descriptions, and creative prompts from user-defined campaign requirements.",
      "Troubleshot API limits and frontend–backend integration issues; stored media in Cloudinary and application data in MongoDB Atlas.",
      "Deployed the frontend on Vercel and the backend on Render as separate services.",
    ],
    liveUrl: "https://ai-ad-generator-seven.vercel.app/",
    githubUrl: "https://github.com/tanishachauhan922/AI-AD-Generator",
    githubPlaceholder: false,
    accentColor: "indigo",
  },
  {
    id: "expense-tracker",
    title: "Budget Tracker App",
    badge: "Frontend & Analytics",
    tagline: "Responsive expense and budget tracker with dynamic spending insights",
    description:
      "A responsive expense tracker web application built to record daily expenses using custom categories, visualize spending through interactive charts, set budget limits with alerts, and reliably persist transaction data in browser local storage.",
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3 / Tailwind CSS",
      "LocalStorage",
      "Interactive Charts",
      "Vercel",
    ],
    features: [
      "Developed a responsive expense tracker to record daily expenses using custom categories.",
      "Built interactive charts for spending analysis and monthly insights.",
      "Implemented budget limits, spending alerts, and an intuitive user dashboard.",
      "Persisted all transaction and budget data safely in browser local storage for instant retrieval without external server latency.",
      "Clean, distraction-free UI optimized for mobile, tablet, and desktop views.",
    ],
    liveUrl: "https://expense-tracker-pi-mauve-78.vercel.app/",
    githubUrl: "https://github.com/tanishachauhan922/Expense-Tracker",
    githubPlaceholder: false,
    accentColor: "emerald",
  },
];

export const codingProfiles = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "tanisha8_",
    placeholder: false,
    url: "https://leetcode.com/u/tanisha8_/",
    focus: "Data Structures & Algorithms",
    description:
      "Active problem solver with 350+ Data Structures and Algorithms problems solved in C++, focusing on arrays, strings, dynamic programming, trees, and computational complexity.",
    highlights: ["350+ Solved Problems", "C++ Implementation", "Algorithmic Efficiency"],
    icon: "Code2",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "tanishachauhan922",
    placeholder: false,
    url: "https://github.com/tanishachauhan922",
    focus: "Open Source & Full-Stack Projects",
    description:
      "Full-stack web applications, AI platforms, and frontend projects showcasing clean component architecture, REST APIs, and version control best practices.",
    highlights: ["AI Ad Generator", "Budget Tracker App", "Clean Modular Code"],
    icon: "Github",
  },
];
