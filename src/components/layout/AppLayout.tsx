
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, BarChart, BadgeCheck, Sprout, Moon, Sun } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-eco-background dark:bg-slate-900 transition-colors duration-300">
      <header className="bg-white shadow-sm p-4 dark:bg-slate-800 dark:shadow-slate-700/30 transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-eco-primary dark:text-eco-secondary" />
            <h1 className="text-xl font-medium text-eco-primary dark:text-white">EcoTrack</h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-eco-primary hover:text-eco-secondary transition-colors dark:text-white">About</a>
              </li>
              <li>
                <a href="#" className="text-eco-primary hover:text-eco-secondary transition-colors dark:text-white">Resources</a>
              </li>
              <li>
                <button 
                  onClick={toggleDarkMode} 
                  className="p-2 rounded-full bg-eco-tertiary/10 hover:bg-eco-tertiary/20 transition-colors dark:bg-slate-700"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5 text-eco-secondary" /> : <Moon className="h-5 w-5 text-eco-primary" />}
                </button>
              </li>
              <li>
                <a href="#" className="eco-btn-primary inline-block dark:bg-eco-secondary dark:hover:bg-eco-secondary/90">Get Started</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {children}
      </main>
      
      <footer className="bg-eco-primary text-white py-8 dark:bg-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-medium">EcoTrack</span>
              </div>
              <p className="mt-2 max-w-md text-white/80">
                Tracking your carbon footprint has never been easier. Make a difference one step at a time.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Guides</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-white">About</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Team</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h2>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/80 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-white/20" />
          <p className="text-center text-white/70">© {new Date().getFullYear()} EcoTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
