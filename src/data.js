export const profile = {
  name: 'Kamlesh Chandel',
  roles: ['Junior Frontend Engineer', 'React & Next.js Developer', 'MERN Stack Developer'],
  tagline:
    "I build production frontend and backend features for live SaaS products — currently at Spark Eighteen, working across React, Next.js, and Supabase/PostgreSQL.",
  email: 'kamleshchandel17@gmail.com',
  phone: '+91 9302383846',
  linkedin: 'https://linkedin.com/in/kamleshchandel',
  github: 'https://github.com/Kamlesh1704',
  resume: '/resume_kamlesh_chandel.pdf',
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Junior Frontend Engineer at Spark Eighteen, building real, shipped features for live products — not tutorials. Day to day that means React and Next.js on the client, Supabase/PostgreSQL (queries, row-level security, migrations) on the backend, and reusable UI systems built with Tailwind CSS and Radix UI/shadcn.",
    "I care about writing UI that holds up under real usage: data tables, dashboards, audit logs, multi-step forms — the unglamorous parts of a product that recruiters rarely see screenshots of but that make software actually usable.",
    "Outside of work, I'm sharpening backend and system design fundamentals and contributing frontend + AI-pipeline work to a side project, Code Reviewer, with a small team.",
  ],
}

export const experience = [
  {
    role: 'Junior Frontend Engineer',
    company: 'Spark Eighteen',
    duration: "Apr '26 – Present",
    location: 'Udaipur · On-site · Full-time',
    current: true,
    bullets: [
      'Build frontend and backend features for The Capital Room (thecapitalroom.co), a live investor–founder matchmaking SaaS platform — React on the client, Supabase/PostgreSQL (queries, row-level security policies, schema migrations) on the backend.',
      'Built customer storefront features for The Islands (theislands.shop), a live multi-tenant e-commerce platform (Next.js, TypeScript) — one codebase serving multiple independent stores via dynamic store routing and custom domains — plus its separate Vite/TypeScript admin dashboard for managing stores, products, and orders across tenants.',
      'Develop reusable UI components and full page flows (data tables, dashboards, audit logs, multi-step forms) with Tailwind CSS, Radix UI/shadcn, and React Query.',
    ],
  },
  {
    role: 'React.js Intern',
    company: 'GKM IT Pvt Ltd',
    duration: "Sept '25 – Mar '26",
    bullets: [
      'Developed modern, responsive web applications by translating frontend concepts into real-world projects using HTML, CSS, JavaScript, and React.js.',
      'Collaborated in a structured, milestone-driven development process, building reusable UI components, integrating APIs, and improving performance and accessibility.',
    ],
  },
  {
    role: 'Frontend Software Developer Intern',
    company: 'Cowhite Software Pvt Ltd',
    duration: "Feb '25 – July '25",
    bullets: [
      'Developed responsive React.js user interfaces using modern JavaScript (ES6+) across multiple applications.',
      'Implemented responsive design and optimized UI components, collaborating with backend engineers to integrate RESTful APIs for efficient data flow.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'GoSwiftPE Technologies Pvt Ltd',
    duration: "July '24 – Jan '25",
    bullets: [
      'Led full-stack MERN development for a cross-border payments platform, building scalable web applications.',
      'Designed user interfaces and implemented Node.js/Express backend services, collaborating with founders to optimize code and deliver technical solutions for complex requirements.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'IBM SkillBuild Summer Internship Program (Virtual)',
    duration: "June '24 – Aug '24",
    bullets: [
      'Completed a 6-week virtual internship focused on frontend development using HTML, CSS, JavaScript, and React.js, working on projects related to responsive web design and dynamic functionality.',
    ],
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript (ES6+)',
      'React.js', 'Next.js', 'React Query (TanStack Query)', 'Zod', 'Radix UI / shadcn/ui',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js', 'Express.js', 'RESTful APIs', 'API Integration', 'Authentication',
      'Supabase Edge Functions', 'Row-Level Security & Migrations',
    ],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQLite', 'Supabase', 'PostgreSQL'],
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C', 'C++'],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git', 'GitHub', 'Redux', 'Zustand', 'Vercel', 'Render', 'Postman',
      'Browser DevTools', 'Vite', 'Vitest', 'ESLint', 'Prettier', 'Husky',
    ],
  },
  {
    category: 'Core',
    items: ['Data Structures & Algorithms', 'Problem Solving', 'System Design Fundamentals'],
  },
]

export const projects = [
  {
    title: 'Code Reviewer',
    subtitle: 'AI-Powered PR Review Platform · Team project (3 members)',
    duration: "May '26 – Present",
    description:
      'Multi-tenant SaaS platform that automatically reviews GitHub pull requests using AI. Built the entire frontend and the AI review pipeline.',
    bullets: [
      'Built the entire frontend (React, Vite, Tailwind CSS, TanStack Query/Table, React Router).',
      'Implemented the AI review pipeline — GitHub webhook-triggered diff extraction and OpenAI function-calling integration returning structured, categorized inline review comments (bug/security/performance/style) with live progress logs.',
      'Built admin tenant management (account suspension, platform-wide stats) and team management (member invites, role-based access).',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query/Table', 'React Router', 'OpenAI API'],
    image: null,
    link: null,
    linkLabel: 'not live yet',
  },
  {
    title: 'MERN Job Portal App',
    subtitle: 'Full-stack job search platform',
    duration: "Sept '25",
    description:
      'Full-stack job portal with role-based authentication for users and admins — job search, filtering, saving, applying, and real-time application status tracking.',
    bullets: [
      'Role-based authentication for users and admins.',
      'Job search, filtering, saving, applying, and real-time application status tracking.',
      'Admin functionalities: company registration and management, job posting/editing, and applicant review with accept/reject workflows.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: null,
    link: 'https://mern-job-portal-app.vercel.app/',
    linkLabel: 'Live demo',
  },
  {
    title: 'MERN Instagram Clone',
    subtitle: 'Full-stack social media app',
    duration: "Apr '24",
    description:
      'MERN Instagram clone with authentication, profile management, and CRUD operations.',
    bullets: [
      'Authentication, profile management, and CRUD operations.',
      'Follower/following system for personalized feeds.',
      'Like, unlike & commenting features.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: '/img/insta.jpeg',
    link: 'https://insta-clonee-kc.vercel.app/signup',
    linkLabel: 'Live demo',
  },
  {
    title: 'Nxt Watch',
    subtitle: 'YouTube-style video platform',
    duration: "Apr '24",
    description:
      'A YouTube alternative with login, trending, gaming, and video search features, JWT-secured auth and theme customization.',
    bullets: [
      'Login, trending, gaming, and video search features.',
      'JWT tokens for secure authentication.',
      'Light/dark theme customization.',
    ],
    stack: ['React.js', 'JWT'],
    image: '/img/nxt-watch.jpeg',
    link: 'https://nxtwatchkc.ccbp.tech/login',
    linkLabel: 'Live demo',
    demoCreds: 'Username: rahul · Password: rahul@2021',
  },
  {
    title: 'Nxt Trendz',
    subtitle: 'E-commerce platform',
    duration: "Apr '24",
    description:
      'An Amazon/Flipkart-style e-commerce clone where users can browse and filter products, with secure login, search, and cart functionality.',
    bullets: [
      'Product browsing, filtering, and search.',
      'Secure login and cart functionality.',
    ],
    stack: ['React.js'],
    image: '/img/e-commerce.jpeg',
    link: 'https://kcnxttrendz.ccbp.tech/login',
    linkLabel: 'Live demo',
    demoCreds: 'Username: rahul · Password: rahul@2021',
  },
]

export const education = [
  {
    school: 'Nxtwave Disruptive Technologies',
    detail: 'Industry Ready Certification in Full-stack Development',
    duration: 'Apr 2023 – ongoing',
  },
  {
    school: 'Geetanjali Institute of Technical Studies',
    detail: 'B.Tech. in Computer Science Engineering (CSE) · CGPA: 8.3',
    duration: '2022 – 2026',
  },
  {
    school: 'Kendriya Vidyalaya No. 1, Neemuch (M.P.)',
    detail: 'Intermediate · 77.0%',
    duration: '2020 – 2022',
  },
  {
    school: 'Springwood School, Neemuch (M.P.)',
    detail: 'Secondary School Certificate · 81.0%',
    duration: '2019 – 2020',
  },
]
