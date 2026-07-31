// Content for the A4 print-ready portfolio deck. Shared across all pages.

export const PORTFOLIO = {
  name: 'Tuba Ansari',
  title: 'Digital Marketing Specialist | SEO Expert | Content Creator',
  tagline: 'I help brands grow through SEO, content marketing, social media strategy, and creative digital solutions.',
  email: 'tuba.ansari@gmail.com',
  phone: '+91 98765 43210',
  linkedin: 'linkedin.com/in/tubaansari',
  instagram: 'instagram.com/tubaansari',
  website: 'tubaansari.com',
  portrait:
    'https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
};

export const ABOUT_PARAGRAPHS = [
  'I am a results-driven digital marketing specialist with a passion for helping brands grow their online presence. Over the past two years I have worked across the full digital marketing spectrum — from technical SEO audits and keyword research to content strategy, social media management, and graphic design.',
  'My approach blends data and creativity. I use tools like Google Analytics, Search Console, and SEMrush to find opportunity, then craft SEO-optimised content and scroll-stopping creatives that turn that opportunity into traffic, leads, and revenue. I am equally comfortable in WordPress, Canva, and Adobe Photoshop.',
  'Whether working independently as a freelancer or as part of a team, I focus on measurable outcomes — higher rankings, more organic traffic, better click-through rates — and I report on them with the clarity that recruiters and clients expect.',
];

export type Skill = { name: string; level: number; category: string };

export const SKILLS: Skill[] = [
  { name: 'SEO', level: 95, category: 'Search' },
  { name: 'Keyword Research', level: 92, category: 'Search' },
  { name: 'On-Page SEO', level: 93, category: 'Search' },
  { name: 'Off-Page SEO', level: 88, category: 'Search' },
  { name: 'Technical SEO', level: 85, category: 'Search' },
  { name: 'Google Analytics', level: 90, category: 'Analytics' },
  { name: 'Google Search Console', level: 90, category: 'Analytics' },
  { name: 'WordPress', level: 88, category: 'Web' },
  { name: 'Canva', level: 94, category: 'Design' },
  { name: 'Adobe Photoshop', level: 86, category: 'Design' },
  { name: 'Content Writing', level: 93, category: 'Content' },
  { name: 'Social Media Marketing', level: 91, category: 'Social' },
  { name: 'Meta Ads', level: 87, category: 'Ads' },
  { name: 'Google Ads', level: 86, category: 'Ads' },
  { name: 'Email Marketing', level: 84, category: 'Content' },
];

export type Tool = { name: string; icon: string; tint: string };

export const TOOLS: Tool[] = [
  { name: 'Google Analytics', icon: 'BarChart3', tint: '#F59E0B' },
  { name: 'Search Console', icon: 'LineChart', tint: '#3B82F6' },
  { name: 'SEMrush', icon: 'Search', tint: '#10B981' },
  { name: 'Canva', icon: 'Palette', tint: '#06B6D4' },
  { name: 'WordPress', icon: 'Globe', tint: '#6366F1' },
  { name: 'Elementor', icon: 'Layout', tint: '#EC4899' },
  { name: 'ChatGPT', icon: 'MessageSquare', tint: '#14B8A6' },
  { name: 'Adobe Photoshop', icon: 'Image', tint: '#2563EB' },
  { name: 'Meta Business Suite', icon: 'Share2', tint: '#06B6D4' },
  { name: 'Google Ads', icon: 'Target', tint: '#EF4444' },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Digital Marketing Certification',
    org: 'Google Digital Garage',
    period: '2024',
    description:
      'Comprehensive certification covering SEO, SEM, social media, analytics, and digital strategy fundamentals.',
  },
  {
    title: 'HubSpot Content Marketing',
    org: 'HubSpot Academy',
    period: '2024',
    description:
      'Content marketing certification focused on storytelling, content strategy, and conversion-driven writing.',
  },
  {
    title: 'Google Analytics Certification',
    org: 'Google',
    period: '2025',
    description:
      'GA4 certification covering property setup, event tracking, audience insights, and conversion reporting.',
  },
  {
    title: 'Google Ads Certified',
    org: 'Google',
    period: '2025',
    description:
      'Search and display advertising certification covering campaign structure, bidding, and performance optimisation.',
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Freelance Digital Content Creator',
    org: 'Self-Employed',
    period: '2025 — 2026',
    description:
      'Delivered end-to-end digital marketing services for a roster of brands — SEO-optimised content, social media strategy, graphic design, and campaign management that grew organic reach and engagement.',
  },
  {
    title: 'Content & SEO Executive',
    org: 'Attitude Academy',
    period: 'Nov 2026 — Present',
    description:
      'Lead content and SEO initiatives: manage on-page and technical SEO, publish high-ranking articles, run Google Analytics reporting, and optimise conversion funnels across the academy website.',
  },
];

export type Service = { title: string; icon: string; description: string };

export const SERVICES: Service[] = [
  { title: 'SEO', icon: 'Search', description: 'On-page, off-page & technical SEO to climb rankings and drive qualified organic traffic.' },
  { title: 'Content Writing', icon: 'PenLine', description: 'Engaging, well-researched content that converts readers into customers and ranks on search.' },
  { title: 'Website Content', icon: 'FileText', description: 'Clear, persuasive website copy that communicates value and guides visitors to act.' },
  { title: 'Social Media Management', icon: 'Share2', description: 'End-to-end social strategy, scheduling, and community management that grows audiences.' },
  { title: 'Graphic Design', icon: 'Palette', description: 'Scroll-stopping visuals, brand assets, and ad creatives designed in Photoshop and Canva.' },
  { title: 'Blog Writing', icon: 'BookOpen', description: 'SEO-structured blog posts that build topical authority and keep audiences coming back.' },
  { title: 'Google Ads', icon: 'Target', description: 'Data-driven search and display campaigns that maximise ROI and reach high-intent buyers.' },
  { title: 'Meta Ads', icon: 'Megaphone', description: 'Facebook and Instagram ad campaigns engineered for conversions and measurable growth.' },
  { title: 'WordPress Management', icon: 'Globe', description: 'Setup, optimisation, maintenance, and content updates for fast, secure WordPress sites.' },
];

export type SeoProject = {
  title: string;
  result: string;
  image: string;
  description: string;
  metrics: { label: string; value: string }[];
};

export const SEO_PROJECTS: SeoProject[] = [
  {
    title: 'SEO Blog Optimization',
    result: '+45% Organic Traffic',
    image:
      'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Audited and re-optimised a flagship blog cluster — refining internal links, meta data, and content depth to capture featured snippets.',
    metrics: [
      { label: 'Organic Traffic', value: '+45%' },
      { label: 'Top-10 Keywords', value: '32' },
      { label: 'Avg. Position', value: '3.4' },
    ],
  },
  {
    title: 'Keyword Ranking Improvement',
    result: '18 Keywords on Page 1',
    image:
      'https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A targeted keyword research and content mapping sprint that pushed 18 priority keywords onto page one within three months.',
    metrics: [
      { label: 'Page-1 Keywords', value: '18' },
      { label: 'Impressions', value: '+62%' },
      { label: 'CTR', value: '+18%' },
    ],
  },
];

export type KeywordRow = {
  keyword: string;
  volume: string;
  difficulty: number;
  intent: string;
  position: number;
  trend: string;
};

export const KEYWORDS: KeywordRow[] = [
  { keyword: 'digital marketing course', volume: '22,200', difficulty: 68, intent: 'Commercial', position: 4, trend: '↑ 11' },
  { keyword: 'seo training online', volume: '8,100', difficulty: 54, intent: 'Informational', position: 2, trend: '↑ 8' },
  { keyword: 'content marketing tools', volume: '14,800', difficulty: 47, intent: 'Informational', position: 6, trend: '↑ 5' },
  { keyword: 'best seo plugins wordpress', volume: '5,400', difficulty: 39, intent: 'Transactional', position: 3, trend: '↑ 14' },
  { keyword: 'social media marketing tips', volume: '18,100', difficulty: 61, intent: 'Informational', position: 5, trend: '↑ 9' },
  { keyword: 'google analytics tutorial', volume: '12,000', difficulty: 44, intent: 'Informational', position: 7, trend: '↑ 6' },
];

export type OptimizationItem = { label: string; before: string; after: string };

export const ONPAGE_OPTIMIZATIONS: OptimizationItem[] = [
  { label: 'Title Tag', before: 'Home | My Site', after: 'Digital Marketing Course | SEO Training Online — Brand' },
  { label: 'Meta Description', before: '(missing)', after: 'Learn digital marketing with hands-on SEO, content & ads training. Enroll today.' },
  { label: 'H1 Heading', before: 'Welcome', after: 'Digital Marketing Course: Master SEO, Content & Paid Ads' },
  { label: 'URL Slug', before: '/p=1245', after: '/digital-marketing-course' },
  { label: 'Image Alt Text', before: 'IMG_2034.jpg', after: 'Digital marketing strategy workshop session' },
  { label: 'Internal Links', before: '2 links', after: '8 contextual links to pillar pages' },
];

export type OffPageItem = { label: string; description: string; icon: string };

export const OFFPAGE_ACTIVITIES: OffPageItem[] = [
  { label: 'Backlink Building', description: 'Guest posts and niche edits on DA 30+ sites to build domain authority.', icon: 'Link2' },
  { label: 'Social Bookmarking', description: 'Submissions to Reddit, Mix, and Digg to drive referral traffic and indexing.', icon: 'Bookmark' },
  { label: 'Profile Creation', description: 'Branded profiles on Medium, Quora, and LinkedIn for off-page signals.', icon: 'UserCircle' },
  { label: 'Directory Submissions', description: 'Local and niche directory listings for citation consistency and visibility.', icon: 'ListFilter' },
  { label: 'Forum Engagement', description: 'Value-driven answers on Quora and Reddit linking to pillar content.', icon: 'MessagesSquare' },
  { label: 'Article Submission', description: 'Syndicated articles on Medium and LinkedIn for topical authority.', icon: 'FileText' },
];

export type BlogSample = {
  title: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
};

export const BLOG_SAMPLES: BlogSample[] = [
  {
    title: 'The Complete On-Page SEO Checklist for 2026',
    category: 'SEO',
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt:
      'A practical, step-by-step on-page SEO framework covering title tags, internal linking, schema, and content depth — built for marketers who want to rank.',
    readTime: '8 min read',
  },
  {
    title: 'Content Marketing Trends Shaping This Year',
    category: 'Content',
    image:
      'https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt:
      'From AI-assisted drafting to zero-click search, the content trends redefining how brands reach audiences — and how to adapt your strategy.',
    readTime: '6 min read',
  },
  {
    title: 'How to Build a Social Media Calendar That Works',
    category: 'Social Media',
    image:
      'https://images.pexels.com/photos/15595294/pexels-photo-15595294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    excerpt:
      'A repeatable system for planning, batching, and scheduling a month of social content without burning out — templates included.',
    readTime: '5 min read',
  },
];

export type WebsiteSample = {
  page: string;
  headline: string;
  body: string;
};

export const WEBSITE_SAMPLES: WebsiteSample[] = [
  {
    page: 'Homepage — SaaS',
    headline: 'Turn Visitors Into Loyal Customers',
    body: 'Our all-in-one platform helps marketing teams plan, launch, and measure campaigns in one place — so you spend less time on tools and more time on results.',
  },
  {
    page: 'About — Agency',
    headline: 'We Grow Brands With Data-Backed Creativity',
    body: 'Since 2019 we have helped 80+ brands scale their digital presence through SEO, paid media, and content engineered for measurable outcomes.',
  },
  {
    page: 'Service — Course Provider',
    headline: 'Master Digital Marketing in 12 Weeks',
    body: 'A hands-on, mentor-led program covering SEO, content, social media, and paid ads — with real-world projects and a certification on completion.',
  },
];

export type CreativeItem = {
  title: string;
  image: string;
  platform: string;
};

export const SOCIAL_CREATIVES: CreativeItem[] = [
  { title: 'Product Launch Post', platform: 'Instagram', image: 'https://images.pexels.com/photos/20140155/pexels-photo-20140155.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Carousel: 5 SEO Tips', platform: 'Instagram', image: 'https://images.pexels.com/photos/3098620/pexels-photo-3098620.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Festival Creative', platform: 'Festival', image: 'https://images.pexels.com/photos/7742846/pexels-photo-7742846.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Engagement Post', platform: 'Facebook', image: 'https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
];

export const THUMBNAIL_CREATIVES: CreativeItem[] = [
  { title: 'SEO Tutorial Thumbnail', platform: 'YouTube', image: 'https://images.pexels.com/photos/28336275/pexels-photo-28336275.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Marketing Tips Thumbnail', platform: 'YouTube', image: 'https://images.pexels.com/photos/14772071/pexels-photo-14772071.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Blog Featured Image', platform: 'Featured', image: 'https://images.pexels.com/photos/5909/hands-woman-girl-view.jpg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Course Featured Image', platform: 'Featured', image: 'https://images.pexels.com/photos/5090705/pexels-photo-5090705.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
];

export const GRAPHIC_CREATIVES: CreativeItem[] = [
  { title: 'Event Poster', platform: 'Poster', image: 'https://images.pexels.com/photos/3091203/pexels-photo-3091203.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Promo Banner', platform: 'Banner', image: 'https://images.pexels.com/photos/33289718/pexels-photo-33289718.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'Service Flyer', platform: 'Flyer', image: 'https://images.pexels.com/photos/35515543/pexels-photo-35515543.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
  { title: 'SEO Infographic', platform: 'Infographic', image: 'https://images.pexels.com/photos/7947705/pexels-photo-7947705.jpeg?auto=compress&cs=tinysrgb&h=650&w=650' },
];

export type AdCampaign = {
  name: string;
  ctr: string;
  cpc: string;
  conversions: string;
  spend: string;
  image: string;
};

export const AD_CAMPAIGNS: AdCampaign[] = [
  {
    name: 'Search — Brand Course',
    ctr: '7.8%',
    cpc: '$0.42',
    conversions: '218',
    spend: '$1,240',
    image: 'https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Display — Retargeting',
    ctr: '3.4%',
    cpc: '$0.28',
    conversions: '142',
    spend: '$860',
    image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Achievement = { value: string; label: string; icon: string };

export const ACHIEVEMENTS: Achievement[] = [
  { value: '+45%', label: 'Organic Traffic Growth', icon: 'TrendingUp' },
  { value: '18', label: 'Keywords on Page 1', icon: 'Search' },
  { value: '+18%', label: 'Better CTR', icon: 'MousePointerClick' },
  { value: '+62%', label: 'Website Visibility', icon: 'Eye' },
  { value: '120+', label: 'SEO Articles Published', icon: 'BookOpen' },
  { value: '30+', label: 'Happy Clients Served', icon: 'Heart' },
];

export type Reason = { title: string; description: string; icon: string };

export const HIRE_REASONS: Reason[] = [
  { title: 'Full-Funnel Expertise', description: 'From keyword research to conversion — one marketer covering the entire funnel.', icon: 'Layers' },
  { title: 'Data-Driven Decisions', description: 'Every recommendation backed by Analytics, Search Console, and SEMrush data.', icon: 'BarChart3' },
  { title: 'Creative + Technical', description: 'Equal strength in SEO fundamentals and scroll-stopping visual design.', icon: 'Palette' },
  { title: 'Proven Results', description: 'Consistent organic traffic, ranking, and CTR improvements across projects.', icon: 'TrendingUp' },
  { title: 'Clear Reporting', description: 'Transparent monthly reports that make ROI obvious to stakeholders.', icon: 'FileText' },
  { title: 'Fast Turnaround', description: 'Reliable delivery with well-structured workflows and quick revisions.', icon: 'Zap' },
  { title: 'Client-First Mindset', description: 'Genuine investment in your brand goals — not just tasks on a list.', icon: 'Heart' },
  { title: 'Always Learning', description: 'Continuously upskilling with certifications in Google Ads and Analytics.', icon: 'GraduationCap' },
];

export const PAGE_COUNT = 20;
