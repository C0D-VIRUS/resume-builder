
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, FileText, MessageSquare, ChevronDown, ChevronRight, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface Resource {
  id: string;
  title: string;
  type: 'article' | 'example' | 'video';
  category: string;
  thumbnail?: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Sample resources data
const resources: Resource[] = [
  {
    id: '1',
    title: 'How to Write a Compelling Personal Statement',
    type: 'article',
    category: 'Writing Tips',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop',
    description: 'Learn how to craft a personal statement that captures attention and effectively communicates your value proposition.'
  },
  {
    id: '2',
    title: 'Software Engineer Resume Example',
    type: 'example',
    category: 'IT & Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    description: 'A professionally written software engineer resume with annotations highlighting key sections and effective techniques.'
  },
  {
    id: '3',
    title: 'The STAR Method for Interview Preparation',
    type: 'article',
    category: 'Interview Tips',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop',
    description: 'Master the STAR method (Situation, Task, Action, Result) to effectively structure your interview responses.'
  },
  {
    id: '4',
    title: 'Marketing Director Resume Example',
    type: 'example',
    category: 'Marketing & Sales',
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop',
    description: 'A detailed marketing director resume example showcasing how to highlight leadership and campaign success.'
  },
  {
    id: '5',
    title: 'Resume Layout Best Practices',
    type: 'video',
    category: 'Design Tips',
    thumbnail: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=400&auto=format&fit=crop',
    description: 'Visual guide to creating a clean, scannable resume layout that improves readability and engagement.'
  },
  {
    id: '6',
    title: 'Quantifying Achievements on Your Resume',
    type: 'article',
    category: 'Writing Tips',
    thumbnail: 'https://images.unsplash.com/photo-1565687768352-8c1b6e059f76?q=80&w=400&auto=format&fit=crop',
    description: 'Tips for translating your work experiences into measurable achievements with specific metrics.'
  }
];

// Sample FAQ data
const faqs: FAQ[] = [
  {
    question: 'What should I include in my resume summary?',
    answer: 'Your resume summary should be a 2-3 sentence highlight of your most relevant skills, experiences, and achievements. Focus on what makes you uniquely qualified for the role and include keywords relevant to the position. Avoid generic statements and instead use specific, impactful language that demonstrates your value proposition.'
  },
  {
    question: 'How long should my resume be?',
    answer: 'For most professionals, a one-page resume is ideal. If you have more than 10 years of relevant experience or are in a senior position, a two-page resume may be appropriate. Remember that hiring managers typically spend only 6-7 seconds on the initial resume scan, so being concise and highlighting your most important qualifications is crucial.'
  },
  {
    question: 'Should I include a photo on my resume?',
    answer: 'In the US, Canada, UK, and Australia, including a photo on your resume is generally discouraged and may even lead to your application being rejected due to anti-discrimination laws. However, in some European countries and parts of Asia, photos are customary. Research the norms for your specific industry and geographic location.'
  },
  {
    question: 'How far back should my work history go?',
    answer: "As a general rule, include the last 10-15 years of relevant work experience. Older positions can be summarized briefly or omitted unless they demonstrate particularly valuable skills for the position you're applying for. Focus on highlighting your most recent and relevant experiences."
  },
  {
    question: 'How can I make my resume ATS-friendly?',
    answer: 'To make your resume ATS-friendly: 1) Use standard section headings like "Experience," "Education," and "Skills." 2) Incorporate keywords from the job description. 3) Use a clean, simple format without tables, headers/footers, or graphics. 4) Submit in .docx or .pdf format unless otherwise specified. 5) Include your contact information in the main body of the resume, not in headers.'
  }
];

const categories = [
  'All', 'Writing Tips', 'Design Tips', 'Interview Tips', 
  'IT & Engineering', 'Marketing & Sales', 'Finance', 
  'Healthcare', 'Education', 'Executive'
];

const CareerCenterPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (question: string) => {
    if (expandedFaq === question) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(question);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-brand-50 dark:bg-brand-900/20 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Career Center</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Expert resources, resume examples, and AI-powered assistance to advance your career
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="resources" className="space-y-8">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>FAQ</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>AI Chat</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  type="search" 
                  placeholder="Search resources..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select 
                  className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 w-full md:w-auto"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-400" />
              </div>
            </div>
            
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <div 
                    key={resource.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {resource.thumbnail && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span 
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            resource.type === 'article' ? 'bg-blue-100 text-blue-600' : 
                            resource.type === 'example' ? 'bg-green-100 text-green-600' : 
                            'bg-purple-100 text-purple-600'
                          } dark:bg-opacity-20`}
                        >
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">
                          {resource.category}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {resource.description}
                      </p>
                      <Button size="sm" className="w-full">
                        Read More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No resources found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters</p>
              </div>
            )}
          </TabsContent>
          
          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-6 max-w-3xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search frequently asked questions..." 
                className="pl-10"
              />
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <button 
                    className="w-full text-left px-6 py-4 flex items-center justify-between font-medium"
                    onClick={() => toggleFaq(faq.question)}
                  >
                    {faq.question}
                    {expandedFaq === faq.question ? (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {expandedFaq === faq.question && (
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* AI Chat Tab */}
          <TabsContent value="chat" className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="h-80 mb-4 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900">
                <div className="mb-4">
                  <div className="bg-brand-100 dark:bg-brand-900/40 p-3 rounded-lg inline-block max-w-[80%]">
                    <p className="text-sm">
                      Hello! I'm your AI career assistant. How can I help with your resume or job search today?
                    </p>
                  </div>
                </div>
                
                {/* We'd add actual chat messages here based on state in a real implementation */}
              </div>
              
              <div className="flex gap-2">
                <Textarea
                  placeholder="Ask me about resume writing, interview tips, or career advice..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="resize-none"
                />
                <Button size="icon" className="flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              <p className="text-xs text-center text-gray-500 mt-2">
                Powered by AI to provide personalized resume and career advice
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CareerCenterPage;
