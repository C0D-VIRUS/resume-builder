
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

interface Template {
  id: string;
  name: string;
  image: string;
  category: string;
}

// Sample template data - in a real app, this would come from an API
const templates: Template[] = [
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
  },
  {
    id: '6',
    name: 'Minimalist',
    image: 'public/assets/img6.jpeg',
    category: 'Modern'
  },
  {
    id: '7',
    name: 'Bold',
    image: 'public/assets/img7.png',
    category: 'Creative'
  },
  {
    id: '8',
    name: 'Classic',
    image: 'public/assets/img8.jpeg',
    category: 'Traditional'
  },
  {
    id: '9',
    name: 'Modern',
    image: 'public/assets/img9.jpeg',
    category: 'Contemporary'
  }
];

const categories = [
  'All', 'Business', 'Design', 'IT & Engineering', 'Education', 
  'Leadership', 'Modern', 'Creative', 'Traditional', 'Contemporary'
];

const TemplatesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-brand-50 dark:bg-brand-900/20 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resume Templates</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Choose from our collection of professionally designed, ATS-optimized templates
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="search" 
                  placeholder="Search templates..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div 
                key={template.id}
                className="group cursor-pointer"
                onClick={() => handleTemplateClick(template)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-medium">{template.name}</h3>
                      <p className="text-white/80 text-sm">{template.category}</p>
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="mt-2 bg-white text-gray-900 hover:bg-gray-100"
                      >
                        Use This Template
                      </Button>
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 font-medium">{template.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{template.category}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No templates found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      
      {/* Preview Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedTemplate && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedTemplate.name} Template</DialogTitle>
              <DialogDescription>
                A professional resume template designed for {selectedTemplate.category} careers.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={selectedTemplate.image} 
                  alt={selectedTemplate.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{selectedTemplate.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  This template is perfect for professionals in the {selectedTemplate.category} sector looking to highlight their experience and skills in a clean, organized format.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Features:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>ATS-optimized structure</li>
                    <li>Clear section organization</li>
                    <li>Professional typography</li>
                    <li>Balanced white space</li>
                    <li>Customizable color accents</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-2">AI Recommendations:</h4>
                  <p className="text-brand-500 text-sm bg-brand-50 dark:bg-brand-900/20 p-3 rounded-lg">
                    This template works best when you highlight specific achievements with metrics and use industry keywords throughout your experience section.
                  </p>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button>
                Use This Template
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default TemplatesPage;
