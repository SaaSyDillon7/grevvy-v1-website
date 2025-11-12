import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <HowItWorks />
      <Results />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
