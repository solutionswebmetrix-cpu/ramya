// Central content for the portfolio. Keeping it here lets components stay presentational.

export const PROFILE = {
  name: 'Tuba Ansari',
  title: 'Digital Marketing Specialist | SEO Expert | Content Strategist',
  intro:
    'I help brands grow through SEO, content marketing, social media strategy, and creative digital solutions.',
  email: 'tuba.ansari@gmail.com',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  linkedin: 'https://www.linkedin.com/in/tubaansari',
  instagram: 'https://www.instagram.com/tubaansari',
  resumeUrl: '#',
  heroImage:
    'https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export type Skill = { name: string; icon: string; level: number };

export const SKILLS: Skill[] = [
  { name: 'SEO', icon: 'Search', level: 95 },
  { name: 'Keyword Research', icon: 'ListFilter', level: 92 },
  { name: 'On-Page SEO', icon: 'FileSearch', level: 93 },
  { name: 'Off-Page SEO', icon: 'Link2', level: 88 },
  { name: 'Technical SEO', icon: 'Wrench', level: 85 },
  { name: 'Google Analytics', icon: 'BarChart3', level: 90 },
  { name: 'Search Console', icon: 'LineChart', level: 90 },
  { name: 'WordPress', icon: 'Globe', level: 88 },
  { name: 'Canva', icon: 'Palette', level: 94 },
  { name: 'Adobe Photoshop', icon: 'Image', level: 86 },
  { name: 'Content Writing', icon: 'PenLine', level: 93 },
  { name: 'Social Media Marketing', icon: 'Share2', level: 91 },
  { name: 'Meta Ads', icon: 'Megaphone', level: 87 },
  { name: 'Google Ads', icon: 'Target', level: 86 },
  { name: 'Email Marketing', icon: 'Mail', level: 84 },
  { name: 'Content Strategy', icon: 'Compass', level: 92 },
];

export type Service = { title: string; icon: string; description: string };

export const SERVICES: Service[] = [
  {
    title: 'SEO Optimization',
    icon: 'Search',
    description:
      'Comprehensive on-page, off-page, and technical SEO to climb rankings and drive qualified organic traffic.',
  },
  {
    title: 'Content Writing',
    icon: 'PenLine',
    description:
      'Engaging, well-researched content that converts readers into customers and ranks on search engines.',
  },
  {
    title: 'Website Content',
    icon: 'FileText',
    description:
      'Clear, persuasive website copy that communicates your value proposition and guides visitors to act.',
  },
  {
    title: 'Social Media Management',
    icon: 'Share2',
    description:
      'End-to-end social media strategy, scheduling, and community management that grows loyal audiences.',
  },
  {
    title: 'Graphic Design',
    icon: 'Palette',
    description:
      'Scroll-stopping visuals, brand assets, and ad creatives designed in Photoshop and Canva.',
  },
  {
    title: 'Blog Writing',
    icon: 'BookOpen',
    description:
      'SEO-structured blog posts that build topical authority and keep your audience coming back.',
  },
  {
    title: 'WordPress Website Management',
    icon: 'Globe',
    description:
      'Setup, optimization, maintenance, and content updates for fast, secure WordPress websites.',
  },
  {
    title: 'Google Ads',
    icon: 'Target',
    description:
      'Data-driven search and display campaigns that maximize ROI and reach high-intent customers.',
  },
  {
    title: 'Meta Ads',
    icon: 'Megaphone',
    description:
      'Facebook and Instagram ad campaigns engineered for conversions and measurable growth.',
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: 'Freelance Digital Content Creator',
    org: 'Self-Employed',
    period: '2025 — 2026',
    description:
      'Delivered end-to-end digital marketing services for a roster of brands — SEO-optimized content, social media strategy, graphic design, and campaign management that grew organic reach and engagement.',
    tags: ['SEO', 'Content Strategy', 'Graphic Design', 'Social Media'],
  },
  {
    role: 'Content & SEO Executive',
    org: 'Attitude Academy',
    period: 'Nov 2026 — Present',
    description:
      'Lead content and SEO initiatives for the academy: manage on-page and technical SEO, publish high-ranking articles, run Google Analytics reporting, and optimize conversion funnels across the website.',
    tags: ['SEO', 'Google Analytics', 'WordPress', 'Content Writing'],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  icon: string;
  year: string;
};

export const CERTIFICATIONS: Certification[] = [
  { title: 'Google Ads Certified', issuer: 'Google', icon: 'Target', year: '2025' },
  { title: 'Google Analytics', issuer: 'Google', icon: 'BarChart3', year: '2025' },
  { title: 'HubSpot Content Marketing', issuer: 'HubSpot', icon: 'GraduationCap', year: '2024' },
  { title: 'Digital Marketing Certification', issuer: 'Google Digital Garage', icon: 'Award', year: '2024' },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'SEO' | 'Social Media' | 'Graphics' | 'Blogs' | 'Ads';
  tech: string[];
  result: string;
  demoUrl: string;
  caseStudyUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'SEO Blog Optimization',
    description:
      'Audited and re-optimized a flagship blog cluster, refining internal links, meta data, and content depth to capture featured snippets.',
    image:
      'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'SEO',
    tech: ['On-Page SEO', 'Search Console', 'Google Analytics'],
    result: '+45% Organic Traffic',
    demoUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 2,
    title: 'Keyword Ranking Improvement',
    description:
      'A targeted keyword research and content mapping sprint that pushed 18 priority keywords onto page one within three months.',
    image:
      'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'SEO',
    tech: ['Keyword Research', 'Technical SEO', 'WordPress'],
    result: '18 Keywords on Page 1',
    demoUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    description:
      'Designed and executed a multi-platform social campaign with cohesive visuals and a content calendar that doubled engagement.',
    image:
      'https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Social Media',
    tech: ['Meta Ads', 'Canva', 'Content Strategy'],
    result: '2x Engagement Rate',
    demoUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: 4,
    title: 'Website Content Strategy',
    description:
      'Crafted a complete website content architecture — from messaging hierarchy to SEO copy — that improved clarity and conversions.',
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Blogs',
    tech: ['Content Strategy', 'WordPress', 'SEO Copywriting'],
    result: '32% More Conversions',
    demoUrl: '#',
    caseStudyUrl: '#',
  },
];

export type GalleryItem = {
  id: number;
  title: string;
  category: 'SEO' | 'Social Media' | 'Graphics' | 'Blogs' | 'Ads' | 'Thumbnails';
  image: string;
};

export const GALLERY: GalleryItem[] = [
  {
    id: 1,
    title: 'Organic Traffic Dashboard',
    category: 'SEO',
    image:
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 2,
    title: 'Instagram Growth Campaign',
    category: 'Social Media',
    image:
      'https://images.pexels.com/photos/15406294/pexels-photo-15406294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 3,
    title: 'Brand Creative Set',
    category: 'Graphics',
    image:
      'https://images.pexels.com/photos/16313664/pexels-photo-16313664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 4,
    title: 'Editorial Blog Series',
    category: 'Blogs',
    image:
      'https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 5,
    title: 'Search Ads Performance',
    category: 'Ads',
    image:
      'https://images.pexels.com/photos/7279706/pexels-photo-7279706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 6,
    title: 'YouTube Thumbnail Pack',
    category: 'Thumbnails',
    image:
      'https://images.pexels.com/photos/28336275/pexels-photo-28336275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 7,
    title: 'Hashtag Strategy Planner',
    category: 'Social Media',
    image:
      'https://images.pexels.com/photos/15595294/pexels-photo-15595294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 8,
    title: 'Digital Art Direction',
    category: 'Graphics',
    image:
      'https://images.pexels.com/photos/3730210/pexels-photo-3730210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 9,
    title: 'SEO Content Workflow',
    category: 'Blogs',
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 10,
    title: 'Conversion Ad Creative',
    category: 'Ads',
    image:
      'https://images.pexels.com/photos/15635401/pexels-photo-15635401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 11,
    title: 'Analytics Review Session',
    category: 'SEO',
    image:
      'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 12,
    title: 'Creative Studio Shot',
    category: 'Thumbnails',
    image:
      'https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const GALLERY_FILTERS = [
  'All',
  'SEO',
  'Social Media',
  'Graphics',
  'Blogs',
  'Ads',
  'Thumbnails',
] as const;

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aisha Khan',
    role: 'Founder, Bloom Beauty Co.',
    quote:
      'Tuba transformed our online presence. Organic traffic doubled in four months and our social engagement has never been higher. She is meticulous, creative, and genuinely invested in results.',
    image:
      'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Marketing Director, TechNova',
    quote:
      'The SEO and content strategy Tuba delivered pushed us onto page one for our most competitive keywords. Her reports made ROI crystal clear to leadership. Highly recommended.',
    image:
      'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    rating: 5,
  },
  {
    name: 'Sara Williams',
    role: 'CEO, Willow Studio',
    quote:
      'From ad creatives to blog posts, Tuba handles everything with a rare blend of strategy and design sense. Our campaigns finally look as good as they perform.',
    image:
      'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    rating: 5,
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 45, suffix: '%', label: 'Organic Growth' },
  { value: 120, suffix: '+', label: 'SEO Articles' },
  { value: 50, suffix: '+', label: 'Graphics Designed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
];
