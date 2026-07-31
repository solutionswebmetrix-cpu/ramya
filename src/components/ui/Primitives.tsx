import { motion } from 'framer-motion';
import {
  Award,
  BarChart3,
  Bookmark,
  BookOpen,
  Compass,
  Eye,
  FileSearch,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Image as ImageIcon,
  Layers,
  Layout,
  Link2,
  LineChart,
  ListFilter,
  LucideProps,
  Mail,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  MousePointerClick,
  Palette,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  UserCircle,
  Wrench,
  Zap,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Award,
  BarChart3,
  Bookmark,
  BookOpen,
  Compass,
  Eye,
  FileSearch,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Image: ImageIcon,
  Layout,
  Layers,
  Link2,
  LineChart,
  ListFilter,
  Mail,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  MousePointerClick,
  Palette,
  PenLine,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  UserCircle,
  Wrench,
  Zap,
};

interface IconProps extends LucideProps {
  name: string;
}

/** Renders a lucide-react icon by string name, with a friendly fallback. */
export function Icon({ name, ...props }: IconProps) {
  const Cmp = ICONS[name];
  if (!Cmp) return <Sparkles {...props} />;
  return <Cmp {...props} />;
}

/** A reveal-on-scroll wrapper. Children fade + slide up when scrolled into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: React.ElementType;
}) {
  return (
    <Tag className={`reveal reveal-delay-${delay} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -6% 0px' }}
        transition={{ duration: 0.7, delay: delay * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

/** Decorative section heading with eyebrow + gradient title. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">
          <span className="h-px w-6 bg-brand-500/70" />
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base text-slate-400 sm:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
