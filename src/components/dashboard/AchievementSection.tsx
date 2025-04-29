
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BadgeCheck, Leaf, Earth, Sprout } from "lucide-react";

const achievements = [
  {
    icon: <Leaf className="h-8 w-8 text-eco-secondary" />,
    name: "Plant Based",
    description: "Reduced meat consumption by 50%",
    earned: true,
    progress: 100,
  },
  {
    icon: <Earth className="h-8 w-8 text-eco-secondary" />,
    name: "Low Impact",
    description: "Carbon footprint below national average",
    earned: true,
    progress: 100,
  },
  {
    icon: <Sprout className="h-8 w-8 text-eco-secondary" />,
    name: "Energy Saver",
    description: "Reduced home energy use by 20%",
    earned: true,
    progress: 100,
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-eco-primary/60" />,
    name: "Zero Waste",
    description: "Eliminated single-use plastics",
    earned: false,
    progress: 65,
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-eco-primary/60" />,
    name: "Green Commuter",
    description: "Used public transit for 20 days",
    earned: false,
    progress: 40,
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-eco-primary/60" />,
    name: "Local Foodie",
    description: "Purchased 80% local produce",
    earned: false,
    progress: 30,
  },
];

const AchievementSection = () => {
  return (
    <Card className="eco-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BadgeCheck className="h-5 w-5 mr-2 text-eco-primary" />
          Your Achievements
        </CardTitle>
        <CardDescription>
          Eco-badges earned through sustainable actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg flex flex-col items-center text-center ${
                achievement.earned 
                  ? "bg-eco-secondary/10 border-eco-secondary/30" 
                  : "bg-eco-tertiary/10 border-eco-tertiary/20"
              } border hover:shadow-md transition-all`}
            >
              <div className="mb-2">{achievement.icon}</div>
              <h3 className={`font-medium ${achievement.earned ? "text-eco-primary" : "text-eco-primary/70"}`}>
                {achievement.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-2">{achievement.description}</p>
              
              {!achievement.earned && (
                <>
                  <div className="eco-progress-bg w-full mt-2">
                    <div 
                      className="eco-progress-fill" 
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs mt-1 text-eco-primary/70">{achievement.progress}% complete</span>
                </>
              )}
              
              {achievement.earned && (
                <span className="text-xs font-medium text-eco-secondary mt-2 flex items-center">
                  <BadgeCheck className="h-3 w-3 mr-1" /> Earned
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementSection;
