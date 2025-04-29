
import React from "react";
import AppLayout from "@/components/layout/AppLayout";
import DashboardSummary from "@/components/dashboard/DashboardSummary";
import ActivityTracking from "@/components/dashboard/ActivityTracking";
import TipsSection from "@/components/dashboard/TipsSection";
import AchievementSection from "@/components/dashboard/AchievementSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, BadgeCheck, Sprout } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-eco-primary mb-2 dark:text-white">Your Carbon Footprint Dashboard</h1>
          <p className="text-muted-foreground dark:text-white/70">Track, analyze, and reduce your impact on the environment</p>
        </div>
        
        <DashboardSummary />
        
        <Tabs defaultValue="impact" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="impact" className="flex items-center">
              <BarChart className="h-4 w-4 mr-2" />
              Impact Analysis
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center">
              <Sprout className="h-4 w-4 mr-2" />
              Eco Tips
            </TabsTrigger>
            <TabsTrigger value="badges" className="flex items-center">
              <BadgeCheck className="h-4 w-4 mr-2" />
              Badges
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="impact" className="animate-fade-in">
            <ActivityTracking />
          </TabsContent>
          
          <TabsContent value="tips" className="animate-fade-in">
            <TipsSection />
          </TabsContent>
          
          <TabsContent value="badges" className="animate-fade-in">
            <AchievementSection />
          </TabsContent>
        </Tabs>
        
        <div className="bg-eco-primary/5 border border-eco-primary/10 p-6 rounded-xl dark:bg-slate-800 dark:border-slate-700">
          <h2 className="text-xl font-medium text-eco-primary mb-4 dark:text-white">Ready to reduce your footprint?</h2>
          <p className="text-muted-foreground mb-4 dark:text-white/70">Track your daily activities, get personalized recommendations, and earn badges as you make progress.</p>
          <div className="flex flex-wrap gap-4">
            <button className="eco-btn-primary">Track an Activity</button>
            <button className="eco-btn-secondary">Set Reduction Goals</button>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground dark:text-white/50">
          Project by The FloppyDisk Team
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
