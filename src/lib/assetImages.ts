import { cloudinaryImage, CloudinaryWidth } from './cloudinary';

type AssetEntry = {
  src: string;
  path: string;
  name: string;
  publicId: string;
};

const LOCAL_ASSET_MODULES = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' }) as Record<string, string>;

const LOCAL_LEADERSHIP_MODULES = import.meta.glob('../assets/Leadership/*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' }) as Record<string, string>;

const localAssetUrlByBasename: Map<string, string> = new Map();
const registerLocalAssets = (modules: Record<string, string>) => {
  Object.entries(modules).forEach(([modulePath, url]) => {
    const segments = modulePath.split('/');
    const basename = segments[segments.length - 1] ?? '';
    localAssetUrlByBasename.set(basename, url);
  });
};
registerLocalAssets(LOCAL_ASSET_MODULES);
registerLocalAssets(LOCAL_LEADERSHIP_MODULES);

const LOCAL_SRC_ASSET_MODULES = import.meta.glob('../*.{png,jpg,jpeg,webp,avif}', { eager: true, as: 'url' }) as Record<string, string>;
registerLocalAssets(LOCAL_SRC_ASSET_MODULES);

const ASSET_RELATIVE_PATHS: string[] = [
  'Bangali durga.png',
  'Bramahm Jii.png',
  'Budh statue.png',
  'Dutt Bhagwan.png',
  'Durga Devi Murti.png',
  'Ganesh Murti.png',
  'Ivory Durga Murti.png',
  'Jugal jodi.png',
  'Khatu Shaym Jii Murti.png',
  'lossy Saffron Monk Bust.png',
  'Mahatma statue.png',
  'Marble Mother Handicraft.png',
  'Mohan ram baba.png',
  'Ornate Black Stone Krishna Murti.png',
  'Ornate Painted Hindu Mandir Shrine.png',
  'Ornate Painted Marble Mandir Shrine.png',
  'Ornate Marble Hindu Mandir Shrine.png',
  'Ornate Ram Sita Lakshman Shrine Diorama.png',
  'Ornate White Marble Hindu Mandir Shrine.png',
  'Polished Black Stone Krishna Murti.png',
  'Shani dev.png',
  'Sher jodi.png',
  'Shiv Parivar.png',
  'Vishnu and Lakshmi Murti.png',
  'White Marble Temple Altar Cutout.png',
  'Himani Sharma.jpeg',
  'Praveen Gaur.jpeg',
  'collections/handicraft/Carved White Lattice Panel in Workshop.webp',
  'collections/handicraft/Decorative Marble Incense Holder.webp',
  'collections/handicraft/Decorative Marble Kalash.webp',
  'collections/handicraft/Dry Fruits Serving Platter.webp',
  'collections/handicraft/Glossy Cow and Calf Figurine.webp',
  'collections/handicraft/Golden Ganesha Shrine Statue.webp',
  'collections/handicraft/Lion Sculptures in a Marble Workshop.webp',
  'collections/handicraft/Marble Archer Relief in Progress.webp',
  'collections/handicraft/Marble Chowki.webp',
  'collections/handicraft/Marble Cow and Calf in Sunlight.webp',
  'collections/handicraft/Marble Cow and Calf on Colourful Textiles.webp',
  'collections/handicraft/Marble Cow and Calf on Textiles.webp',
  'collections/handicraft/Marble Decorative Lantern.webp',
  'collections/handicraft/Marble Decorative Storage Box with Lid.webp',
  'collections/handicraft/Marble Deities in a Shrine Display.webp',
  'collections/handicraft/Marble Designer Ganesha Idol on Chowki.webp',
  'collections/handicraft/Marble Dry Fruit Box.webp',
  'collections/handicraft/Marble Ganesh Table Clock with Chowki.webp',
  'collections/handicraft/Marble Ganesha Decorative Box.webp',
  'collections/handicraft/Marble Ganesha Diya Set with Chowki.webp',
  'collections/handicraft/Marble Ganesha Diya Stand with Tray.webp',
  'collections/handicraft/Marble Ganesha Idol on Hexagonal Chowki.webp',
  'collections/handicraft/Marble Handcrafted Ganesh Idol.webp',
  'collections/handicraft/Marble Lattice Screen in Workshop.webp',
  'collections/handicraft/Marble Lions in a Sunlit Sculpture Yard.webp',
  'collections/handicraft/Marble Lions in the Sculpture Yard.webp',
  'collections/handicraft/Marble Lord Ganesha Idol on Decorative Chowki.webp',
  'collections/handicraft/Marble Mughal Couple Flower.webp',
  'collections/handicraft/Marble Peacock Decorative Wall Clock.webp',
  'collections/handicraft/Marble Peacock Jewelry Box.webp',
  'collections/handicraft/Marble Pen Holder.webp',
  'collections/handicraft/Marble Pooja Thali Set with Kalash.webp',
  'collections/handicraft/Marble Puja Thali Set.webp',
  'collections/handicraft/Marble Puja Thali with Ganesha Design.webp',
  'collections/handicraft/Marble Round Table Clock.webp',
  'collections/handicraft/Marble Table Clock.webp',
  'collections/handicraft/Ornate Floral Vine Marble Panel.webp',
  'collections/handicraft/Ornate Quatrefoil Vent Grille.webp',
  'collections/handicraft/Ornate White Balusters on Concrete.webp',
  'collections/handicraft/Stacked Figures in White Relief.webp',
  'collections/handicraft/Two Marble Deities in a Dance Pose.webp',
  'collections/handicraft/White Marble Balusters in Workshop.webp',
  'collections/handicraft/White Marble Carvings in Workshop.webp',
  'collections/handicraft/White Quatrefoil Lattice Panel on Dusty Floor.webp',
  'collections/murti/bust/Marble Deity Portrait with Serene Smile bust.webp',
  'collections/murti/bust/Marble Deity Relief Under Construction.webp',
  'collections/murti/bust/Marble Statesman in the Stone Yard bust.webp',
  'collections/murti/bust/Ornate Hindu Deity Shrine Statue.webp',
  'collections/murti/bust/Ornate Indian Bridal Bust Statue.webp',
  'collections/murti/bust/Ornate White Marble Deity Bust.webp',
  'collections/murti/bust/Ornate White Marble Deity Shrine.webp',
  'collections/murti/statue/Brightly Painted Namaste Statue in Stone Workshop.webp',
  'collections/murti/statue/Painted General in the Sculpture Studio.webp',
  'collections/murti/statue/Statue Workshop Portrait with Hindi Plaque.webp',
  'collections/murti/statue/Uniformed Gentleman Portrait.webp',
  'collections/murti/Blessing Saint with Floral Garland.webp',
  'collections/murti/Gilded White Marble Ganesha Statue.webp',
  'collections/murti/Goddess Lakshmi Marble Statue.webp',
  'collections/murti/Hanuman Statue in a Colorful Workshop.webp',
  'collections/murti/Hanuman Statue.webp',
  'collections/murti/Kali Statue with Golden Ornaments and Shiva Beneath.webp',
  'collections/murti/Kali Statue with Golden Ornaments.webp',
  'collections/murti/Lord Ganesha Marble Statue.webp',
  'collections/murti/Lord Hanuman Marble Statue.webp',
  'collections/murti/Majestic Marble Durga on Lion.webp',
  'collections/murti/Marble Baby Deity with Golden Accents.webp',
  'collections/murti/Marble Buddha in a Stone-Carving Workshop.webp',
  'collections/murti/Marble Deities Against a Teal Wall.webp',
  'collections/murti/Marble Deities in a Weathered Shrine.webp',
  'collections/murti/Marble Deity Shrine with Golden Details.webp',
  'collections/murti/Marble Deity with Ornate Golden Crown.webp',
  'collections/murti/Marble Ganesha in the Stone Workshop.webp',
  'collections/murti/Marble Ganesha Statues in Repeating Rows.webp',
  'collections/murti/Marble Goddess and Lion Shrine Display.webp',
  'collections/murti/Marble Goddess Lakshmi Idol.webp',
  'collections/murti/Marble Goddess Saraswati Idol.webp',
  'collections/murti/Marble Goddess with Veena in Workshop.webp',
  'collections/murti/Marble Hanuman in a Statue Workshop.webp',
  'collections/murti/Marble Hanuman Statue in Workshop Display.webp',
  'collections/murti/Marble Hanuman Statue with Golden Crown.webp',
  'collections/murti/Marble Hanuman with Mace and Mountain (2).webp',
  'collections/murti/Marble Hanuman with Mace and Mountain.webp',
  'collections/murti/Marble Hanuman with Sacred Mountain.webp',
  'collections/murti/Marble Krishna and Radha Shrine Display.webp',
  'collections/murti/Marble Krishna and Radha Shrine.webp',
  'collections/murti/Marble Krishna and Radha Statues.webp',
  'collections/murti/Marble Lord Rama Wall Clock.webp',
  'collections/murti/Marble Panchamukhi Hanuman Statue.webp',
  'collections/murti/Marble Radha Krishna Statue.webp',
  'collections/murti/Marble Saraswati with Veena.webp',
  'collections/murti/Marble Shiva in Serene Meditation.webp',
  'collections/murti/Marble Shiva.webp',
  'collections/murti/Meditating Buddha Marble Statue.webp',
  'collections/murti/Ornate Marble Deity Portraits Against Violet.webp',
  'collections/murti/Painted Hindu Deity Shrine Display.webp',
  'collections/murti/Painted Hindu Deity Statue Display.webp',
  'collections/murti/Painted Sage in the Sculpture Workshop.webp',
  'collections/murti/Regal Hanuman on a Jewelled Throne.webp',
  'collections/murti/Regal Maharaja on a Golden Throne.webp',
  'collections/murti/Sacred Krishna-Radha Altar Shrine.webp',
  'collections/murti/Sage Statue with Om Blessing in Workshop.webp',
  'collections/murti/Serene Marble Sage in Blessing Pose.webp',
  'collections/murti/Stone Sage Sculptor in Sunlit Yard.webp',
  'collections/murti/Three-Faced Marble Deity and Cow Companion.webp',
  'collections/murti/Vishwakarma Marble Statue.webp',
  'collections/murti/White Cow and Calf Sculpture.webp',
  'collections/murti/White Marble Buddha in a Sculpture Workshop.webp',
  'collections/murti/White Marble Deities Against Turquoise Wall.webp',
  'collections/murti/White Marble Deity with Offerings.webp',
  'collections/murti/White Marble Ganesha Workshop Sculpture.webp',
  'collections/murti/White Marble Goddess on Lion Mount.webp',
  'collections/murti/White Marble Goddess on Lion.webp',
  'collections/murti/White Marble Lord Shiva with Trident and Drum.webp',
  'collections/murti/White Marble Radha Krishna Under Ornate Arch.webp',
  'collections/murti/White Marble Sage in the Workshop.webp',
  'collections/temple/Marble Mandir with Deities and Sages.webp',
  'collections/temple/Marble Nataraja Against Purple Backdrop.webp',
  'collections/temple/Marble Pavilion Under Blue Skies.webp',
  'collections/temple/Marble Shrine with Figurines and Herds.webp',
  'collections/temple/Marble Shrine with Three Deities.webp',
  'collections/temple/White Marble Mandir with Deity Niches.webp',
  'collections/temple/White Marble Mandir with Floral Inlay.webp',
  'collections/temple/White Marble Pavilion in Sunlit Courtyard.webp',
  'collections/temple/White Marble Shrine Against Blue Wall.webp',
  'collections/temple/White Marble Shrine with Seated Saint.webp',
  'collections/temple/White Saint Statue with Sacred Garlands.webp',
  'collections/temple/White Stone Deity Relief in a Workshop.webp',
  'collections/temple/White Stone Temple Spire Against Blue Sky.webp',
  'gallery/Blessing Saint with Floral Garland.webp',
  'gallery/Brightly Painted Namaste Statue in Stone Workshop.webp',
  'gallery/Bronze Multi-Armed Deity Statue Against Blue Wall.webp',
  'gallery/Carved White Lattice Panel in Workshop.webp',
  'gallery/Colorful Hindu Deity Statue Display.webp',
  'gallery/Colorful Hindu Deity Under Ornate Arch.webp',
  'gallery/Dusty Stone Carving Workshop.webp',
  'gallery/Elderly Indian Woman Statue on Red Base.webp',
  'gallery/Four-Armed Sage Statue with Halo.webp',
  'gallery/Ganesha Idol in Ornate Splendor.webp',
  'gallery/Ganesha Statue with Golden Ornaments.webp',
  'gallery/Ganesha Statue Workshop Under Construction.webp',
  'gallery/Gilded White Marble Ganesha Statue.webp',
  'gallery/Glossy Cow and Calf Figurine.webp',
  'gallery/Golden Blessing in the Sculpture Workshop.webp',
  'gallery/Golden Ganesha Shrine Statue.webp',
  'gallery/Hanuman Shrine with Ornate Golden Details.webp',
  'gallery/Hanuman Statue in a Colorful Workshop.webp',
  'gallery/Hanuman Statue.webp',
  'gallery/Kali Statue with Golden Ornaments and Shiva Beneath.webp',
  'gallery/Kali Statue with Golden Ornaments.webp',
  'gallery/Lion Sculptures in a Marble Workshop.webp',
  'gallery/Majestic Marble Durga on Lion.webp',
  'gallery/Marble Archer Relief in Progress.webp',
  'gallery/Marble Baby Deity with Golden Accents.webp',
  'gallery/Marble Buddha in a Stone-Carving Workshop.webp',
  'gallery/Marble Cow and Calf in Sunlight.webp',
  'gallery/Marble Cow and Calf on Colourful Textiles.webp',
  'gallery/Marble Cow and Calf on Textiles.webp',
  'gallery/Marble Deities Against a Teal Wall.webp',
  'gallery/Marble Deities in a Shrine Display.webp',
  'gallery/Marble Deities in a Weathered Shrine.webp',
  'gallery/Marble Deity Portrait with Serene Smile.webp',
  'gallery/Marble Deity Relief Under Construction.webp',
  'gallery/Marble Deity Shrine with Golden Details.webp',
  'gallery/Marble Deity with Ornate Golden Crown.webp',
  'gallery/Marble Ganesha in the Stone Workshop.webp',
  'gallery/Marble Ganesha Statues in Repeating Rows.webp',
  'gallery/Marble Goddess and Lion Shrine Display.webp',
  'gallery/Marble Goddess with Veena in Workshop.webp',
  'gallery/Marble Hanuman in a Statue Workshop.webp',
  'gallery/Marble Hanuman Statue in Workshop Display.webp',
  'gallery/Marble Hanuman Statue with Golden Crown.webp',
  'gallery/Marble Hanuman with Mace and Mountain (2).webp',
  'gallery/Marble Hanuman with Mace and Mountain.webp',
  'gallery/Marble Hanuman with Sacred Mountain.webp',
  'gallery/Marble Krishna and Radha Shrine Display.webp',
  'gallery/Marble Krishna and Radha Shrine.webp',
  'gallery/Marble Krishna and Radha Statues.webp',
  'gallery/Marble Lattice Screen in Workshop.webp',
  'gallery/Marble Lions in a Sunlit Sculpture Yard.webp',
  'gallery/Marble Lions in the Sculpture Yard.webp',
  'gallery/Marble Mandir with Deities and Sages.webp',
  'gallery/Marble Nataraja Against Purple Backdrop.webp',
  'gallery/Marble Panchamukhi Hanuman Statue.webp',
  'gallery/Marble Pavilion Under Blue Skies.webp',
  'gallery/Marble Saraswati with Veena.webp',
  'gallery/Marble Shiva in Serene Meditation.webp',
  'gallery/Marble Shiva.webp',
  'gallery/Marble Shrine with Figurines and Herds.webp',
  'gallery/Marble Shrine with Three Deities.webp',
  'gallery/Marble Statesman in the Stone Yard.webp',
  'gallery/Military Statue in Sculpture Workshop.webp',
  'gallery/Ornate Floral Vine Marble Panel.webp',
  'gallery/Ornate Hindu Deity Shrine Statue.webp',
  'gallery/Ornate Indian Bridal Bust Statue.webp',
  'gallery/Ornate Marble Deity Portraits Against Violet.webp',
  'gallery/Ornate Quatrefoil Vent Grille.webp',
  'gallery/Ornate White Balusters on Concrete.webp',
  'gallery/Ornate White Marble Deity Bust.webp',
  'gallery/Ornate White Marble Deity Shrine.webp',
  'gallery/Painted General in the Sculpture Studio.webp',
  'gallery/Painted Hindu Deity Shrine Display.webp',
  'gallery/Painted Hindu Deity Statue Display.webp',
  'gallery/Painted Sage in the Sculpture Workshop.webp',
  'gallery/Regal Hanuman on a Jewelled Throne.webp',
  'gallery/Regal Maharaja on a Golden Throne.webp',
  'gallery/Sacred Krishna-Radha Altar Shrine.webp',
  'gallery/Sage Statue with Om Blessing in Workshop.webp',
  'gallery/Serene Marble Sage in Blessing Pose.webp',
  'gallery/Stacked Figures in White Relief.webp',
  'gallery/Statue Workshop Portrait with Hindi Plaque.webp',
  'gallery/Stone Sage Sculptor in Sunlit Yard.webp',
  'gallery/Three-Faced Marble Deity and Cow Companion.webp',
  'gallery/Two Marble Deities in a Dance Pose.webp',
  'gallery/Uniformed Gentleman Portrait.webp',
  'gallery/White Cow and Calf Sculpture.webp',
  'gallery/White Marble Balusters in Workshop.webp',
  'gallery/White Marble Buddha in a Sculpture Workshop.webp',
  'gallery/White Marble Carvings in Workshop.webp',
  'gallery/White Marble Deities Against Turquoise Wall.webp',
  'gallery/White Marble Deity on Stone Tiles.webp',
  'gallery/White Marble Deity with Offerings.webp',
  'gallery/White Marble Ganesha Workshop Sculpture.webp',
  'gallery/White Marble Goddess on Lion Mount.webp',
  'gallery/White Marble Goddess on Lion.webp',
  'gallery/White Marble Lord Shiva with Trident and Drum.webp',
  'gallery/White Marble Radha Krishna Under Ornate Arch.webp',
  'gallery/White Marble Sage in the Workshop.webp',
  'gallery/White Marble Shrine Against Blue Wall.webp',
  'gallery/White Marble Shrine with Seated Saint.webp',
  'gallery/White Quatrefoil Lattice Panel on Dusty Floor.webp',
  'gallery/White Saint Statue with Sacred Garlands.webp',
  'gallery/White Stone Deity Relief in a Workshop.webp',
  'gallery/White Stone Temple Spire Against Blue Sky.webp',
  'logo/logo.png',
];

function pickWidthForPath(relativePath: string): CloudinaryWidth | undefined {
  const lower = relativePath.toLowerCase();
  if (lower.includes('/gallery/') || lower.startsWith('gallery/')) {
    return 1200;
  }
  if (lower.includes('/collections/')) {
    return 600;
  }
  if (lower.includes('/logo/')) {
    return 300;
  }
  return 1200;
}

function toPublicId(relativePath: string): string {
  const segments = relativePath.split('/');
  const filename = segments[segments.length - 1] ?? '';
  const withoutExt = filename.replace(/\.[^/.]+$/, '');
  const withUnderscores = withoutExt.replace(/ /g, '_');
  const withoutParens = withUnderscores.replace(/[()]/g, '');
  return withoutParens;
}

const assetEntries: AssetEntry[] = ASSET_RELATIVE_PATHS.map((relativePath) => {
  const segments = relativePath.split('/');
  const name = segments[segments.length - 1] ?? '';
  const publicId = toPublicId(relativePath);
  const onlyBasename = segments.length === 1;
  let src: string;
  if (onlyBasename && localAssetUrlByBasename.has(name)) {
    src = localAssetUrlByBasename.get(name) as string;
  } else {
    src = cloudinaryImage(publicId, pickWidthForPath(relativePath));
  }
  return {
    publicId,
    path: `../assets/${relativePath}`,
    name,
    src,
  };
})
  .filter((entry, index, list) => list.findIndex((candidate) => candidate.src === entry.src) === index)
  .sort((a, b) => a.name.localeCompare(b.name));

const allAssets = assetEntries.map((entry) => entry.src);
const assetPathMap = new Map(allAssets.map((src, index) => [src, assetEntries[index].path]));
const collectionAssets = assetEntries
  .filter((entry) => entry.path.toLowerCase().includes('/assets/collections/'))
  .map((entry) => entry.src);
const galleryAssets = assetEntries
  .filter((entry) => entry.path.toLowerCase().includes('/assets/gallery/'))
  .map((entry) => entry.src);

export function getAssetPath(src: string) {
  return assetPathMap.get(src) ?? '';
}

export function getFolderImageEntries(folder: string) {
  const targetFolder = folder.toLowerCase();

  if (targetFolder === 'collections') {
    return assetEntries.filter((entry) => entry.path.toLowerCase().includes('/assets/collections/'));
  }

  if (targetFolder === 'gallery') {
    return assetEntries.filter((entry) => entry.path.toLowerCase().includes('/assets/gallery/'));
  }

  return assetEntries.filter((entry) => entry.path.toLowerCase().includes(`/assets/${targetFolder}/`));
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

export function pickImage(search: string | string[]) {
  const keywords = (Array.isArray(search) ? search : [search])
    .filter(Boolean)
    .map((value) => normalize(value));

  if (!keywords.length) return allAssets[0] ?? '';

  const scored = allAssets
    .map((src) => {
      const fileName = normalize(src.split('/').pop() ?? '');
      let score = 0;

      keywords.forEach((keyword) => {
        const keyWords = keyword.split(' ').filter(Boolean);
        const containsAllWords = keyWords.every((word) => fileName.includes(word));
        const containsAnyWord = keyWords.some((word) => fileName.includes(word));

        if (fileName === keyword) {
          score += 1000;
        } else if (containsAllWords) {
          score += 200 + keyWords.length * 25;
        } else if (containsAnyWord) {
          score += 40 + keyWords.filter((word) => fileName.includes(word)).length * 10;
        }
      });

      return { src, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored[0]?.score ? scored[0].src : allAssets[0] ?? '';
}

export function getAllImages() {
  return allAssets;
}

export function getFolderImages(folder: string) {
  const targetFolder = folder.toLowerCase();

  if (targetFolder === 'collections') {
    return collectionAssets;
  }

  if (targetFolder === 'gallery') {
    return galleryAssets;
  }

  return assetEntries
    .filter((entry) => entry.path.toLowerCase().includes(`/assets/${targetFolder}/`))
    .map((entry) => entry.src);
}

export function formatAssetTitle(srcOrPath: string) {
  const assetPath = getAssetPath(srcOrPath);
  const pathToUse = assetPath || srcOrPath;
  const rawName = (pathToUse.split('/').pop() ?? 'Collection piece').split('?')[0];
  const decodedName = (() => {
    try {
      return decodeURIComponent(rawName);
    } catch {
      return rawName;
    }
  })();

  const withoutExtension = decodedName.replace(/\.[^.]+$/, '');
  const normalized = withoutExtension
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/%20/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return normalized || 'Collection Piece';
}
