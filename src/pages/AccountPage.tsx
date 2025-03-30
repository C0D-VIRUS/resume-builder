
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  FileText,
  User,
  Settings,
  Bell,
  Clock,
  BarChart3,
  ChevronRight,
  Plus,
  Download,
  Edit,
  Trash2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Resume {
  id: string;
  title: string;
  lastEdited: string;
  template: string;
  progress: number;
}

// Sample resume data
const resumes: Resume[] = [
  {
    id: '1',
    title: 'Software Developer Resume',
    lastEdited: '2 days ago',
    template: 'Professional',
    progress: 85,
  },
  {
    id: '2',
    title: 'Product Manager Resume',
    lastEdited: '1 week ago',
    template: 'Executive',
    progress: 100,
  },
  {
    id: '3',
    title: 'UX Designer Resume',
    lastEdited: '3 weeks ago',
    template: 'Creative',
    progress: 65,
  },
];

const AccountPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-800 flex items-center justify-center">
                  <User className="h-6 w-6 text-brand-500 dark:text-brand-300" />
                </div>
                <div>
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Premium Plan</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <Link to="/account" className="flex items-center gap-3 px-3 py-2 rounded-md bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-300 font-medium">
                  <FileText className="h-5 w-5" />
                  <span>My Resumes</span>
                </Link>
                <Link to="/account/profile" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <Link to="/account/settings" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
                <Link to="/account/notifications" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
                <Link to="/account/activity" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Clock className="h-5 w-5" />
                  <span>Activity</span>
                </Link>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">My Resumes</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Manage and edit your resumes
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button className="flex items-center gap-2">
                  <Plus size={16} />
                  <span>Create New Resume</span>
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All Resumes</TabsTrigger>
                <TabsTrigger value="recent">Recently Edited</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {resumes.map((resume) => (
                  <Card key={resume.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 p-6">
                        <div className="w-full md:w-1/4 flex-shrink-0">
                          <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <FileText className="h-6 w-6 text-gray-400" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium text-lg mb-2">{resume.title}</h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>Last edited: {resume.lastEdited}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <span>Template: {resume.template}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex items-center gap-2">
                              <div className="flex-grow bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-brand-500 h-2 rounded-full"
                                  style={{ width: `${resume.progress}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium">{resume.progress}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Edit size={14} />
                            <span>Edit</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2">
                            <Download size={14} />
                            <span>Download</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="recent">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    View your recently edited resumes here.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    View your completed resumes here.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="drafts">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    View your draft resumes here.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* AI Insights Card */}
            <Card className="mt-8 border-brand-200 dark:border-brand-800 bg-brand-50/50 dark:bg-brand-900/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-brand-500" />
                  <span>Resume Insights</span>
                </CardTitle>
                <CardDescription>
                  AI-powered analysis of your resume performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm mb-2">
                      <span className="font-medium">Resume Strength: </span>
                      <span className="text-green-600 dark:text-green-400 font-medium">Good</span>
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Your "Software Developer Resume" is well-structured but could use more quantifiable achievements in the experience section.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <p className="text-sm mb-2">
                      <span className="font-medium">Keyword Optimization: </span>
                      <span className="text-amber-600 dark:text-amber-400 font-medium">Needs Improvement</span>
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Consider adding more industry-specific keywords to improve ATS compatibility.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="ml-auto flex items-center gap-1 text-brand-500 hover:text-brand-600 dark:text-brand-400 p-0">
                  <span>View Full Analysis</span>
                  <ChevronRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
