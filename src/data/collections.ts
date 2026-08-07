import { formatAssetTitle, getFolderImages } from '../lib/assetImages';

export type CollectionCategorySlug = 'murtis' | 'temples' | 'handicraft';

export type CollectionCategory = {
  slug: CollectionCategorySlug;
  title: string;
  description: string;
  image: string;
  blurb: string;
  productInfo: string[];
};

export type CollectionItem = {
  name: string;
  description: string;
  image: string;
  category: CollectionCategorySlug;
  marbleType: string;
  availableSize: string;
};

const collectionImages = getFolderImages('collections');

// Identify the featured product image (must match existing asset file)
const FEATURED_IMAGE_FILENAME = 'Marble Lord Rama Wall Clock.webp'.toLowerCase();
const FEATURED_IMAGE = collectionImages.find((src) => (src.split('/').pop() ?? '').toLowerCase() === FEATURED_IMAGE_FILENAME) ?? '';

export const FEATURED_PRODUCT: CollectionItem | null = FEATURED_IMAGE
  ? {
      name: formatAssetTitle(FEATURED_IMAGE),
      description:
        'Premium handcrafted marble wall clock featuring Lord Rama with elegant craftsmanship. Available in Makrana Marble, Vietnam Marble, and Rajnagar Marble. Customization available on demand.',
      image: FEATURED_IMAGE,
      category: 'handicraft',
      marbleType: 'Makrana Marble • Vietnam Marble • Rajnagar Marble',
      availableSize: 'Standard and custom handicraft sizes available on request.',
    }
  : null;

function getCategoryImages(category: CollectionCategorySlug) {
  return collectionImages.filter((src) => getCollectionImageCategory(src) === category);
}

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    slug: 'murtis',
    title: 'Murti',
    description: 'Sacred marble murtis, busts and statues carved with devotion and precision.',
    image: getCategoryImages('murtis')[0] ?? '',
    blurb: 'A curated selection of divine marble figures for homes, shrines and temples.',
    productInfo: [
      'Marble Murtis: Available from 12 inches to 36 inches. Larger sizes are available on customer demand.',
      'Marble Busts: Available from 2 feet to 3 feet. Larger/custom sizes are available on demand.',
      'Marble Statues: Available from 2 feet to 3 feet. Larger/custom sizes are available on demand. In Vietnam Marble, statues below 3 feet are not manufactured.',
      'Available in Makrana Marble, Vietnam Marble and Rajnagar Marble.',
    ],
  },
  {
    slug: 'temples',
    title: 'Temple',
    description: 'Luxurious marble temples carved with ornate pillars, domes and sacred detailing.',
    image: getCategoryImages('temples')[0] ?? '',
    blurb: 'Grand marble sanctuaries tailored to your space and devotional needs.',
    productInfo: [
      'Marble Temples: Starting size 2 feet.',
      'Larger sizes are made completely on customer demand.',
      'Available in Makrana Marble, Vietnam Marble and Rajnagar Marble.',
    ],
  },
  {
    slug: 'handicraft',
    title: 'Handicraft',
    description: 'Fine marble handicraft pieces that blend artistry with luxury and craftsmanship.',
    image: getCategoryImages('handicraft')[0] ?? '',
    blurb: 'Marble handicraft products designed for elegant interiors and meaningful gifting.',
    productInfo: [
      'Display all marble handicraft products.',
      'Available in Makrana Marble, Vietnam Marble and Rajnagar Marble.',
    ],
  },
];

import { getAssetPath } from '../lib/assetImages';

export function getCollectionImageCategory(src: string): CollectionCategorySlug {
  const normalizedSrc = src.toLowerCase();
  const assetPath = getAssetPath(src).toLowerCase();
  const filename = normalizedSrc.split('/').pop() ?? '';

  if (assetPath.includes('/assets/collections/murti/') || assetPath.includes('/collections/murti/')) {
    return 'murtis';
  }

  if (assetPath.includes('/assets/collections/temple/') || assetPath.includes('/collections/temple/')) {
    return 'temples';
  }

  if (assetPath.includes('/assets/collections/handicraft/') || assetPath.includes('/collections/handicraft/')) {
    return 'handicraft';
  }

  if (/(temple|mandir|pavilion|spire|altar|shrine|niche)/.test(filename)) {
    return 'temples';
  }

  if (/(handicraft|clock|box|lamp|holder|tray|thali|diya|planter|plate|plates|gift|chowki|storage|incense|mughal|peacock|pen|decorative|serving)/.test(filename)) {
    return 'handicraft';
  }

  if (/(murti|ganesh|hanuman|buddha|krishna|radha|shiv|durga|kali|deity|idol|statue|sage|saint|ram|vishwakarma|goddess|lord)/.test(filename)) {
    return 'murtis';
  }

  return 'handicraft';
}

function getItemMarbleType() {
  return 'Makrana Marble • Vietnam Marble • Rajnagar Marble';
}

function getItemAvailableSize(category: CollectionCategorySlug, name: string) {
  const normalized = name.toLowerCase();

  if (category === 'temples') {
    return 'Starting size 2 feet. Larger sizes on demand.';
  }

  if (category === 'handicraft') {
    return 'Standard and custom handicraft sizes available on request.';
  }

  if (category === 'murtis') {
    if (/(bust|portrait)/.test(normalized)) {
      return '2 to 3 feet. Larger/custom sizes available on demand.';
    }

    if (/(statue)/.test(normalized)) {
      return '2 to 3 feet. Larger/custom sizes available on demand.';
    }

    return '12 to 36 inches. Larger sizes are available on demand.';
  }

  return 'Custom sizes available on demand.';
}

function formatImageName(src: string) {
  return formatAssetTitle(src);
}

export const COLLECTION_ITEMS: CollectionItem[] = [
  // Place the featured product first when available (do not duplicate)
  ...(FEATURED_PRODUCT ? [FEATURED_PRODUCT] : []),
  ...collectionImages
    .filter((image) => image !== FEATURED_IMAGE)
    .map((image) => {
      const name = formatImageName(image);
      const category = getCollectionImageCategory(image);

      return {
        name,
        description: 'Handcrafted marble artwork from the collection archive.',
        image,
        category,
        marbleType: getItemMarbleType(),
        availableSize: getItemAvailableSize(category, name),
      } as CollectionItem;
    }),
];

export function getCollectionCategory(slug: string) {
  return COLLECTION_CATEGORIES.find((item) => item.slug === slug);
}

export function getCollectionItemsByCategory(slug: string) {
  const category = slug as CollectionCategorySlug;

  return COLLECTION_ITEMS.filter((item) => item.category === category);
}
