import { formatAssetTitle, getAssetPath, getFolderImages } from '../lib/assetImages';

export type CollectionCategorySlug = 'murtis' | 'temples' | 'handicraft';
export type CollectionSubcategory = 'Marble Murti' | 'Bust' | 'Statue';

export function slugifyProductName(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .trim();
}

export function getCategoryRouteSlug(category: CollectionCategorySlug | string) {
  const normalized = normalizeCategorySlug(category);

  if (normalized === 'murtis') {
    return 'marble-murti';
  }

  if (normalized === 'temples') {
    return 'temple';
  }

  if (normalized === 'handicraft') {
    return 'handicraft';
  }

  return 'collections';
}

export function getProductDetailRoute(category: CollectionCategorySlug | string, name: string) {
  return `/product/${getCategoryRouteSlug(category)}/${slugifyProductName(name)}`;
}

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
  sizeDetails: string[];
  marbleDetails: string[];
  subcategory?: CollectionSubcategory;
};

const collectionImages = getFolderImages('collections');

function isRelevantCollectionAsset(src: string) {
  const assetPath = getAssetPath(src).toLowerCase();
  return (
    assetPath.includes('/assets/collections/murti/') ||
    assetPath.includes('/assets/collections/temple/') ||
    assetPath.includes('/assets/collections/handicraft/')
  );
}

function getCategoryImages(category: CollectionCategorySlug) {
  return relevantCollectionImages.filter((src) => getCollectionImageCategory(src) === category);
}

const relevantCollectionImages = Array.from(
  new Set(
    collectionImages
      .filter((image) => isRelevantCollectionAsset(image))
      .sort((a, b) => (a.split('/').pop() ?? '').localeCompare(b.split('/').pop() ?? '')),
  ),
);

export function getCollectionImageCategory(src: string): CollectionCategorySlug {
  const assetPath = getAssetPath(src).toLowerCase();

  if (assetPath.includes('/assets/collections/murti/')) {
    return 'murtis';
  }

  if (assetPath.includes('/assets/collections/temple/')) {
    return 'temples';
  }

  if (assetPath.includes('/assets/collections/handicraft/')) {
    return 'handicraft';
  }

  return 'handicraft';
}

export function getCollectionSubcategory(src: string): CollectionSubcategory | undefined {
  const assetPath = getAssetPath(src).toLowerCase();

  if (!assetPath.includes('/assets/collections/murti/')) {
    return undefined;
  }

  if (assetPath.includes('/assets/collections/murti/bust/')) {
    return 'Bust';
  }

  if (assetPath.includes('/assets/collections/murti/statue/')) {
    return 'Statue';
  }

  return 'Marble Murti';
}

export const FEATURED_PRODUCT: CollectionItem | null = null;

export const COLLECTION_CATEGORIES: CollectionCategory[] = [
  {
    slug: 'murtis',
    title: 'Marble Murti',
    description: 'Devotional marble murtis, busts and statues crafted with care and reverence.',
    image: getCategoryImages('murtis')[0] ?? '',
    blurb: 'Browse marble idols, busts and statues in the dedicated murti collection.',
    productInfo: [
      'Available Sizes:',
      '• 12 inches to 36 inches',
      '• Custom sizes available on demand.',
      'Available Marble:',
      '• Makrana Marble',
      '• Vietnam Marble',
      '• Rajnagar Marble',
    ],
  },
  {
    slug: 'temples',
    title: 'Temple',
    description: 'Marble temple pieces with sculptural detailing and sacred form.',
    image: getCategoryImages('temples')[0] ?? '',
    blurb: 'Explore marble shrine and temple imagery curated for spiritual spaces.',
    productInfo: [
      'Available Sizes:',
      '• Starting from 2 feet',
      '• Larger sizes available on customer demand.',
      'Available Marble:',
      '• Makrana Marble',
      '• Vietnam Marble',
      '• Rajnagar Marble',
    ],
  },
  {
    slug: 'handicraft',
    title: 'Handicraft',
    description: 'Fine marble handicraft pieces created for decor, gifting and daily ritual.',
    image: getCategoryImages('handicraft')[0] ?? '',
    blurb: 'Discover marble table pieces, decorative accents and ritual objects.',
    productInfo: [
      'Available Marble:',
      '• Makrana Marble',
      '• Vietnam Marble',
      '• Rajnagar Marble',
      '• Sizes depend on the product and are available on customer demand.',
    ],
  },
];

function getItemMarbleType() {
  return 'Makrana Marble • Vietnam Marble • Rajnagar Marble';
}

function getItemAvailableSize(category: CollectionCategorySlug, subcategory?: CollectionSubcategory) {
  if (category === 'temples') {
    return 'Starting from 2 feet • Larger sizes available on customer demand.';
  }

  if (category === 'handicraft') {
    return 'Sizes depend on the product and are available on customer demand.';
  }

  if (subcategory === 'Bust') {
    return '2 feet to 3 feet • Custom sizes available on demand.';
  }

  if (subcategory === 'Statue') {
    return '2 feet to 3 feet • Vietnam Marble statues are available only from 3 feet and above • Custom sizes available on demand.';
  }

  return '12 inches to 36 inches • Custom sizes available on demand.';
}

function getItemSizeDetails(category: CollectionCategorySlug, subcategory?: CollectionSubcategory) {
  if (category === 'temples') {
    return ['Starting from 2 feet', 'Larger sizes available on customer demand.'];
  }

  if (category === 'handicraft') {
    return ['Sizes depend on the product', 'Available on customer demand.'];
  }

  if (subcategory === 'Bust') {
    return ['2 feet to 3 feet', 'Custom sizes available on demand.'];
  }

  if (subcategory === 'Statue') {
    return ['2 feet to 3 feet', 'Vietnam Marble statues are available only from 3 feet and above.', 'Custom sizes available on demand.'];
  }

  return ['12 inches to 36 inches', 'Custom sizes available on demand.'];
}

function getItemMarbleDetails() {
  return ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'];
}

export const COLLECTION_ITEMS: CollectionItem[] = relevantCollectionImages.map((image) => {
  const category = getCollectionImageCategory(image);

  const subcategory = getCollectionSubcategory(image);

  return {
    name: formatAssetTitle(image),
    description: 'Handcrafted marble artwork from the collection archive.',
    image,
    category,
    marbleType: getItemMarbleType(),
    availableSize: getItemAvailableSize(category, subcategory),
    sizeDetails: getItemSizeDetails(category, subcategory),
    marbleDetails: getItemMarbleDetails(),
    subcategory,
  } as CollectionItem;
});

function normalizeCategorySlug(slug: string): CollectionCategorySlug | undefined {
  const normalized = slug.toLowerCase();

  if (normalized === 'marble-murti' || normalized === 'murtis') {
    return 'murtis';
  }

  if (normalized === 'temple' || normalized === 'temples') {
    return 'temples';
  }

  if (normalized === 'handicraft') {
    return 'handicraft';
  }

  return undefined;
}

export function getCollectionCategory(slug: string) {
  const normalized = normalizeCategorySlug(slug);

  return COLLECTION_CATEGORIES.find((item) => item.slug === normalized);
}

export function getCollectionItemByRoute(category: string, productName: string) {
  const normalizedCategory = normalizeCategorySlug(category);

  if (!normalizedCategory) {
    return undefined;
  }

  return COLLECTION_ITEMS.find((item) => item.category === normalizedCategory && slugifyProductName(item.name) === productName.toLowerCase());
}

export function getCollectionItemsByCategory(slug: string) {
  const category = normalizeCategorySlug(slug);

  if (!category) {
    return [];
  }

  return COLLECTION_ITEMS.filter((item) => item.category === category);
}
