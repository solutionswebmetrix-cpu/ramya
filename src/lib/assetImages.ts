const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/\.[^/.]+$/, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const allAssets = Object.values(assetModules);

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
