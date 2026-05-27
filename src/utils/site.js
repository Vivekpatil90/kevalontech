export const SITE = {
  name: 'Kevalon Technology',
  tagline: 'Your Digital Growth Partner',
  about: 'Kevalon Technology is a trusted technology partner delivering enterprise-grade digital solutions including web development, mobile apps, SEO, ERP, CRM, UI/UX design, digital marketing, and custom software development.',
  address: '913, Solaris Business Hub, Sola Road, Opp. The National Higher Secondary School, Naranpura, Ahmedabad, Gujarat, 380063.',
  phones: ['+91 90810 12218', '+91 91040 12218'],
  emails: ['sales@kevalontechnology.in', 'ceo@kevalontechnology.in'],
  website: 'https://www.kevalontechnology.in',
  socials: [
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
}

export const SERVICES = [
  {
    slug: 'python-development',
    title: 'Python Development',
    brief: 'Robust, scalable Python solutions for web, automation, data and AI projects.',
    overview: 'We build production-grade Python applications — from REST APIs and automation scripts to data pipelines and AI-powered backends. Our engineers use modern frameworks like FastAPI, Flask and Django to deliver clean, maintainable codebases that scale with your business.',
    features: [
      'Custom Python web apps & APIs (FastAPI / Flask)',
      'Automation scripts and CLI tools',
      'Data pipelines, ETL and scraping',
      'Integrations with third-party services',
      'Performance tuning & code reviews',
      'Long-term maintenance & support',
    ],
    technologies: ['Python 3.12', 'FastAPI', 'Flask', 'Celery', 'PostgreSQL', 'Redis', 'Docker'],
    related: ['django-development', 'full-stack-development', 'ai-ml', 'data-analytics'],
  },
  {
    slug: 'django-development',
    title: 'Django Development',
    brief: 'Secure, enterprise-grade web platforms powered by the Django framework.',
    overview: 'Django is our go-to for content-heavy portals, marketplaces, admin systems and SaaS backends. We follow Django best practices for security, scalability and a clean MVT architecture so your platform stays maintainable for years.',
    features: [
      'Django + DRF REST APIs',
      'Custom admin dashboards',
      'Multi-tenant SaaS architecture',
      'Stripe / Razorpay payment integration',
      'PostgreSQL schema design & optimisation',
      'CI/CD and cloud deployment',
    ],
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Nginx', 'AWS'],
    related: ['python-development', 'full-stack-development', 'react-js-development'],
  },
  {
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    brief: 'End-to-end product engineering across frontend, backend, database and DevOps.',
    overview: 'One team that owns the entire stack — UI, APIs, database, infra and deployment. We deliver fully-featured web products with clean architecture, automated testing and a smooth release pipeline.',
    features: [
      'Architecture design & tech consulting',
      'Frontend in React / Next.js',
      'Backend in Node / Django / FastAPI',
      'Database design (SQL & NoSQL)',
      'Auth, payments, notifications',
      'CI/CD, monitoring & cloud hosting',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'AWS'],
    related: ['mern-stack-development', 'mean-stack-development', 'react-js-development', 'ui-ux-design'],
  },
  {
    slug: 'mern-stack-development',
    title: 'MERN Stack Development',
    brief: 'High-performance JavaScript apps built with MongoDB, Express, React and Node.',
    overview: 'The MERN stack lets us ship modern, real-time web applications fast — from MVPs to scalable SaaS. We use TypeScript end-to-end for safety, and patterns like SSR, edge functions and component libraries for polish.',
    features: [
      'React + Next.js frontends',
      'Express / Nest.js REST & GraphQL APIs',
      'MongoDB schema design',
      'JWT / OAuth authentication',
      'Realtime with WebSockets',
      'Cloud deployment & scaling',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'TypeScript', 'Next.js'],
    related: ['mean-stack-development', 'react-js-development', 'full-stack-development'],
  },
  {
    slug: 'mean-stack-development',
    title: 'MEAN Stack Development',
    brief: 'Enterprise web apps built with MongoDB, Express, Angular and Node.',
    overview: 'For teams that prefer Angular, the MEAN stack delivers a structured, opinionated foundation perfect for enterprise dashboards, admin portals and large-scale SPAs.',
    features: [
      'Angular 17+ SPA frontends',
      'Express / Nest.js backends',
      'MongoDB modeling & aggregation',
      'Role-based access control',
      'Reactive forms & RxJS architecture',
      'PWA & offline support',
    ],
    technologies: ['MongoDB', 'Express', 'Angular', 'Node.js', 'RxJS', 'TypeScript'],
    related: ['mern-stack-development', 'full-stack-development'],
  },
  {
    slug: 'react-js-development',
    title: 'React JS Development',
    brief: 'Lightning-fast, component-driven user interfaces built with React.',
    overview: 'We craft delightful React frontends — single-page apps, design systems, dashboards and marketing sites — focused on accessibility, performance and developer experience.',
    features: [
      'React 18 / Next.js 14 apps',
      'Reusable component libraries',
      'State management (Redux / Zustand / TanStack)',
      'SSR, ISR and edge rendering',
      'Animations with Framer Motion & GSAP',
      'Lighthouse-perfect performance',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    related: ['mern-stack-development', 'ui-ux-design', 'full-stack-development'],
  },
  {
    slug: 'php-mysql',
    title: 'PHP & MySQL',
    brief: 'Reliable, cost-effective web solutions powered by PHP and MySQL.',
    overview: 'Whether you need a custom CMS, a Laravel-based SaaS or a WordPress plugin, our PHP team delivers stable, secure and well-tested code on top of MySQL — perfect for budgets that need to stretch without sacrificing quality.',
    features: [
      'Laravel & CodeIgniter applications',
      'Custom WordPress themes & plugins',
      'MySQL schema design & optimisation',
      'REST API development',
      'Legacy PHP modernisation',
      'Shared hosting compatibility',
    ],
    technologies: ['PHP 8', 'Laravel', 'MySQL', 'WordPress', 'jQuery', 'Bootstrap'],
    related: ['full-stack-development', 'digital-marketing'],
  },
  {
    slug: 'ai-ml',
    title: 'AI / ML',
    brief: 'Intelligent features powered by machine learning and modern LLMs.',
    overview: 'From recommendation engines to chatbots and computer-vision systems, we build AI features that ship — using OpenAI, Hugging Face and custom-trained models — and integrate them seamlessly into your product.',
    features: [
      'LLM-powered chat & search (RAG)',
      'Predictive models & forecasting',
      'Computer vision & OCR',
      'Recommendation engines',
      'MLOps pipelines & monitoring',
      'Model fine-tuning & evaluation',
    ],
    technologies: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenAI', 'LangChain', 'Hugging Face'],
    related: ['python-development', 'data-analytics'],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    brief: 'Turn raw business data into clear, actionable insights and dashboards.',
    overview: 'We design data warehouses, build ETL pipelines and craft beautiful, interactive dashboards so leadership can make decisions backed by real numbers — not gut feel.',
    features: [
      'Data warehouse design (Postgres / BigQuery)',
      'ETL / ELT pipelines (Airflow, dbt)',
      'Interactive dashboards (Power BI, Looker, Metabase)',
      'KPI definition workshops',
      'Customer segmentation & cohort analysis',
      'Forecasting & what-if models',
    ],
    technologies: ['Python', 'SQL', 'BigQuery', 'Airflow', 'dbt', 'Power BI', 'Metabase'],
    related: ['ai-ml', 'python-development'],
  },
  {
    slug: 'iot',
    title: 'IoT (Internet of Things)',
    brief: 'Connected devices, gateways and cloud platforms that work in production.',
    overview: 'We design end-to-end IoT systems — firmware, gateways, cloud ingestion, dashboards and OTA updates — for industries from manufacturing to smart agriculture.',
    features: [
      'ESP32 / Raspberry Pi firmware',
      'MQTT / CoAP messaging',
      'AWS IoT & Azure IoT Hub integration',
      'Realtime device dashboards',
      'OTA firmware updates',
      'Edge analytics',
    ],
    technologies: ['ESP32', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Node-RED', 'InfluxDB'],
    related: ['ai-ml', 'data-analytics', 'full-stack-development'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    brief: 'Research-led product design and design systems that users love.',
    overview: 'We blend user research, information architecture and visual craft to ship interfaces that feel effortless — backed by reusable design systems your team can grow with.',
    features: [
      'User research & journey mapping',
      'Wireframes & interactive prototypes',
      'Design systems in Figma',
      'Accessibility (WCAG 2.2) audits',
      'Motion design & micro-interactions',
      'Design QA during development',
    ],
    technologies: ['Figma', 'FigJam', 'Framer', 'Principle', 'Maze', 'Lottie'],
    related: ['graphic-design', 'react-js-development', 'full-stack-development'],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    brief: 'Logos, brand identities and marketing creatives that get noticed.',
    overview: 'From brand identity systems to social-media creatives and print collateral, our designers craft visuals that feel cohesive across every touchpoint.',
    features: [
      'Logo & brand identity',
      'Brand guidelines',
      'Social media creative kits',
      'Brochures, flyers & print',
      'Pitch decks & infographics',
      'Packaging design',
    ],
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma', 'After Effects'],
    related: ['ui-ux-design', 'digital-marketing'],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    brief: 'Full-funnel growth across SEO, paid ads, social and email.',
    overview: 'We run integrated digital marketing campaigns — combining SEO, Google Ads, Meta Ads, social media and email — to fill your pipeline with qualified, ready-to-buy customers.',
    features: [
      'SEO (technical, on-page, off-page)',
      'Google Ads & Meta Ads management',
      'Social media strategy & content',
      'Email marketing & automation',
      'Conversion rate optimisation',
      'Monthly analytics & reporting',
    ],
    technologies: ['Google Analytics 4', 'Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'Mailchimp'],
    related: ['graphic-design', 'ui-ux-design'],
  },
]

export const STATS = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years of Expertise' },
  { value: 25, suffix: '+', label: 'Specialists' },
]

export const TECHS = ['React','Next.js','Node.js','TypeScript','Python','Django','Flutter','React Native','AWS','GCP','PostgreSQL','MongoDB','Tailwind','Figma','TensorFlow','PyTorch']

// Service hero / card images (Unsplash, free to use)
export const SERVICE_IMAGES = {
  'python-development':      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&q=80',
  'django-development':      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
  'full-stack-development':  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
  'mern-stack-development':  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80',
  'mean-stack-development':  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
  'react-js-development':    'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=1200&q=80',
  'php-mysql':               'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80',
  'ai-ml':                   'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
  'data-analytics':          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  'iot':                     'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
  'ui-ux-design':            'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80',
  'graphic-design':          'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
  'digital-marketing':       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
}

// Curated tech stack with brand logos via Simple Icons CDN
export const TECH_STACK = [
  { name: 'React',       slug: 'react' },
  { name: 'Next.js',     slug: 'nextdotjs' },
  { name: 'TypeScript',  slug: 'typescript' },
  { name: 'Node.js',     slug: 'nodedotjs' },
  { name: 'Python',      slug: 'python' },
  { name: 'Django',      slug: 'django' },
  { name: 'PostgreSQL',  slug: 'postgresql' },
  { name: 'MongoDB',     slug: 'mongodb' },
  { name: 'AWS',         slug: 'amazonwebservices' },
  { name: 'Google Cloud',slug: 'googlecloud' },
  { name: 'Docker',      slug: 'docker' },
  { name: 'Kubernetes',  slug: 'kubernetes' },
  { name: 'TensorFlow',  slug: 'tensorflow' },
  { name: 'Flutter',     slug: 'flutter' },
  { name: 'Tailwind',    slug: 'tailwindcss' },
  { name: 'Figma',       slug: 'figma' },
]


export const PROCESS = [
  ['Discover','Research, stakeholder workshops and scoping.'],
  ['Design','Wireframes, prototypes and design systems.'],
  ['Develop','Agile sprints, clean architecture and testing.'],
  ['Deploy','CI/CD, monitoring and zero-downtime launches.'],
  ['Grow','Analytics, iteration and growth marketing.'],
]

export const TESTIMONIALS = [
  { name: 'Aarav Mehta', role: 'Founder, Northwind', text: 'Kevalon shipped our SaaS dashboard in 8 weeks — beautifully designed and rock solid.' },
  { name: 'Sara Iyer', role: 'CMO, Lumen Retail', text: 'Our organic traffic tripled in 6 months. They actually move the needle.' },
  { name: 'Vikram Shah', role: 'COO, Helix Logistics', text: 'Their custom ERP saved us 30+ hours every week. Exceptional team.' },
  { name: 'Priya Nair', role: 'CEO, Bloom Beauty', text: 'Brand, store, ads — one partner doing it all, and doing it brilliantly.' },
]

export const PROJECTS = [
  { title: 'Northwind SaaS', category: 'Web App', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80' },
  { title: 'Lumen Storefront', category: 'E-commerce', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80' },
  { title: 'Helix ERP', category: 'ERP', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80' },
  { title: 'Bloom Brand', category: 'Branding', img: 'https://bloomcommunications.com/wp-content/uploads/2022/02/Bloom-Mood-design-process-800x505.png' },
  { title: 'Atlas Mobile', category: 'Mobile App', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80' },
  { title: 'Vega Analytics', category: 'Web App', img: 'https://vega-analytics.com/images/landing-page/desktop-front-view-app-dianoses-explorer-small.webp' },
]
export const JOBS = [
  {
    title: 'Frontend Developer',
    type: 'Full Time',
    location: 'Ahmedabad',
    experience: '1-3 Years',
    description:
      'Build modern React and Next.js applications with responsive UI and animations.',
  },
  {
    title: 'Backend Developer',
    type: 'Full Time',
    location: 'Ahmedabad',
    experience: '2-4 Years',
    description:
      'Develop scalable APIs and backend systems using Node.js, Express and MongoDB.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full Time',
    location: 'Remote',
    experience: '1-3 Years',
    description:
      'Design beautiful and user-friendly interfaces, wireframes and prototypes.',
  },
  {
    title: 'Digital Marketing Executive',
    type: 'Full Time',
    location: 'Ahmedabad',
    experience: '1-2 Years',
    description:
      'Handle SEO, social media campaigns and paid advertising strategies.',
  },
]

export const getService = (slug) => SERVICES.find(s => s.slug === slug)
