const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'iuzlvbcj';

const IMAGE_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const VIDEO_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;

export type CloudinaryWidth = 300 | 400 | 600 | 800 | 1200 | 1600 | 2000;

export function cloudinaryImage(publicId: string, width?: CloudinaryWidth) {
  const transformation = width ? `f_auto,q_auto,w_${width}` : `f_auto,q_auto`;
  return `${IMAGE_BASE}/${transformation}/${publicId}`;
}

export function cloudinaryVideo(publicId: string) {
  return `${VIDEO_BASE}/${publicId}`;
}

export function cloudinaryProductImage(publicId: string) {
  return cloudinaryImage(publicId, 600);
}

export function cloudinaryThumbnail(publicId: string) {
  return cloudinaryImage(publicId, 400);
}

export function cloudinaryBanner(publicId: string) {
  return cloudinaryImage(publicId, 1600);
}

export function cloudinaryLogo() {
  return cloudinaryImage('logo', 300);
}

export function cloudinaryHeroVideo() {
  return cloudinaryVideo('banner');
}

export function getCloudName() {
  return CLOUD_NAME;
}
