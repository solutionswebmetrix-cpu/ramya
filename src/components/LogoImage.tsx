import { cloudinaryLogo } from '../lib/cloudinary';

export default function LogoImage() {
  return <img src={cloudinaryLogo()} alt="Ramya Marble Murti & Handicraft logo" className="h-[140px] w-[140px] md:h-[160px] md:w-[160px] object-contain" loading="eager" fetchPriority="high" />;
}
