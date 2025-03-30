
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Save, 
  Download, 
  Settings, 
  FileText,
  Sparkles,
  PlusCircle,
  GripVertical,
  X,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResumeSection {
  id: string;
  type: 'contact' | 'summary' | 'experience' | 'education' | 'skills' | 'projects' | 'custom';
  title: string;
  content: any;
  visible: boolean;
}

const EditorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('content');
  const [showAIPanel, setShowAIPanel] = useState(true);
  
  // Sample resume data
  const [resumeSections, setResumeSections] = useState<ResumeSection[]>([
    {
      id: 'contact',
      type: 'contact',
      title: 'Contact Information',
      content: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '(555) 123-4567',
        location: 'New York, NY',
        linkedin: 'linkedin.com/in/johndoe'
      },
      visible: true
    },
    {
      id: 'summary',
      type: 'summary',
      title: 'Professional Summary',
      content: {
        text: 'Innovative software developer with 5+ years of experience building scalable applications and leading development teams. Proficient in JavaScript, React, and Node.js with a strong focus on code quality and user experience.'
      },
      visible: true
    },
    {
      id: 'experience',
      type: 'experience',
      title: 'Work Experience',
      content: [
        {
          id: 'exp1',
          company: 'Tech Solutions Inc.',
          position: 'Senior Software Developer',
          startDate: 'Jan 2020',
          endDate: 'Present',
          location: 'New York, NY',
          description: 'Lead developer for client-facing web applications, managing a team of 5 engineers. Improved site performance by 40% through code optimization and implemented CI/CD pipelines.',
          achievements: [
            'Rebuilt the main application using React and TypeScript, reducing load time by 60%',
            'Implemented automated testing, achieving 85% code coverage',
            'Led migration from monolith to microservices architecture'
          ]
        },
        {
          id: 'exp2',
          company: 'Digital Innovators',
          position: 'Frontend Developer',
          startDate: 'Mar 2018',
          endDate: 'Dec 2019',
          location: 'Boston, MA',
          description: 'Developed responsive web applications using React and Redux. Collaborated with UX team to implement design systems.',
          achievements: [
            'Created reusable component library used across 12 different projects',
            'Optimized application performance resulting in 25% faster load times',
            'Mentored 3 junior developers'
          ]
        }
      ],
      visible: true
    }
  ]);
  
  // Sample AI suggestions
  const aiSuggestions = [
    {
      id: 'suggestion1',
      section: 'summary',
      original: 'Innovative software developer with 5+ years of experience building scalable applications and leading development teams.',
      suggested: 'Results-driven software developer with 5+ years of experience architecting scalable cloud applications and leading high-performance development teams that consistently deliver ahead of schedule.',
      type: 'enhancement'
    },
    {
      id: 'suggestion2',
      section: 'experience',
      original: 'Rebuilt the main application using React and TypeScript',
      suggested: 'Architected and rebuilt the main customer-facing application using React and TypeScript, resulting in 60% faster load times and 35% increase in user retention',
      type: 'quantify'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/account">
                <ArrowLeft size={16} className="mr-1" />
                <span>Back</span>
              </a>
            </Button>
            <div>
              <Input 
                className="h-8 text-lg font-medium border-0 focus-visible:ring-0 p-0 bg-transparent w-auto"
                defaultValue="Software Developer Resume"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full flex items-center">
              <CheckCircle size={12} className="mr-1" />
              Saved
            </span>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Resume Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Sparkles size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>AI Suggestions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download size={16} />
              <span>Export</span>
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Editor Column */}
            <div className="lg:w-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="border-b border-gray-200 dark:border-gray-700">
                    <TabsList className="h-12">
                      <TabsTrigger value="content" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">
                        Content
                      </TabsTrigger>
                      <TabsTrigger value="design" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">
                        Design
                      </TabsTrigger>
                      <TabsTrigger value="settings" className="data-[state=active]:border-b-2 data-[state=active]:border-brand-500 rounded-none">
                        Settings
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="content" className="mt-6 space-y-6">
                    {resumeSections.map((section) => (
                      <div 
                        key={section.id} 
                        className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                      >
                        {/* Section Header */}
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <GripVertical size={16} className="text-gray-400 cursor-move" />
                            <h3 className="font-medium">{section.title}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <X size={16} />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Section Content */}
                        <div className="p-4">
                          {section.type === 'contact' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="name" className="text-sm font-medium mb-1 block">Name</label>
                                <Input id="name" defaultValue={section.content.name} />
                              </div>
                              <div>
                                <label htmlFor="email" className="text-sm font-medium mb-1 block">Email</label>
                                <Input id="email" type="email" defaultValue={section.content.email} />
                              </div>
                              <div>
                                <label htmlFor="phone" className="text-sm font-medium mb-1 block">Phone</label>
                                <Input id="phone" defaultValue={section.content.phone} />
                              </div>
                              <div>
                                <label htmlFor="location" className="text-sm font-medium mb-1 block">Location</label>
                                <Input id="location" defaultValue={section.content.location} />
                              </div>
                              <div className="md:col-span-2">
                                <label htmlFor="linkedin" className="text-sm font-medium mb-1 block">LinkedIn</label>
                                <Input id="linkedin" defaultValue={section.content.linkedin} />
                              </div>
                            </div>
                          )}
                          
                          {section.type === 'summary' && (
                            <div>
                              <label htmlFor="summary" className="text-sm font-medium mb-1 block">Summary</label>
                              <Textarea 
                                id="summary"
                                defaultValue={section.content.text}
                                rows={4}
                                className="resize-none"
                              />
                              <div className="mt-2 flex justify-end">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="flex items-center gap-1 text-brand-500"
                                >
                                  <Sparkles size={14} />
                                  <span>Get AI Suggestions</span>
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          {section.type === 'experience' && (
                            <div className="space-y-6">
                              {section.content.map((exp: any, index: number) => (
                                <div key={exp.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                      <label className="text-sm font-medium mb-1 block">Company</label>
                                      <Input defaultValue={exp.company} />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-1 block">Position</label>
                                      <Input defaultValue={exp.position} />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-1 block">Start Date</label>
                                      <Input defaultValue={exp.startDate} />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-1 block">End Date</label>
                                      <Input defaultValue={exp.endDate} />
                                    </div>
                                    <div className="md:col-span-2">
                                      <label className="text-sm font-medium mb-1 block">Location</label>
                                      <Input defaultValue={exp.location} />
                                    </div>
                                  </div>
                                  
                                  <div className="mb-4">
                                    <label className="text-sm font-medium mb-1 block">Description</label>
                                    <Textarea 
                                      defaultValue={exp.description}
                                      rows={3}
                                      className="resize-none"
                                    />
                                  </div>
                                  
                                  <div>
                                    <label className="text-sm font-medium mb-1 block">Achievements</label>
                                    {exp.achievements.map((achievement: string, i: number) => (
                                      <div key={i} className="flex items-center gap-2 mb-2">
                                        <Input defaultValue={achievement} />
                                        <Button variant="ghost" size="icon" className="text-red-500">
                                          <X size={16} />
                                        </Button>
                                      </div>
                                    ))}
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="mt-2 flex items-center gap-1"
                                    >
                                      <PlusCircle size={14} />
                                      <span>Add Achievement</span>
                                    </Button>
                                  </div>
                                </div>
                              ))}
                              
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full mt-4 flex items-center justify-center gap-1"
                              >
                                <PlusCircle size={14} />
                                <span>Add Experience</span>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-1"
                    >
                      <PlusCircle size={16} />
                      <span>Add Section</span>
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="design" className="mt-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="font-medium mb-4">Template Style</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Professional', 'Modern', 'Creative', 'Simple'].map((template) => (
                          <div
                            key={template}
                            className={`
                              aspect-[3/4] border-2 rounded-md overflow-hidden cursor-pointer
                              ${template === 'Professional' ? 'border-brand-500' : 'border-transparent hover:border-gray-300'}
                            `}
                          >
                            <div className="h-full bg-white dark:bg-gray-800 flex items-center justify-center">
                              <FileText className={`h-8 w-8 ${template === 'Professional' ? 'text-brand-500' : 'text-gray-400'}`} />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 text-center">
                              {template}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium mb-4">Colors</h3>
                        <div className="flex flex-wrap gap-3">
                          {['#9b87f5', '#3b82f6', '#10b981', '#f97316', '#8b5cf6'].map((color) => (
                            <div 
                              key={color}
                              className={`
                                h-6 w-6 rounded-full cursor-pointer border
                                ${color === '#9b87f5' ? 'ring-2 ring-offset-2 ring-brand-500' : 'hover:scale-110'}
                              `} 
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium mb-4">Fonts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Headings</label>
                            <select className="w-full rounded-md border border-gray-300 dark:border-gray-700 py-2 px-3">
                              <option>Playfair Display</option>
                              <option>Inter</option>
                              <option>Roboto</option>
                              <option>Montserrat</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Body Text</label>
                            <select className="w-full rounded-md border border-gray-300 dark:border-gray-700 py-2 px-3">
                              <option>Inter</option>
                              <option>Roboto</option>
                              <option>Open Sans</option>
                              <option>Lato</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-6">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                      <h3 className="font-medium mb-4">Resume Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Resume Title</label>
                          <Input defaultValue="Software Developer Resume" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Target Role</label>
                          <Input defaultValue="Senior Software Engineer" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 flex items-center justify-between">
                            <span>Page Size</span>
                            <span className="text-xs text-gray-500">Professional tip: Keep your resume to 1 page</span>
                          </label>
                          <select className="w-full rounded-md border border-gray-300 dark:border-gray-700 py-2 px-3">
                            <option>US Letter (8.5" x 11")</option>
                            <option>A4 (210mm x 297mm)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-medium mb-4">Privacy Settings</h3>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Allow AI to analyze my resume</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Enable AI-powered suggestions and improvements
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Preview & AI Column */}
            <div className="lg:w-1/2 space-y-6">
              {/* Resume Preview */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="border-b border-gray-200 dark:border-gray-700 py-3 px-4 flex items-center justify-between">
                  <h3 className="font-medium">Preview</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download size={16} className="mr-1" />
                      <span>Export PDF</span>
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center min-h-[600px]">
                  <div className="w-full max-w-[600px] aspect-[1/1.4] bg-white dark:bg-gray-800 shadow-lg">
                    {/* This would be the actual resume preview */}
                    <div className="p-6">
                      <h1 className="text-2xl font-bold mb-1">John Doe</h1>
                      <div className="flex flex-wrap text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="mr-3">john.doe@example.com</span>
                        <span className="mr-3">(555) 123-4567</span>
                        <span>New York, NY</span>
                      </div>
                      
                      <div className="mb-4">
                        <h2 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400 border-b border-brand-200 dark:border-brand-800 pb-1">Professional Summary</h2>
                        <p className="text-sm">
                          Innovative software developer with 5+ years of experience building scalable applications and leading development teams. Proficient in JavaScript, React, and Node.js with a strong focus on code quality and user experience.
                        </p>
                      </div>
                      
                      <div>
                        <h2 className="text-lg font-semibold mb-2 text-brand-600 dark:text-brand-400 border-b border-brand-200 dark:border-brand-800 pb-1">Experience</h2>
                        
                        <div className="mb-3">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">Senior Software Developer</h3>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Jan 2020 - Present</span>
                          </div>
                          <div className="flex justify-between items-start text-sm mb-1">
                            <span className="font-medium">Tech Solutions Inc.</span>
                            <span className="text-gray-600 dark:text-gray-400">New York, NY</span>
                          </div>
                          <p className="text-sm mb-2">
                            Lead developer for client-facing web applications, managing a team of 5 engineers. Improved site performance by 40% through code optimization and implemented CI/CD pipelines.
                          </p>
                          <ul className="text-sm list-disc list-inside">
                            <li>Rebuilt the main application using React and TypeScript, reducing load time by 60%</li>
                            <li>Implemented automated testing, achieving 85% code coverage</li>
                            <li>Led migration from monolith to microservices architecture</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">Frontend Developer</h3>
                            <span className="text-sm text-gray-600 dark:text-gray-400">Mar 2018 - Dec 2019</span>
                          </div>
                          <div className="flex justify-between items-start text-sm mb-1">
                            <span className="font-medium">Digital Innovators</span>
                            <span className="text-gray-600 dark:text-gray-400">Boston, MA</span>
                          </div>
                          <p className="text-sm mb-2">
                            Developed responsive web applications using React and Redux. Collaborated with UX team to implement design systems.
                          </p>
                          <ul className="text-sm list-disc list-inside">
                            <li>Created reusable component library used across 12 different projects</li>
                            <li>Optimized application performance resulting in 25% faster load times</li>
                            <li>Mentored 3 junior developers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Suggestions Panel */}
              {showAIPanel && (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                  <div className="border-b border-gray-200 dark:border-gray-700 py-3 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-500" />
                      <h3 className="font-medium">AI Suggestions</h3>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setShowAIPanel(false)}>
                      <X size={16} />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      {aiSuggestions.map((suggestion) => (
                        <div
                          key={suggestion.id}
                          className="border border-brand-200 dark:border-brand-800 rounded-lg p-4 bg-brand-50/50 dark:bg-brand-900/10"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={14} className="text-brand-500" />
                            <span className="text-sm font-medium">
                              {suggestion.type === 'enhancement' 
                                ? 'Enhance your writing'
                                : 'Add quantifiable metrics'}
                            </span>
                          </div>
                          
                          <div className="mb-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current:</p>
                            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                              {suggestion.original}
                            </p>
                          </div>
                          
                          <div className="mb-4">
                            <p className="text-sm text-brand-500 mb-1">Suggestion:</p>
                            <p className="text-sm bg-brand-50 dark:bg-brand-900/20 p-2 rounded font-medium">
                              {suggestion.suggested}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="outline" size="sm">
                              Ignore
                            </Button>
                            <Button size="sm">
                              Apply
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="text-center pt-2">
                        <Button variant="ghost" size="sm" className="text-brand-500">
                          See More Suggestions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
