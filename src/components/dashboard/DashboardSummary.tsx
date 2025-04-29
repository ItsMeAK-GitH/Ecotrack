
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Earth, Sprout, BadgeCheck, Zap } from "lucide-react";

const DashboardSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
      <Card className="eco-card dark:bg-slate-800 dark:border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center justify-center">
            <Earth className="h-5 w-5 mr-2 text-eco-primary dark:text-eco-secondary" />
            Current Footprint
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-3xl font-bold text-eco-secondary mb-2 dark:text-eco-secondary">3.2 tons</div>
          <div className="text-sm text-muted-foreground mb-4 dark:text-white/70">CO₂e per year</div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="dark:text-white/90">Your impact</span>
              <span className="font-medium dark:text-white">3.2 tons</span>
            </div>
            <div className="eco-progress-bg dark:bg-slate-700">
              <div className="eco-progress-fill dark:bg-eco-secondary/80" style={{ width: "40%" }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground dark:text-white/50">National avg: 8.0 tons</span>
              <span className="text-eco-secondary font-medium dark:text-eco-secondary">60% lower</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="eco-card dark:bg-slate-800 dark:border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <Sprout className="h-5 w-5 mr-2 text-eco-primary dark:text-eco-secondary" />
            Monthly Changes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-eco-secondary mb-2 dark:text-eco-secondary">-0.5 tons</div>
          <div className="text-sm text-muted-foreground mb-4 dark:text-white/70">CO₂e reduction</div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm dark:text-white/90">Transport</span>
              <span className="eco-badge dark:bg-eco-secondary/30">-0.3 tons</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm dark:text-white/90">Energy</span>
              <span className="eco-badge dark:bg-eco-secondary/30">-0.1 tons</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm dark:text-white/90">Food</span>
              <span className="eco-badge dark:bg-eco-secondary/30">-0.1 tons</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="eco-card dark:bg-slate-800 dark:border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium flex items-center">
            <BadgeCheck className="h-5 w-5 mr-2 text-eco-primary dark:text-eco-secondary" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-eco-primary mb-2 dark:text-eco-secondary">4 badges</div>
          <div className="text-sm text-muted-foreground mb-4 dark:text-white/70">Earned this month</div>
          <div className="flex flex-wrap gap-2">
            <div className="p-2 bg-eco-secondary/10 rounded-lg flex flex-col items-center dark:bg-eco-secondary/20">
              <Sprout className="h-8 w-8 text-eco-secondary mb-1" />
              <span className="text-xs font-medium dark:text-white/90">Plant Based</span>
            </div>
            <div className="p-2 bg-eco-secondary/10 rounded-lg flex flex-col items-center dark:bg-eco-secondary/20">
              <Earth className="h-8 w-8 text-eco-secondary mb-1" />
              <span className="text-xs font-medium dark:text-white/90">Low Impact</span>
            </div>
            <div className="p-2 bg-eco-secondary/10 rounded-lg flex flex-col items-center dark:bg-eco-secondary/20">
              <Zap className="h-8 w-8 text-eco-secondary mb-1" />
              <span className="text-xs font-medium dark:text-white/90">Energy Saver</span>
            </div>
            <div className="p-2 bg-eco-tertiary/20 rounded-lg flex flex-col items-center opacity-60 dark:bg-eco-secondary/10 dark:opacity-40">
              <BadgeCheck className="h-8 w-8 text-eco-primary/60 mb-1 dark:text-eco-secondary/60" />
              <span className="text-xs font-medium dark:text-white/60">Next Goal</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardSummary;
