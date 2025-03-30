
import React from "react";
import { Icon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  centered?: boolean;
  withBackground?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  columns = 3,
  centered = false,
  withBackground = false,
}) => {
  return (
    <section className={`${withBackground ? "bg-gray-50 dark:bg-gray-900" : ""} section-padding`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-8 md:gap-12`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${centered ? "text-center" : ""} p-6 rounded-xl transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800`}
            >
              <div 
                className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-100 dark:bg-brand-900/20 text-brand-600 dark:text-brand-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
