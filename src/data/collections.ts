import { pickImage } from '../lib/assetImages';

export type CollectionCategory = 'marble-murti' | 'temple' | 'handicraft';

export type CollectionSubcategory = 'Marble Murti' | 'Bust' | 'Statue' | 'Temple' | 'Handicraft';

export type CollectionItem = {
  id: string;
  name: string;
  category: CollectionCategory;
  subcategory?: CollectionSubcategory;
  image: string;
  description: string;
  marbleType: string;
  size: string;
  sizeDetails: string[];
  marbleDetails: string[];
};

export type CategoryInfo = {
  slug: CollectionCategory;
  title: string;
  description: string;
  blurb: string;
  productInfo: string[];
};

export const COLLECTION_CATEGORIES: CategoryInfo[] = [
  {
    slug: 'marble-murti',
    title: 'Marble Murti, Bust & Statue',
    description: 'Sacred idols, portrait busts and commemorative statues.',
    blurb: 'From revered temple murtis to lifelike busts and monumental statues, every piece is hand-sculpted with devotion and precision by master artisans.',
    productInfo: [
      'All murtis, busts and statues are hand-carved from premium-grade Makrana, Vietnam or Rajnagar marble.',
      'Marble Murti sizes range from 12 inches to 36 inches. Custom dimensions are available on request.',
      'Busts are offered from 2 Feet to 3 Feet and ideal for memorials, offices and public spaces.',
      'Statues begin from 2 Feet. Vietnam Marble statues are available only from 3 Feet onwards.',
      'Surface finishes include natural polish, glossy polish, semi-matte and hand-painted gold ornamentation.',
    ],
  },
  {
    slug: 'temple',
    title: 'Marble Temples & Mandirs',
    description: 'Home and outdoor mandirs with intricate carvings and inlay work.',
    blurb: 'Traditional marble mandirs crafted for homes, gardens and institutions — featuring hand-carved pillars, jalis, domes and delicate pietra dura inlay.',
    productInfo: [
      'Home mandirs start from 2 Feet. Larger courtyard and institutional mandirs are custom-built to order.',
      'Available in Makrana, Vietnam and Rajnagar marble with optional gold-leaf gilding.',
      'Features can include engraved shlokas, floral inlay, jali screens, steps, drawers and dedicated shelves for prasadam.',
      'Installation support and panelling guidance is provided for every mandir order.',
    ],
  },
  {
    slug: 'handicraft',
    title: 'Handicrafts & Decorative Items',
    description: 'Pooja essentials, tabletops, clocks and carved marble accents.',
    blurb: 'A rich collection of handcrafted marble articles — from Ganesha chowkis and puja thalis to jewellery boxes, wall clocks and decorative latticed panels.',
    productInfo: [
      'Handicraft sizes vary by product and are quoted against the specific article.',
      'Common finishes include natural white marble, golden gilded edges and coloured inlay work.',
      'Perfect for festive gifting, corporate orders, wedding return gifts and home decoration.',
      'Bulk and custom orders are accepted with lead time depending on design complexity.',
    ],
  },
];

const slugifyName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const BUST_PRODUCT_NAMES = [
  'Ornate White Marble Deity Bust',
  'Marble Statesman in the Stone Yard bust',
  'Marble Deity Portrait with Serene Smile bust',
  'Marble Deity Relief Under Construction',
  'Ornate Hindu Deity Shrine Statue',
  'Ornate Indian Bridal Bust Statue',
  'Ornate White Marble Deity Shrine',
] as const;

const STATUE_PRODUCT_NAMES = [
  'Brightly Painted Namaste Statue in Stone Workshop',
  'Uniformed Gentleman Portrait',
  'Painted General in the Sculpture Studio',
  'Statue Workshop Portrait with Hindi Plaque',
] as const;

const buildMurtiItems = (): CollectionItem[] => {
  const names: Array<{ name: string; subcategory: CollectionSubcategory }> = [
    { name: 'Majestic Marble Durga on Lion', subcategory: 'Marble Murti' },
    { name: 'Gilded White Marble Ganesha Statue', subcategory: 'Marble Murti' },
    { name: 'Marble Krishna and Radha Statues', subcategory: 'Marble Murti' },
    { name: 'Marble Goddess Lakshmi Idol', subcategory: 'Marble Murti' },
    { name: 'Blessing Saint with Floral Garland', subcategory: 'Marble Murti' },
    { name: 'Goddess Lakshmi Marble Statue', subcategory: 'Marble Murti' },
    { name: 'Hanuman Statue in a Colorful Workshop', subcategory: 'Marble Murti' },
    { name: 'Hanuman Statue', subcategory: 'Marble Murti' },
    { name: 'Kali Statue with Golden Ornaments and Shiva Beneath', subcategory: 'Marble Murti' },
    { name: 'Kali Statue with Golden Ornaments', subcategory: 'Marble Murti' },
    { name: 'Lord Ganesha Marble Statue', subcategory: 'Marble Murti' },
    { name: 'Lord Hanuman Marble Statue', subcategory: 'Marble Murti' },
    { name: 'Marble Baby Deity with Golden Accents', subcategory: 'Marble Murti' },
    { name: 'Marble Buddha in a Stone-Carving Workshop', subcategory: 'Marble Murti' },
    { name: 'Marble Deities Against a Teal Wall', subcategory: 'Marble Murti' },
    { name: 'Marble Deities in a Weathered Shrine', subcategory: 'Marble Murti' },
    { name: 'Marble Deity Shrine with Golden Details', subcategory: 'Marble Murti' },
    { name: 'Marble Deity with Ornate Golden Crown', subcategory: 'Marble Murti' },
    { name: 'Marble Ganesha in the Stone Workshop', subcategory: 'Marble Murti' },
    { name: 'Marble Ganesha Statues in Repeating Rows', subcategory: 'Marble Murti' },
    { name: 'Marble Goddess and Lion Shrine Display', subcategory: 'Marble Murti' },
    { name: 'Marble Goddess Saraswati Idol', subcategory: 'Marble Murti' },
    { name: 'Marble Goddess with Veena in Workshop', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman in a Statue Workshop', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman Statue in Workshop Display', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman Statue with Golden Crown', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman with Mace and Mountain', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman with Mace and Mountain (2)', subcategory: 'Marble Murti' },
    { name: 'Marble Hanuman with Sacred Mountain', subcategory: 'Marble Murti' },
    { name: 'Marble Krishna and Radha Shrine Display', subcategory: 'Marble Murti' },
    { name: 'Marble Krishna and Radha Shrine', subcategory: 'Marble Murti' },
    { name: 'Marble Lord Rama Wall Clock', subcategory: 'Marble Murti' },
    { name: 'Marble Panchamukhi Hanuman Statue', subcategory: 'Marble Murti' },
    { name: 'Marble Radha Krishna Statue', subcategory: 'Marble Murti' },
    { name: 'Marble Saraswati with Veena', subcategory: 'Marble Murti' },
    { name: 'Marble Shiva in Serene Meditation', subcategory: 'Marble Murti' },
    { name: 'Marble Shiva', subcategory: 'Marble Murti' },
    { name: 'Meditating Buddha Marble Statue', subcategory: 'Marble Murti' },
    { name: 'Ornate Marble Deity Portraits Against Violet', subcategory: 'Marble Murti' },
    { name: 'Painted Hindu Deity Shrine Display', subcategory: 'Marble Murti' },
    { name: 'Painted Hindu Deity Statue Display', subcategory: 'Marble Murti' },
    { name: 'Painted Sage in the Sculpture Workshop', subcategory: 'Marble Murti' },
    { name: 'Regal Hanuman on a Jewelled Throne', subcategory: 'Marble Murti' },
    { name: 'Regal Maharaja on a Golden Throne', subcategory: 'Marble Murti' },
    { name: 'Sacred Krishna-Radha Altar Shrine', subcategory: 'Marble Murti' },
    { name: 'Sage Statue with Om Blessing in Workshop', subcategory: 'Marble Murti' },
    { name: 'Serene Marble Sage in Blessing Pose', subcategory: 'Marble Murti' },
    { name: 'Stone Sage Sculptor in Sunlit Yard', subcategory: 'Marble Murti' },
    { name: 'Three-Faced Marble Deity and Cow Companion', subcategory: 'Marble Murti' },
    { name: 'Vishwakarma Marble Statue', subcategory: 'Marble Murti' },
    { name: 'White Cow and Calf Sculpture', subcategory: 'Marble Murti' },
    { name: 'White Marble Buddha in a Sculpture Workshop', subcategory: 'Marble Murti' },
    { name: 'White Marble Deities Against Turquoise Wall', subcategory: 'Marble Murti' },
    { name: 'White Marble Deity with Offerings', subcategory: 'Marble Murti' },
    { name: 'White Marble Ganesha Workshop Sculpture', subcategory: 'Marble Murti' },
    { name: 'White Marble Goddess on Lion Mount', subcategory: 'Marble Murti' },
    { name: 'White Marble Goddess on Lion', subcategory: 'Marble Murti' },
    { name: 'White Marble Lord Shiva with Trident and Drum', subcategory: 'Marble Murti' },
    { name: 'White Marble Radha Krishna Under Ornate Arch', subcategory: 'Marble Murti' },
    { name: 'White Marble Sage in the Workshop', subcategory: 'Marble Murti' },
    ...BUST_PRODUCT_NAMES.map((name) => ({ name, subcategory: 'Bust' as const })),
    ...STATUE_PRODUCT_NAMES.map((name) => ({ name, subcategory: 'Statue' as const })),
  ];

  return names.map(({ name, subcategory }) => {
    const sizeDetails = subcategory === 'Bust' || subcategory === 'Statue' ? ['2 Feet to 3 Feet'] : ['12 Inches to 36 Inches'];
    const marbleDetails = ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'];
    const size = subcategory === 'Bust' || subcategory === 'Statue' ? '2 Feet to 3 Feet' : '12 Inches to 36 Inches';

    return {
      id: slugifyName(name),
      name,
      category: 'marble-murti' as CollectionCategory,
      subcategory,
      image: pickImage(name),
      description: `${subcategory} sculpted from premium marble with fine detailing and long-lasting polish finish.`,
      marbleType: 'Makrana Marble',
      size,
      sizeDetails,
      marbleDetails,
    };
  });
};

const buildTempleItems = (): CollectionItem[] => {
  const names = [
    'Marble Mandir with Deities and Sages',
    'Marble Nataraja Against Purple Backdrop',
    'Marble Pavilion Under Blue Skies',
    'Marble Shrine with Figurines and Herds',
    'Marble Shrine with Three Deities',
    'White Marble Mandir with Deity Niches',
    'White Marble Mandir with Floral Inlay',
    'White Marble Pavilion in Sunlit Courtyard',
    'White Marble Shrine Against Blue Wall',
    'White Marble Shrine with Seated Saint',
    'White Saint Statue with Sacred Garlands',
    'White Stone Deity Relief in a Workshop',
    'White Stone Temple Spire Against Blue Sky',
  ];

  return names.map((name) => ({
    id: slugifyName(name),
    name,
    category: 'temple' as CollectionCategory,
    subcategory: 'Temple' as CollectionSubcategory,
    image: pickImage(name),
    description: 'Hand-carved marble temple structure with decorative jali, pillars and optional pietra dura inlay work.',
    marbleType: 'Makrana Marble',
    size: 'Starts from 2 Feet',
    sizeDetails: ['Starts from 2 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
  }));
};

const buildHandicraftItems = (): CollectionItem[] => {
  const names = [
    'Carved White Lattice Panel in Workshop',
    'Decorative Marble Incense Holder',
    'Decorative Marble Kalash',
    'Dry Fruits Serving Platter',
    'Glossy Cow and Calf Figurine',
    'Golden Ganesha Shrine Statue',
    'Lion Sculptures in a Marble Workshop',
    'Marble Archer Relief in Progress',
    'Marble Chowki',
    'Marble Cow and Calf in Sunlight',
    'Marble Cow and Calf on Colourful Textiles',
    'Marble Cow and Calf on Textiles',
    'Marble Decorative Lantern',
    'Marble Decorative Storage Box with Lid',
    'Marble Deities in a Shrine Display',
    'Marble Designer Ganesha Idol on Chowki',
    'Marble Dry Fruit Box',
    'Marble Ganesh Table Clock with Chowki',
    'Marble Ganesha Decorative Box',
    'Marble Ganesha Diya Set with Chowki',
    'Marble Ganesha Diya Stand with Tray',
    'Marble Ganesha Idol on Hexagonal Chowki',
    'Marble Handcrafted Ganesh Idol',
    'Marble Lattice Screen in Workshop',
    'Marble Lions in a Sunlit Sculpture Yard',
    'Marble Lions in the Sculpture Yard',
    'Marble Lord Ganesha Idol on Decorative Chowki',
    'Marble Mughal Couple Flower',
    'Marble Peacock Decorative Wall Clock',
    'Marble Peacock Jewelry Box',
    'Marble Pen Holder',
    'Marble Pooja Thali Set with Kalash',
    'Marble Puja Thali Set',
    'Marble Puja Thali with Ganesha Design',
    'Marble Round Table Clock',
    'Marble Table Clock',
    'Ornate Floral Vine Marble Panel',
    'Ornate Quatrefoil Vent Grille',
    'Ornate White Balusters on Concrete',
    'Stacked Figures in White Relief',
    'Two Marble Deities in a Dance Pose',
    'White Marble Balusters in Workshop',
    'White Marble Carvings in Workshop',
    'White Quatrefoil Lattice Panel on Dusty Floor',
  ];

  return names.map((name) => ({
    id: slugifyName(name),
    name,
    category: 'handicraft' as CollectionCategory,
    subcategory: 'Handicraft' as CollectionSubcategory,
    image: pickImage(name),
    description: 'Handcrafted marble decorative article with polished finish; ideal for pooja, gifting and home decor.',
    marbleType: 'Makrana Marble',
    size: 'Available on demand',
    sizeDetails: ['Available on demand'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
  }));
};

export const COLLECTION_ITEMS: CollectionItem[] = [
  ...buildMurtiItems(),
  ...buildTempleItems(),
  ...buildHandicraftItems(),
];

const normalizeCategory = (category: string): CollectionCategory => {
  const c = category.toLowerCase();
  if (c === 'temple' || c === 'temples') return 'temple';
  if (c === 'handicraft' || c === 'handicrafts') return 'handicraft';
  return 'marble-murti';
};

export function getCategoryLabel(category: string): string {
  const info = COLLECTION_CATEGORIES.find((c) => c.slug === normalizeCategory(category));
  return info?.title ?? 'Collection';
}

export function getCollectionCategory(category: string): CategoryInfo | undefined {
  const slug = normalizeCategory(category);
  return COLLECTION_CATEGORIES.find((c) => c.slug === slug);
}

export function getCollectionItemsByCategory(category: string): CollectionItem[] {
  const slug = normalizeCategory(category);
  return COLLECTION_ITEMS.filter((item) => item.category === slug);
}

export function getProductById(id: string): CollectionItem | undefined {
  if (!id) return undefined;

  let raw = id;
  try {
    raw = decodeURIComponent(id);
  } catch { /* ignore */ }

  const slugCandidates: string[] = [];
  slugCandidates.push(raw.toLowerCase());
  slugCandidates.push(slugifyName(raw));
  slugCandidates.push(slugifyName(raw.replace(/[-_]+/g, ' ')));
  const baseName = raw.split('/').pop() ?? raw;
  slugCandidates.push(slugifyName(baseName));

  let best: CollectionItem | undefined;
  for (const candidate of slugCandidates) {
    if (!candidate) continue;
    const exact = COLLECTION_ITEMS.find((item) => item.id === candidate);
    if (exact) return exact;
  }
  for (const candidate of slugCandidates) {
    if (!candidate) continue;
    const sameSlug = COLLECTION_ITEMS.find((item) => slugifyName(item.name) === candidate);
    if (sameSlug) return sameSlug;
  }
  for (const candidate of slugCandidates) {
    if (!candidate) continue;
    const contains = COLLECTION_ITEMS.find(
      (item) => item.id.includes(candidate) || candidate.includes(item.id),
    );
    if (contains && !best) best = contains;
  }
  return best;
}

export function getProductRoute(item: CollectionItem): string {
  return `/product/${item.id}`;
}

const normalizeSearch = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export function searchProducts(query: string): CollectionItem[] {
  const q = normalizeSearch(query);
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);
  const scored = COLLECTION_ITEMS.map((item) => {
    const hay = [
      item.name,
      item.category,
      item.subcategory ?? '',
      item.description,
      item.marbleType,
      getCategoryLabel(item.category),
    ]
      .join(' ')
      .toLowerCase();

    let score = 0;
    terms.forEach((term) => {
      if (hay.includes(term)) score += 10;
      const words = hay.split(/[^a-z0-9]+/).filter(Boolean);
      if (words.some((w) => w === term)) score += 25;
    });

    if (terms.every((term) => hay.includes(term))) score += 50;

    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((s) => s.item);
}
