import { pickImage } from '../lib/assetImages';

export type CollectionCategory = 'marble-murti' | 'temple' | 'handicraft';

export type CollectionSubcategory = 'Marble Murti' | 'Bust' | 'Statue' | 'Temple' | 'Handicraft';

export type ProductVariant = {
  name: string;
  label?: string;
};

export type CollectionItem = {
  id: string;
  name: string;
  category: CollectionCategory;
  subcategory?: CollectionSubcategory;
  image: string;
  gallery?: string[];
  description: string;
  marbleType: string;
  size: string;
  sizeDetails: string[];
  marbleDetails: string[];
  price?: string;
  variants?: ProductVariant[];
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

const EXPLICIT_NEW_PRODUCTS: CollectionItem[] = [
  {
    id: slugifyName('Durga Mata Murti'),
    name: 'Durga Mata Murti',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Durga Devi Murti'),
    description: 'Sacred hand-carved Durga Mata Murti sculpted from premium Raj Nagar marble with intricate detailing and long-lasting polish finish.',
    marbleType: 'Raj Nagar Marble',
    size: '2.5 Feet',
    sizeDetails: ['2.5 Feet'],
    marbleDetails: ['Raj Nagar Marble', 'Makrana Marble', 'Vietnam Marble'],
    price: '₹60,000',
    variants: [
      { name: 'Ivory Durga Murti — Colour', label: 'Colour' },
      { name: 'Ivory Durga Murti — Without Colour', label: 'Without Colour' },
    ],
    gallery: [pickImage('Durga Devi Murti'), pickImage('Ivory Durga Murti')],
  },
  {
    id: slugifyName('Ivory Durga Murti — Colour'),
    name: 'Ivory Durga Murti — Colour',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Ivory Durga Murti'),
    description: 'Ivory finish Durga Mata Murti with hand-painted colour ornamentation; sculpted from Raj Nagar marble.',
    marbleType: 'Raj Nagar Marble',
    size: '2.5 Feet',
    sizeDetails: ['2.5 Feet'],
    marbleDetails: ['Raj Nagar Marble', 'Makrana Marble', 'Vietnam Marble'],
    price: '₹60,000',
  },
  {
    id: slugifyName('Ivory Durga Murti — Without Colour'),
    name: 'Ivory Durga Murti — Without Colour',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Ivory Durga Murti'),
    description: 'Ivory finish Durga Mata Murti with natural marble polish and no paint; sculpted from Raj Nagar marble.',
    marbleType: 'Raj Nagar Marble',
    size: '2.5 Feet',
    sizeDetails: ['2.5 Feet'],
    marbleDetails: ['Raj Nagar Marble', 'Makrana Marble', 'Vietnam Marble'],
    price: '₹60,000',
  },
  {
    id: slugifyName('Ornate Black Stone Krishna Murti'),
    name: 'Ornate Black Stone Krishna Murti',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Ornate Black Stone Krishna Murti'),
    description: 'Ornately sculpted Krishna Murti in polished black stone with divine proportions and rich detailing.',
    marbleType: 'Black Stone',
    size: '2.5 Feet',
    sizeDetails: ['2.5 Feet'],
    marbleDetails: ['Black Stone', 'Makrana Marble', 'Rajnagar Marble'],
    price: '₹50,000',
  },
  {
    id: slugifyName('Polished Black Stone Krishna Murti'),
    name: 'Polished Black Stone Krishna Murti',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Polished Black Stone Krishna Murti'),
    description: 'Highly polished black stone Krishna Murti with a glossy finish, chiselled with devotion and precision.',
    marbleType: 'Black Stone',
    size: '2.5 Feet',
    sizeDetails: ['2.5 Feet'],
    marbleDetails: ['Black Stone', 'Makrana Marble', 'Rajnagar Marble'],
    price: '₹50,000',
  },
  {
    id: slugifyName('Marble Mother Handicraft'),
    name: 'Marble Mother Handicraft',
    category: 'handicraft',
    subcategory: 'Handicraft',
    image: pickImage('Marble Mother Handicraft'),
    description: 'Handcrafted decorative marble Mother figurine in premium Makrana marble with a smooth hand polish.',
    marbleType: 'Makrana Marble',
    size: '9 Inches / 1 Foot',
    sizeDetails: ['9 Inches', '1 Foot'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹10,000',
  },
  {
    id: slugifyName('Khatu Shyam Ji'),
    name: 'Khatu Shyam Ji',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Khatu Shaym Jii Murti'),
    description: 'Sacred Khatu Shyam Ji Murti hand-carved from Raj Nagar marble with precise facial features and a divine glow.',
    marbleType: 'Raj Nagar Marble',
    size: '1 Foot',
    sizeDetails: ['1 Foot'],
    marbleDetails: ['Raj Nagar Marble', 'Makrana Marble', 'Vietnam Marble'],
    price: '₹10,000',
  },
  {
    id: slugifyName('Jugal Jodi'),
    name: 'Jugal Jodi',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Jugal jodi'),
    description: 'Traditional Jugal Jodi (Radha Krishna pair) murti handcrafted in Makrana marble with graceful poses and delicate ornamentation.',
    marbleType: 'Makrana Marble',
    size: '1.25 Feet',
    sizeDetails: ['1.25 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹15,000',
  },
  {
    id: slugifyName('Mahatma Statue'),
    name: 'Mahatma Statue',
    category: 'marble-murti',
    subcategory: 'Statue',
    image: pickImage('Mahatma statue'),
    description: 'Commemorative Mahatma statue hand-sculpted from Makrana marble, ideal for public spaces, offices and memorials.',
    marbleType: 'Makrana Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet', '2 Feet to 3 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹25,000',
  },
  {
    id: slugifyName('Shiv Parivar'),
    name: 'Shiv Parivar',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Shiv Parivar'),
    description: 'Hand-carved Shiv Parivar murti set in premium Makrana marble depicting Shiva, Parvati, Ganesha and Kartikeya.',
    marbleType: 'Makrana Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹75,000',
  },
  {
    id: slugifyName('Ganesh Murti'),
    name: 'Ganesh Murti',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Ganesh Murti'),
    description: 'Sacred hand-carved Ganesh Murti in Makrana marble with a serene face, decorative ornamentation and a lasting polish.',
    marbleType: 'Makrana Marble',
    size: '1 Foot',
    sizeDetails: ['1 Foot'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹18,000',
  },
  {
    id: slugifyName('Buddha Statue'),
    name: 'Buddha Statue',
    category: 'marble-murti',
    subcategory: 'Statue',
    image: pickImage('Budh statue'),
    description: 'Meditative Buddha statue handcrafted in Makrana marble with a peaceful meditative posture and polished finish.',
    marbleType: 'Makrana Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet', '2 Feet to 3 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹15,000',
  },
  {
    id: slugifyName('Brahma Ji'),
    name: 'Brahma Ji',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Bramahm Jii'),
    description: 'Divine Brahma Ji murti hand-sculpted from premium Vietnam marble with four faces, ceremonial attire and fine detailing.',
    marbleType: 'Vietnam Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet'],
    marbleDetails: ['Vietnam Marble', 'Makrana Marble', 'Rajnagar Marble'],
    price: '₹35,000',
  },
  {
    id: slugifyName('Bengali Durga'),
    name: 'Bengali Durga',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Bangali durga'),
    description: 'Traditional Bengali-style Durga Maa murti hand-carved in Makrana marble with a fierce yet graceful expression.',
    marbleType: 'Makrana Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹25,000',
  },
  {
    id: slugifyName('Sher Jodi'),
    name: 'Sher Jodi',
    category: 'marble-murti',
    subcategory: 'Statue',
    image: pickImage('Sher jodi'),
    description: 'Pair of hand-carved marble lion statues (Sher Jodi) in Raj Nagar marble, typically placed at mandir entrances and gates.',
    marbleType: 'Raj Nagar Marble',
    size: '1 Foot',
    sizeDetails: ['1 Foot', '2 Feet to 3 Feet'],
    marbleDetails: ['Raj Nagar Marble', 'Makrana Marble', 'Vietnam Marble'],
    price: '₹15,000',
  },
  {
    id: slugifyName('Mohan Ram Baba'),
    name: 'Mohan Ram Baba',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Mohan ram baba'),
    description: 'Blessed Mohan Ram Baba murti hand-sculpted in Makrana marble with a serene face and devotional posture.',
    marbleType: 'Makrana Marble',
    size: '1 Foot',
    sizeDetails: ['1 Foot'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹15,000',
  },
  {
    id: slugifyName('Lossy Saffron Monk Bust'),
    name: 'Lossy Saffron Monk Bust',
    category: 'marble-murti',
    subcategory: 'Bust',
    image: pickImage('lossy Saffron Monk Bust'),
    description: 'Hand-carved portrait bust of a Saffron Monk in Makrana marble, offering a meditative expression and refined contours.',
    marbleType: 'Makrana Marble',
    size: '1 Foot',
    sizeDetails: ['1 Foot', '2 Feet to 3 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹15,000',
  },
  {
    id: slugifyName('Dutt Bhagwan'),
    name: 'Dutt Bhagwan',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Dutt Bhagwan'),
    description: 'Sacred Dutt Bhagwan murti hand-carved in Makrana marble with traditional attire and a blessing mudra.',
    marbleType: 'Makrana Marble',
    size: '1.5 Feet',
    sizeDetails: ['1.5 Feet'],
    marbleDetails: ['Makrana Marble', 'Vietnam Marble', 'Rajnagar Marble'],
    price: '₹25,000',
  },
  {
    id: slugifyName('Shani Dev'),
    name: 'Shani Dev',
    category: 'marble-murti',
    subcategory: 'Marble Murti',
    image: pickImage('Shani dev'),
    description: 'Revered Shani Dev murti sculpted in black stone with traditional iconography, a divine aura and lasting polish.',
    marbleType: 'Black Stone',
    size: '1 Foot',
    sizeDetails: ['1 Foot'],
    marbleDetails: ['Black Stone', 'Makrana Marble', 'Rajnagar Marble'],
    price: '₹12,000',
  },
];

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

const EXPLICIT_NAME_SET = new Set(EXPLICIT_NEW_PRODUCTS.map((p) => p.name));

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

  return names
    .filter(({ name }) => !EXPLICIT_NAME_SET.has(name))
    .map(({ name, subcategory }) => {
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
    'Marble Lord Rama Wall Clock',
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

  return names
    .filter((name) => !EXPLICIT_NAME_SET.has(name))
    .map((name) => ({
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
  ...EXPLICIT_NEW_PRODUCTS,
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
