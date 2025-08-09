import ParallaxHero from '../github-aukucnph/app/components/ParallaxHero';
import FeaturesSection from '../github-aukucnph/app/components/FeaturesSection';
import ProductOfTheWeek from '../github-aukucnph/app/components/ProductOfTheWeek';
import AffiliateSection from '../github-aukucnph/app/components/AffiliateSection';
import BlogSection from '../github-aukucnph/app/components/BlogSection';
import Footer from '../github-aukucnph/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParallaxHero />
      <FeaturesSection />
      <ProductOfTheWeek />
      <BlogSection />
      <AffiliateSection />
      <Footer />
    </main>
  );
}