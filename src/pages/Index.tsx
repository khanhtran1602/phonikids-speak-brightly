
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CoreValues from '@/components/CoreValues';
import CourseSection from '@/components/CourseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <CoreValues />
      <CourseSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
