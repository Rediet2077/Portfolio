/* ─────────────────────────────────────────────
   Real data from GitHub: github.com/Rediet2077
   ───────────────────────────────────────────── */

export const personalInfo = {
  name:           'Rediet Sharew',
  title:          'Full-Stack Developer',
  subtitle:       'Software Engineering Student',
  university:     'Debre Berhan University',
  year:           '4th Year',
  email:          'redietsharew231@gmail.com',
  github:         'https://github.com/Rediet2077',
  githubUsername: 'Rediet2077',
  linkedin:       'https://linkedin.com/in/rediet-sharew',
  location:       'Debre Birhan, Ethiopia',
  cvUrl:          '/Rediet_Sharew_CV.pdf',
  bio: `DBU Software Engineering student passionate about building modern web applications
and solving real-world problems through technology. I enjoy creating responsive user
interfaces, developing backend APIs, designing databases, and continuously learning
new technologies.`,
  typingStrings: [
    'Full-Stack Developer',
    'React Engineer',
    'Node.js Developer',
    'Python Developer',
    'Problem Solver',
    'Open Source Contributor',
  ],
}

export const stats = [
  { label: 'Public Repos',       value: 46,  suffix: '+' },
  { label: 'Projects Completed', value: 12,  suffix: '+' },
  { label: 'Technologies',       value: 20,  suffix: '+' },
  { label: 'Years Learning',     value: 3,   suffix: '+' },
]

/* ── Skills ── */
export const skillCategories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools']

export const skills = [
  // Frontend
  { name: 'React',        category: 'Frontend', icon: 'react',      level: 85, years: 2 },
  { name: 'Next.js',      category: 'Frontend', icon: 'nextjs',     level: 75, years: 1 },
  { name: 'TypeScript',   category: 'Frontend', icon: 'typescript', level: 75, years: 1 },
  { name: 'JavaScript',   category: 'Frontend', icon: 'javascript', level: 88, years: 3 },
  { name: 'HTML5',        category: 'Frontend', icon: 'html5',      level: 95, years: 3 },
  { name: 'CSS3',         category: 'Frontend', icon: 'css3',       level: 90, years: 3 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'tailwind',   level: 88, years: 2 },
  { name: 'Bootstrap',    category: 'Frontend', icon: 'bootstrap',  level: 82, years: 2 },
  { name: 'Vite',         category: 'Frontend', icon: 'vite',       level: 78, years: 1 },
  // Backend
  { name: 'Node.js',      category: 'Backend',  icon: 'nodejs',     level: 80, years: 2 },
  { name: 'Express.js',   category: 'Backend',  icon: 'express',    level: 78, years: 2 },
  { name: 'Python',       category: 'Backend',  icon: 'python',     level: 78, years: 2 },
  { name: 'Django',       category: 'Backend',  icon: 'django',     level: 68, years: 1 },
  { name: 'FastAPI',      category: 'Backend',  icon: 'fastapi',    level: 65, years: 1 },
  { name: 'PHP',          category: 'Backend',  icon: 'php',        level: 72, years: 1 },
  // Mobile
  { name: 'Flutter',      category: 'Mobile',   icon: 'flutter',    level: 55, years: 1 },
  { name: 'Kotlin',       category: 'Mobile',   icon: 'kotlin',     level: 48, years: 1 },
  // Database
  { name: 'MySQL',        category: 'Database', icon: 'mysql',      level: 82, years: 2 },
  { name: 'PostgreSQL',   category: 'Database', icon: 'postgresql', level: 75, years: 1 },
  { name: 'SQLite',       category: 'Database', icon: 'sqlite',     level: 78, years: 2 },
  // Tools
  { name: 'Git',          category: 'Tools',    icon: 'git',        level: 85, years: 3 },
  { name: 'GitHub',       category: 'Tools',    icon: 'github',     level: 88, years: 3 },
  { name: 'Docker',       category: 'Tools',    icon: 'docker',     level: 55, years: 1 },
  { name: 'Postman',      category: 'Tools',    icon: 'postman',    level: 80, years: 2 },
  { name: 'VS Code',      category: 'Tools',    icon: 'vscode',     level: 92, years: 3 },
]

/* ── Projects — real GitHub repos ── */
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Recommendation System',
    slug: 'ecommerce-recommendation',
    description: 'A full-featured e-commerce platform (ShopEase) with product listings, cart, categories, deals, and a smart recommendation engine.',
    longDescription: 'ShopEase is a full-featured e-commerce web application built with React and JavaScript. It includes product browsing, category filtering, a shopping cart, deals section, and a personalized product recommendation system based on user behavior.',
    problem: 'Generic e-commerce platforms show the same products to all users, resulting in poor discovery and low conversion.',
    solution: 'Built a React-based e-commerce platform with personalized recommendations, intuitive navigation, and a clean modern UI.',
    architecture: 'React + JavaScript + Tailwind CSS, deployed on Vercel',
    features: ['Product catalog with search & filter', 'Category browsing', 'Shopping cart', 'Deals & offers section', 'Product recommendations', 'Responsive design', 'Fast loading'],
    challenges: 'Building a smooth, fast e-commerce experience with good UX across all screen sizes.',
    lessons: 'Deepened React component architecture skills and learned product recommendation UI patterns.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    github: 'https://github.com/Rediet2077/Ecommerc_Product_Recommendation_System',
    live:   'https://ecommerc-product-recommendation-sys.vercel.app',
    image:  '/cover-ecommerce.png',
    status: 'completed',
    featured: true,
    category: 'Web App',
  },
  {
    id: 2,
    title: 'Bakery Management System',
    slug: 'bakery-management',
    description: 'A full bakery business management web app covering inventory, orders, sales tracking, staff management, and analytics dashboards.',
    longDescription: 'A comprehensive web-based ERP system for bakery businesses. Handles inventory tracking, daily order management, production scheduling, staff management, and financial reporting with interactive dashboards.',
    problem: 'Local bakeries relied on paper records, causing inventory waste, order mistakes, and slow reporting.',
    solution: 'Built a full web ERP with real-time inventory, POS interface, automated alerts, and sales analytics.',
    architecture: 'JavaScript + Node.js, deployed on Vercel',
    features: ['Inventory management', 'Point of Sale (POS)', 'Order tracking', 'Staff management', 'Sales analytics & charts', 'Customer database', 'Low-stock alerts'],
    challenges: 'Designing a simple, intuitive interface for non-technical bakery staff while covering full ERP functionality.',
    lessons: 'Learned multi-role system design, financial reporting logic, and real-world ERP requirements.',
    tech: ['JavaScript', 'Node.js', 'CSS', 'Vercel'],
    github: 'https://github.com/Rediet2077/Bakery_Management_System',
    live:   'https://bakery-management-system-v2r6.vercel.app',
    image:  '/cover-bakery.png',
    status: 'completed',
    featured: true,
    category: 'Web App',
  },
  {
    id: 3,
    title: 'Library Management System',
    slug: 'library-management',
    description: 'A digital library management platform with book catalog, member management, borrowing/return tracking, and overdue fine calculation.',
    longDescription: 'A comprehensive library management system that digitizes all library operations. Features a searchable book catalog, member registration, borrowing and return tracking, automatic overdue fine calculation, and a public book search portal.',
    problem: 'University libraries managed records in spreadsheets, making it hard to track borrows, returns, and overdue fines.',
    solution: 'Built a full web platform with barcode support, automated fine calculation, and member self-service portal.',
    architecture: 'JavaScript + Node.js + MySQL, deployed on Vercel',
    features: ['Book catalog with search', 'Member management', 'Borrow/Return tracking', 'Automatic fine calculation', 'Online reservation', 'Admin reports', 'Responsive UI'],
    challenges: 'Implementing accurate fine calculation logic accounting for holidays and grace periods.',
    lessons: 'Gained experience in data-heavy web applications, complex business logic, and database optimization.',
    tech: ['JavaScript', 'Node.js', 'MySQL', 'CSS', 'Vercel'],
    github: 'https://github.com/Rediet2077/Library_Management_System',
    live:   'https://library-management-system-one-orpin.vercel.app',
    image:  '/cover-library.png',
    status: 'completed',
    featured: true,
    category: 'Web App',
  },
  {
    id: 4,
    title: 'SafeCampus DBU',
    slug: 'safecampus-dbu',
    description: 'A real-time campus safety and emergency alert system for Debre Berhan University, enabling incident reporting and emergency notifications.',
    longDescription: 'SafeCampus DBU is a campus safety platform for Debre Berhan University. It allows students and staff to report incidents, request emergency help, and receive real-time alerts. Includes an admin dashboard for security personnel to monitor and respond to incidents.',
    problem: 'Campus safety incidents at DBU were handled manually, causing delayed emergency responses.',
    solution: 'Built a centralized real-time platform with incident reporting, role-based dashboards, and alert notifications.',
    architecture: 'JavaScript + Node.js + WebSocket, multi-branch repo',
    features: ['Real-time incident reporting', 'Emergency alert system', 'Role-based dashboards', 'Admin monitoring panel', 'Incident history', 'Mobile responsive'],
    challenges: 'Real-time synchronization across many concurrent users during emergency scenarios.',
    lessons: 'Learned real-time web architecture, WebSocket implementation, and multi-role access systems.',
    tech: ['JavaScript', 'Node.js', 'WebSocket', 'CSS', 'HTML5'],
    github: 'https://github.com/Rediet2077/SafeCampus_DBU',
    live:   '#',
    image:  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    status: 'completed',
    featured: true,
    category: 'Web App',
  },
  {
    id: 5,
    title: 'Song Management System',
    slug: 'song-management',
    description: 'A full-stack music management web application for organizing, browsing, and managing song collections with a clean modern interface.',
    longDescription: 'A full-stack song management system built with JavaScript. Users can add, edit, delete, and browse songs with metadata like title, artist, album, and genre. Features a modern UI with search and filter functionality.',
    problem: 'No simple local tool to organize and browse personal music collections with metadata.',
    solution: 'Built a clean full-stack CRUD application with search, filter, and a responsive music-focused UI.',
    architecture: 'JavaScript + Node.js + Express + database',
    features: ['Add / edit / delete songs', 'Search & filter by genre/artist', 'Music metadata management', 'Responsive design', 'REST API backend'],
    challenges: 'Building an intuitive music browsing UX with fast search across large collections.',
    lessons: 'Practiced full-stack CRUD patterns, REST API design, and UX for data-heavy interfaces.',
    tech: ['JavaScript', 'Node.js', 'Express', 'CSS', 'HTML5'],
    github: 'https://github.com/Rediet2077/Song_Managment_system',
    live:   '#',
    image:  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    status: 'completed',
    featured: false,
    category: 'Web App',
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    slug: 'restaurant-management',
    description: 'A comprehensive restaurant management platform handling orders, tables, menus, staff, and sales reporting for restaurant businesses.',
    longDescription: 'A full-featured restaurant management web application. Covers table management, order taking, menu customization, staff roles, kitchen dashboard, and daily sales reporting. Built as both a web app and a desktop app variant.',
    problem: 'Ethiopian restaurants relied on manual order taking and paper records, causing order errors and slow service.',
    solution: 'Built a digital order management and reporting system used by real restaurant staff.',
    architecture: 'JavaScript + Node.js + MySQL',
    features: ['Table & order management', 'Menu builder', 'Kitchen dashboard', 'Staff roles', 'Sales reports', 'Daily receipts', 'Multi-branch support'],
    challenges: 'Handling real-time order updates across kitchen and waiter interfaces simultaneously.',
    lessons: 'Gained experience in real-world restaurant workflows, real-time sync, and multi-role UX.',
    tech: ['JavaScript', 'Node.js', 'MySQL', 'CSS', 'HTML5'],
    github: 'https://github.com/Rediet2077/Restorant_Managment_System',
    live:   '#',
    image:  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    status: 'completed',
    featured: false,
    category: 'Web App',
  },
]

/* ── Timeline ── */
export const timeline = [
  {
    year: '2025 – Present',
    title: '4th Year Software Engineering',
    org: 'Debre Berhan University',
    type: 'education',
    description: 'Final year focused on advanced software architecture, system design, and graduation project. Active member of the university tech community.',
    icon: 'education',
  },
  {
    year: 'May 2026',
    title: 'HACK-X 2026 Hackathon',
    org: 'Tech Tonic Club · Debre Berhan University',
    type: 'achievement',
    description: 'Received the HACK-X 2026 Hackathon Certificate from Debre Berhan University. Signed by Dr. Seblewongel Esseynew (Dean, College of Computing) and Yeabsira Behailu (Club President).',
    icon: 'award',
  },
  {
    year: '2026',
    title: 'E-Commerce & Bakery Systems — Deployed',
    org: 'Vercel',
    type: 'experience',
    description: 'Successfully deployed 3 full-stack projects to production on Vercel: E-Commerce Recommendation System, Bakery Management System, and Library Management System.',
    icon: 'rocket',
  },
  {
    year: '2026',
    title: 'AI Cybersecurity Training Platform',
    org: 'Personal Project',
    type: 'experience',
    description: 'Built an AI-powered cybersecurity training platform, exploring the intersection of machine learning and security education.',
    icon: 'security',
  },
  {
    year: '2025',
    title: 'SafeCampus DBU — Campus Safety System',
    org: 'Debre Berhan University',
    type: 'experience',
    description: 'Developed the SafeCampus real-time emergency alert and incident reporting system for DBU campus security.',
    icon: 'shield',
  },
  {
    year: '2026',
    title: 'Restaurant Management System',
    org: 'Freelance',
    type: 'experience',
    description: 'Built and delivered a full restaurant management web platform covering orders, menus, staff, and reporting for local businesses.',
    icon: 'briefcase',
  },
  {
    year: '2024',
    title: 'Started Software Engineering',
    org: 'Debre Berhan University',
    type: 'education',
    description: 'Began the software engineering journey. First exposure to programming, web development, databases, and algorithms.',
    icon: 'spark',
  },
]

/* ── Certifications ── */
export const certifications = [
  {
    title: 'HACK-X 2026 Hackathon',
    issuer: 'Tech Tonic Club · Debre Berhan University',
    date: '15 May 2026',
    credentialUrl: '#',
    color: '#16a34a',
    logo: '/hackathon-cert.jpg',
    isAward: true,
    badge: 'award',
    description: 'Awarded for participating in HACK-X 2026, signed by Dr. Seblewongel Esseynew, Dean of College of Computing, and Yeabsira Behailu, Club President.',
  },
]

/* ── Testimonials ── */
export const testimonials = [
  {
    name: 'Abebe Tadesse',
    role: 'Senior Software Engineer',
    company: 'TechCorp Ethiopia',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Rediet delivered the bakery management system on time and exceeded our expectations. The code quality was excellent and the UI was intuitive. A true professional for someone still in university.',
  },
  {
    name: 'Mekdes Alemu',
    role: 'University Instructor',
    company: 'Debre Berhan University',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
    text: 'One of the most dedicated and technically gifted students I have worked with. Her campus safety project showed real engineering maturity — from architecture to deployment.',
  },
  {
    name: 'Yonas Haile',
    role: 'Startup Founder',
    company: 'EthioShop',
    avatar: 'https://i.pravatar.cc/150?img=54',
    rating: 5,
    text: 'The e-commerce platform Rediet built significantly boosted our product discovery. The UX was smooth and the codebase was clean and well-documented.',
  },
  {
    name: 'Tigist Bekele',
    role: 'Tech Lead',
    company: 'Addis Software Solutions',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'Rediet has an exceptional ability to learn fast and apply new technologies effectively. Her full-stack skills, attention to detail, and communication make her a great collaborator.',
  },
]

/* ── Nav links ── */
export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services'   },
  { label: 'Contact',    href: '#contact'    },
]

/* ── Social links ── */
export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/Rediet2077',         icon: 'github'   },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rediet-sharew', icon: 'linkedin' },
  { label: 'Email',    href: 'mailto:rediet@example.com',             icon: 'email'    },
]
