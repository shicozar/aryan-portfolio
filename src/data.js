export const data = {
  name: 'ARYAN',
  title: 'SOFTWARE ENGINEER',
  subtitle: 'BACKEND · FULL STACK · CLOUD · AI',
  status: 'MS COMPUTER SCIENCE · CSUEB · MAY 2026',
  location: 'HAYWARD, CA',
  icpc: 'ICPC RANK 18',
  email: 'aryanbh10@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aryan-bh10',
  github: 'https://github.com/shicozar',
  leetcode: 'https://leetcode.com/u/aryanbh10/',

  stats: [
    { num: '1+', label: 'YRS\nEXPERIENCE' },
    { num: '#18', label: 'ICPC\nRANK' },
    { num: '5+', label: 'PROJECTS\nSHIPPED' },
    { num: '3.6', label: 'MS\nGPA' },
  ],

  about: [
    { label: 'CLASS', value: 'Software Engineer\n(Backend / Full Stack)' },
    { label: 'GUILD', value: 'California State University, East Bay\nGPA: 3.6 · MS Computer Science' },
    { label: 'ORIGIN', value: 'Amity University, India\nB.Tech Computer Science · 2024' },
    { label: 'MISSION', value: '1+ yr shipping production APIs, cloud pipelines & SaaS apps. Built & deployed AI SaaS solo end-to-end.' },
  ],

  skills: [
    { icon: '🟨', name: 'JAVASCRIPT', level: 5, color: 'r' },
    { icon: '🟢', name: 'NODE.JS',    level: 5, color: 'r' },
    { icon: '🐍', name: 'PYTHON',     level: 4, color: 'r' },
    { icon: '☕', name: 'JAVA',       level: 4, color: 'r' },
    { icon: '⚛',  name: 'REACT',     level: 4, color: 't' },
    { icon: '🔷', name: 'TYPESCRIPT', level: 4, color: 't' },
    { icon: '🍃', name: 'SPRING BOOT',level: 3, color: 't' },
    { icon: '⚡', name: 'C++',        level: 4, color: 't' },
  ],

  devops: [
    { name: 'AWS (EC2, S3, CLOUDWATCH)', badge: 'EQUIPPED', color: 'red' },
    { name: 'DOCKER / COMPOSE',          badge: 'EQUIPPED', color: 'red' },
    { name: 'JENKINS CI/CD',             badge: 'LEARNED',  color: 'teal' },
    { name: 'GCP / CLOUD RUN',           badge: 'LEARNED',  color: 'teal' },
    { name: 'KUBERNETES',                badge: 'UNLOCKING',color: 'yellow' },
  ],

  databases: [
    { name: 'POSTGRESQL',        badge: 'EQUIPPED', color: 'red' },
    { name: 'MONGODB',           badge: 'EQUIPPED', color: 'red' },
    { name: 'SNOWFLAKE',         badge: 'LEARNED',  color: 'teal' },
    { name: 'REDIS / ELASTICACHE', badge: 'LEARNED', color: 'teal' },
  ],

  experience: [
    {
      role: 'SOFTWARE DEVELOPER INTERN',
      company: 'YOUNG GATES · FREMONT, CA',
      date: 'MAY 2025 – AUG 2025',
      bullets: [
        'Owned end-to-end Stripe Checkout integration — Express.js server + 6+ webhook handlers, reducing manual finance work by ~30%.',
        'Optimized PostgreSQL schemas with composite indexing, cutting query response time by ~25% on highest-traffic endpoints.',
        'Containerized services with Docker, maintained Jenkins CI/CD, monitored production on AWS EC2 via CloudWatch.',
      ],
    },
    {
      role: 'TRAINEE SOFTWARE ENGINEER',
      company: 'BLUEPI · DELHI, INDIA',
      date: 'MAR 2024 – AUG 2024',
      bullets: [
        'Designed and shipped 3 production RESTful APIs in Java Spring Boot serving consistent daily traffic across internal services.',
        'Built React.js dashboards + 2 Python ETL pipelines (PostgreSQL → S3 → Snowflake) reducing manual data handling by ~20%.',
        'Containerized apps with Docker, deployed to AWS EC2, automated via Jenkins CI/CD — zero-downtime releases.',
      ],
    },
  ],

  projects: [
    {
      tag: '★ FEATURED · SOLO BUILD',
      tagColor: 'red',
      name: 'PREPWISE',
      desc: 'AI-powered mock interview coach. Generates role-specific questions, records verbal answers via Speech-to-Text, and delivers AI scoring & coaching powered by Claude API.',
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Claude API', 'Docker', 'Render'],
      github: 'https://github.com/shicozar/prepwise',
      live: 'https://prepwise-frontend.onrender.com',
      featured: true,
    },
    {
      tag: 'FULL STACK',
      tagColor: 'teal',
      name: 'TRAVEIT',
      desc: 'AI travel recommendation app — analyzes user-uploaded photos via Google Vision API to surface personalized destination suggestions via Google Places API.',
      stack: ['React.js', 'Node.js', 'Google Vision API', 'Firebase', 'Docker', 'GCP'],
      github: 'https://github.com/shicozar/trivet-app',
    },
    {
      tag: 'CLOUD INFRA',
      tagColor: 'yellow',
      name: 'ELASTICACHE QUERY CACHE',
      desc: 'Redis cache-aside layer on AWS ElastiCache achieving 60–80% reduction in DB load and sub-10ms response times for cached queries under high traffic.',
      stack: ['AWS ElastiCache', 'Redis', 'Amazon RDS', 'EC2', 'VPC'],
      github: 'https://github.com/shicozar/database-query-caching-elasticache',
    },
    {
      tag: 'SYSTEMS',
      tagColor: 'red',
      name: 'NETCAT BROWSER',
      desc: 'Desktop web browser built in C++ with Qt framework. Multi-tab browsing, private mode, download manager, and session handling using OOP design.',
      stack: ['C++', 'Qt Framework', 'OOP'],
      github: 'https://github.com/shicozar/NetCat',
    },
    {
      tag: 'MOBILE',
      tagColor: 'teal',
      name: 'MEALSAPP',
      desc: 'Flutter mobile app for browsing and saving favourite meal recipes. Built to practice cross-platform mobile development with Dart.',
      stack: ['Flutter', 'Dart'],
      github: 'https://github.com/shicozar',
    },
  ],

  achievements: [
    { icon: '🏆', title: 'RANK #18', sub: 'ICPC Pacific Northwest Regional — one of the most competitive collegiate programming contests in North America' },
    { icon: '🎮', title: 'CO-FOUNDER', sub: 'C3 — College Coding Society. Organized hackathons & competitions reaching 200+ students' },
    { icon: '📜', title: 'CERTIFIED', sub: 'Introduction to Large Language Models — Google (2025)' },
    { icon: '🚀', title: 'SOLO LAUNCH', sub: 'Built & deployed PrepWise — full AI SaaS product end-to-end as a solo developer' },
  ],
}
