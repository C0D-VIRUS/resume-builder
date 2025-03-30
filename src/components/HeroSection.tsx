
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundPattern?: "dots" | "grid" | "waves" | "none";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/signup",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundPattern = "dots",
}) => {
  return (
    <div className="relative overflow-hidden hero-gradient pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        {backgroundPattern === "dots" && (
          <div className="absolute inset-0" style={{ 
            backgroundImage: "radial-gradient(circle, #9b87f5 1px, transparent 1px)",
            backgroundSize: "30px 30px" 
          }} />
        )}
        {backgroundPattern === "grid" && (
          <div className="absolute inset-0" style={{ 
            backgroundImage: "linear-gradient(#9b87f5 1px, transparent 1px), linear-gradient(to right, #9b87f5 1px, transparent 1px)",
            backgroundSize: "40px 40px" 
          }} />
        )}
        {backgroundPattern === "waves" && (
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 50 C 200 150 400 0 600 100 C 800 200 1000 50 1200 100 L 1200 1000 L 0 1000 Z"
                fill="#9b87f5"
                fillOpacity="0.2"
              ></path>
              <path
                d="M 0 100 C 150 300 350 100 500 200 C 650 300 800 200 1000 250 L 1000 1000 L 0 1000 Z"
                fill="#9b87f5"
                fillOpacity="0.1"
              ></path>
            </svg>
          </div>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to={ctaLink}>
              <Button size="lg" className="rounded-full px-8 group">
                <span>{ctaText}</span>
                <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
          
          <div className="mt-4 inline-flex items-center space-x-2 text-brand-500 bg-brand-100/50 dark:bg-brand-900/20 px-4 py-2 rounded-full text-sm font-medium animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Sparkles size={16} className="animate-pulse-slow" />
            <span>Powered by advanced AI to boost your career prospects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
