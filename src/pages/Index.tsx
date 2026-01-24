import { Navigation } from '@/components/landing/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { CollectionSection } from '@/components/landing/CollectionSection';
import { ScienceSection } from '@/components/landing/ScienceSection';
import { CommunitySection } from '@/components/landing/CommunitySection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <CollectionSection />
        <ScienceSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
