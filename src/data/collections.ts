import { pickImage } from '../lib/assetImages';

export type CollectionCategorySlug = 'murtis' | 'temples' | 'meenakari' | 'onyx' | 'decor';

export type CollectionCategory = {
  slug: CollectionCategorySlug;
  title: string;
  description: string;
  image: string;
  blurb: string;
};

export type CollectionItem = {
  name: string;
  description: string;
  image: string;
  category: CollectionCategorySlug;
};

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    slug: 'murtis',
    title: 'Murtis',
    description: 'Sacred marble idols crafted with graceful detail and devotional presence.',
    image: pickImage(['ram darbar murti', 'ganesh idol']),
    blurb: 'Divine forms for homes, temples and personal shrines.',
  },
  {
    slug: 'temples',
    title: 'Temples',
    description: 'Elegant marble temple architecture with intricate domes, pillars and sanctums.',
    image: pickImage(['marble temple', 'pooja mandir']),
    blurb: 'Statement sanctuaries that bring timeless grandeur to any space.',
  },
  {
    slug: 'meenakari',
    title: 'Meenakari',
    description: 'Hand-finished meenakari accents that bring vivid colour and royal heritage.',
    image: pickImage(['meenakari decor', 'meenakari']),
    blurb: 'Richly embellished decor pieces made for cherished interiors.',
  },
  {
    slug: 'onyx',
    title: 'Onyx',
    description: 'Translucent onyx pieces with luminous depth and refined luxury.',
    image: pickImage(['onyx bowls', 'onyx chess set']),
    blurb: 'Softly glowing stonework for collectors and statement spaces.',
  },
  {
    slug: 'decor',
    title: 'Decor',
    description: 'Marble lamps, vases, planters and decorative objects for elevated living.',
    image: pickImage(['marble lamps', 'decorative plates']),
    blurb: 'Everyday elegance shaped in stone.',
  },
];

export const COLLECTION_ITEMS: CollectionItem[] = [
  { name: 'Ram Darbar Murti', description: 'A devotional composition of Ram, Sita, Lakshman and Hanuman in a majestic marble assembly.', category: 'murtis', image: pickImage(['ram darbar murti']) },
  { name: 'Radha Krishna Murti', description: 'A graceful marble depiction of the divine couple, finished with smooth lines and timeless charm.', category: 'murtis', image: pickImage(['radha krishna']) },
  { name: 'Ganesh Idol', description: 'A rich carvings of Lord Ganesha in polished Makrana marble, ideal for pooja corners.', category: 'murtis', image: pickImage(['ganesh idol', 'ganesh']) },
  { name: 'Hanuman Ji Murti', description: 'Bold and powerful, this handcrafted sculpture captures strength, devotion and calm focus.', category: 'murtis', image: pickImage(['murtis hanuman ji', 'hanuman']) },
  { name: 'Buddha in Marble', description: 'A serene marble bust that radiates stillness, balance and spiritual elegance.', category: 'murtis', image: pickImage(['buddha in marble', 'buddha']) },
  { name: 'Marble Pooja Mandir', description: 'An ornate home temple with carved pillars, arches and a sacred centrepiece.', category: 'temples', image: pickImage(['marble pooja mandir']) },
  { name: 'Marble Temple', description: 'A grand temple structure for homes, trusts and luxurious spiritual interiors.', category: 'temples', image: pickImage(['marble temple']) },
  { name: 'Meenakari Decor Panel', description: 'Vivid handcrafted meenakari detailing that transforms marble panels into heirloom art.', category: 'meenakari', image: pickImage(['meenakari decor', 'meenakari']) },
  { name: 'Meenakari Plates', description: 'Decorative marble plates with colourful meenakari inlays and polished finishing.', category: 'meenakari', image: pickImage(['decorative plates']) },
  { name: 'Onyx Bowls', description: 'Translucent bowls cut from premium onyx for luxury interiors and gifting.', category: 'onyx', image: pickImage(['onyx bowls']) },
  { name: 'Onyx Chess Set', description: 'Elegant onyx and marble chess pieces handcrafted for collectors and connoisseurs.', category: 'onyx', image: pickImage(['onyx chess set']) },
  { name: 'Onyx Goblets', description: 'Royal goblets with rich stone texture and soft natural glow.', category: 'onyx', image: pickImage(['onyx goblets']) },
  { name: 'Marble Lamps', description: 'Sculptural lamps that bring ambient shine to pooja rooms and living spaces.', category: 'decor', image: pickImage(['marble lamps']) },
  { name: 'Marble Vases', description: 'Refined vases with veined marble and balanced silhouettes for statement decor.', category: 'decor', image: pickImage(['marble vases']) },
  { name: 'Planters', description: 'Handcarved planters ideal for sacred corners, foyers and upscale interiors.', category: 'decor', image: pickImage(['planters']) },
];

export function getCollectionCategory(slug: string) {
  return COLLECTION_CATEGORIES.find((item) => item.slug === slug);
}

export function getCollectionItemsByCategory(slug: string) {
  return COLLECTION_ITEMS.filter((item) => item.category === slug);
}
