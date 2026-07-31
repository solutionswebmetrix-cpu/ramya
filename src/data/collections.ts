import { formatAssetTitle, getFolderImages } from '../lib/assetImages';

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

const collectionImages = getFolderImages('collections');

function getCategoryImages(category: CollectionCategorySlug) {
  return collectionImages.filter((src) => getCollectionImageCategory(src) === category);
}

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    slug: 'murtis',
    title: 'Murtis',
    description: 'Sacred marble idols crafted with graceful detail and devotional presence.',
    image: getCategoryImages('murtis')[0] ?? '',
    blurb: 'Divine forms for homes, temples and personal shrines.',
  },
  {
    slug: 'temples',
    title: 'Temples',
    description: 'Elegant marble temple architecture with intricate domes, pillars and sanctums.',
    image: getCategoryImages('temples')[0] ?? '',
    blurb: 'Statement sanctuaries that bring timeless grandeur to any space.',
  },
  {
    slug: 'meenakari',
    title: 'Meenakari',
    description: 'Hand-finished meenakari accents that bring vivid colour and royal heritage.',
    image: getCategoryImages('meenakari')[0] ?? '',
    blurb: 'Richly embellished decor pieces made for cherished interiors.',
  },
  {
    slug: 'onyx',
    title: 'Onyx',
    description: 'Translucent onyx pieces with luminous depth and refined luxury.',
    image: getCategoryImages('onyx')[0] ?? '',
    blurb: 'Softly glowing stonework for collectors and statement spaces.',
  },
  {
    slug: 'decor',
    title: 'Decor',
    description: 'Marble lamps, vases, planters and decorative objects for elevated living.',
    image: getCategoryImages('decor')[0] ?? '',
    blurb: 'Everyday elegance shaped in stone.',
  },
];

export function getCollectionImageCategory(src: string): CollectionCategorySlug {
  const normalized = src.toLowerCase();

  if (/(murti|ganesh|hanuman|buddha|krishna|radha|shiv|durga|kali|deity|idol|statue|sage|saint|ram)/.test(normalized)) {
    return 'murtis';
  }

  if (/(temple|mandir|pavilion|spire|altar|shrine|niche)/.test(normalized)) {
    return 'temples';
  }

  if (/(meenakari)/.test(normalized)) {
    return 'meenakari';
  }

  if (/(onyx|goblet|bowl|chess)/.test(normalized)) {
    return 'onyx';
  }

  if (/(decor|lamp|vase|planter|plate|plates|gift|handicraft|elephant|horse)/.test(normalized)) {
    return 'decor';
  }

  return 'decor';
}

function formatImageName(src: string) {
  return formatAssetTitle(src);
}

export const COLLECTION_ITEMS: CollectionItem[] = collectionImages.map((image) => ({
  name: formatImageName(image),
  description: 'Handcrafted marble artwork from the collection archive.',
  image,
  category: getCollectionImageCategory(image),
}));

export function getCollectionCategory(slug: string) {
  return COLLECTION_CATEGORIES.find((item) => item.slug === slug);
}

export function getCollectionItemsByCategory(slug: string) {
  const category = slug as CollectionCategorySlug;

  return COLLECTION_ITEMS.filter((item) => item.category === category);
}
