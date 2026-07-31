import { PortfolioDeck } from '@/components/portfolio/PortfolioDeck';
import { PAGE_COUNT } from '@/data/portfolioData';
import { Page1Cover } from '@/components/portfolio/pages/Page1Cover';
import { Page2About } from '@/components/portfolio/pages/Page2About';
import { Page3Skills } from '@/components/portfolio/pages/Page3Skills';
import { Page4Tools } from '@/components/portfolio/pages/Page4Tools';
import { Page5Education } from '@/components/portfolio/pages/Page5Education';
import { Page6Experience } from '@/components/portfolio/pages/Page6Experience';
import { Page7Services } from '@/components/portfolio/pages/Page7Services';
import { Page8SeoProjects } from '@/components/portfolio/pages/Page8SeoProjects';
import { Page9KeywordResearch } from '@/components/portfolio/pages/Page9KeywordResearch';
import { Page10OnPageSeo } from '@/components/portfolio/pages/Page10OnPageSeo';
import { Page11OffPageSeo } from '@/components/portfolio/pages/Page11OffPageSeo';
import { Page12BlogWriting } from '@/components/portfolio/pages/Page12BlogWriting';
import { Page13WebsiteContent } from '@/components/portfolio/pages/Page13WebsiteContent';
import { Page14SocialCreatives } from '@/components/portfolio/pages/Page14SocialCreatives';
import { Page15Thumbnails } from '@/components/portfolio/pages/Page15Thumbnails';
import { Page16GraphicDesign } from '@/components/portfolio/pages/Page16GraphicDesign';
import { Page17GoogleAds } from '@/components/portfolio/pages/Page17GoogleAds';
import { Page18Results } from '@/components/portfolio/pages/Page18Results';
import { Page19WhyHireMe } from '@/components/portfolio/pages/Page19WhyHireMe';
import { Page20Contact } from '@/components/portfolio/pages/Page20Contact';

/** Assembles all 20 A4 portfolio pages inside the on-screen deck viewer. */
export function PortfolioView({ onBack }: { onBack: () => void }) {
  const T = PAGE_COUNT;
  return (
    <PortfolioDeck onBack={onBack}>
      <Page1Cover total={T} />
      <Page2About total={T} />
      <Page3Skills total={T} />
      <Page4Tools total={T} />
      <Page5Education total={T} />
      <Page6Experience total={T} />
      <Page7Services total={T} />
      <Page8SeoProjects total={T} />
      <Page9KeywordResearch total={T} />
      <Page10OnPageSeo total={T} />
      <Page11OffPageSeo total={T} />
      <Page12BlogWriting total={T} />
      <Page13WebsiteContent total={T} />
      <Page14SocialCreatives total={T} />
      <Page15Thumbnails total={T} />
      <Page16GraphicDesign total={T} />
      <Page17GoogleAds total={T} />
      <Page18Results total={T} />
      <Page19WhyHireMe total={T} />
      <Page20Contact total={T} />
    </PortfolioDeck>
  );
}
