type AssetEntry = {
  src: string;
  path: string;
  name: string;
};

const rootAssetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const collectionAssetModules = import.meta.glob('../assets/collections/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const galleryAssetModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const assetEntries: AssetEntry[] = [
  ...Object.entries(collectionAssetModules),
  ...Object.entries(galleryAssetModules),
  ...Object.entries(rootAssetModules),
]
  .map(([path, src]) => ({
    src,
    path,
    name: path.split('/').pop() ?? '',
  }))
  .filter((entry, index, list) => list.findIndex((candidate) => candidate.src === entry.src) === index)
  .sort((a, b) => a.name.localeCompare(b.name));

const allAssets = assetEntries.map((entry) => entry.src);
const collectionAssets = Object.values(collectionAssetModules);
const galleryAssets = Object.values(galleryAssetModules);

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

export function formatAssetTitle(src: string) {
  const rawName = src.split('/').pop() ?? 'Collection piece';
  const decodedName = (() => {
    try {
      return decodeURIComponent(rawName);
    } catch {
      return rawName;
    }
  })();

  return decodedName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/%20/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
