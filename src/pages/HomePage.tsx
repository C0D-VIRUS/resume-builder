
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TemplateSlideshow from '@/components/TemplateSlideshow';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  PenTool, 
  LayoutTemplate, 
  Rocket, 
  CheckCircle2,
  Bot,
  FileText,
  Search,
  TrendingUp
} from 'lucide-react';

// Sample template data - in a real app, this would come from an API
const sampleTemplates = [
  {
    id: '1',
    name: 'Professional',
    image: 'public/assets/img1.jpeg',
    category: 'Business'
  },
  {
    id: '2',
    name: 'Creative',
    image: 'public/assets/img2.jpeg',
    category: 'Design'
  },
  {
    id: '3',
    name: 'Technical',
    image: 'public/assets/img3.jpeg',
    category: 'IT & Engineering'
  },
  {
    id: '4',
    name: 'Academic',
    image: 'public/assets/img4.jpeg',
    category: 'Education'
  },
  {
    id: '5',
    name: 'Executive',
    image: 'public/assets/img5.jpeg',
    category: 'Leadership'
  }
];

const features = [
  {
    title: 'AI-Powered Content',
    description: 'Our AI engine analyzes your experience and suggests powerful phrases and keywords tailored to your target role.',
    icon: <Bot size={24} />
  },
  {
    title: 'Modern Templates',
    description: 'Choose from 25+ professional, ATS-optimized templates designed for various industries and career levels.',
    icon: <LayoutTemplate size={24} />
  },
  {
    title: 'Smart Editor',
    description: 'Edit your resume with our intuitive interface featuring real-time suggestions and formatting assistance.',
    icon: <PenTool size={24} />
  },
  {
    title: 'ATS Optimization',
    description: 'Ensure your resume passes through Applicant Tracking Systems with our built-in keyword optimization.',
    icon: <Search size={24} />
  },
  {
    title: 'Career Insights',
    description: 'Get data-driven advice on improving your resume based on industry standards and hiring trends.',
    icon: <TrendingUp size={24} />
  },
  {
    title: 'Multiple Formats',
    description: 'Export your polished resume in various formats including PDF, Word, and plain text for different submission requirements.',
    icon: <FileText size={24} />
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Create your perfect resume with AI"
        subtitle="Craft a professional, ATS-optimized resume in minutes with our AI-powered builder. Stand out from the competition and land your dream job."
        ctaText="Build Your Resume"
        ctaLink="/signup"
        secondaryCtaText="Browse Templates"
        secondaryCtaLink="/templates"
        backgroundPattern="dots"
      />

      {/* Feature section */}
      <FeatureSection 
        title="Transform Your Job Search"
        description="Our AI-powered platform helps you create standout resumes that get noticed by hiring managers and pass through applicant tracking systems."
        features={features}
        centered={true}
      />

      {/* Templates showcase */}
      <TemplateSlideshow 
        templates={sampleTemplates}
        title="Professional Resume Templates"
        description="Choose from a variety of modern, ATS-friendly templates designed to highlight your strengths."
        onTemplateClick={(template) => console.log('Selected template:', template)}
      />

      {/* Testimonials section - simplified version */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Join thousands of professionals who have boosted their careers with our platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <p className="text-lg italic mb-4">
                  "ProFile's AI suggestions transformed my resume. I received interview calls from 3 top companies within a week of updating my resume!"
                </p>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, landed role at Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-brand-500 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your perfect resume?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of job seekers who have successfully landed their dream jobs with ProFile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="default" className="bg-white text-brand-600 hover:bg-gray-100">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
