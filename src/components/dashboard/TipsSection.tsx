
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Sprout, Earth } from "lucide-react";

const tips = [
  {
    category: "transport",
    items: [
      {
        title: "Use public transportation",
        description: "Taking the bus or train instead of driving can reduce your carbon footprint by up to 8x per mile.",
        impact: "high"
      },
      {
        title: "Carpool when possible",
        description: "Sharing rides cuts emissions per person and reduces traffic congestion.",
        impact: "medium"
      },
      {
        title: "Maintain proper tire pressure",
        description: "Keeping tires properly inflated can improve fuel efficiency by 3%.",
        impact: "low"
      }
    ]
  },
  {
    category: "home",
    items: [
      {
        title: "Switch to LED bulbs",
        description: "LED bulbs use 75% less energy than incandescent lighting.",
        impact: "medium"
      },
      {
        title: "Unplug idle electronics",
        description: "Even when turned off, many devices consume standby power.",
        impact: "low"
      },
      {
        title: "Adjust your thermostat",
        description: "For every degree you lower your heat in winter, you can save about 3% on heating costs.",
        impact: "high"
      }
    ]
  },
  {
    category: "food",
    items: [
      {
        title: "Eat more plant-based meals",
        description: "Replacing meat with vegetables once a week can save the equivalent of driving 348 miles.",
        impact: "high"
      },
      {
        title: "Reduce food waste",
        description: "Plan meals, use leftovers, and compost scraps to minimize waste.",
        impact: "medium"
      },
      {
        title: "Buy local and seasonal food",
        description: "Local food doesn't travel as far, reducing transportation emissions.",
        impact: "medium"
      }
    ]
  }
];

const TipsSection = () => {
  return (
    <Card className="eco-card mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Leaf className="h-5 w-5 mr-2 text-eco-primary" />
          Eco-Friendly Tips
        </CardTitle>
        <CardDescription>
          Simple actions to reduce your carbon footprint
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="transport">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="transport" className="flex items-center">
              <Earth className="h-4 w-4 mr-2" />
              Transport
            </TabsTrigger>
            <TabsTrigger value="home" className="flex items-center">
              <Sprout className="h-4 w-4 mr-2" />
              Home
            </TabsTrigger>
            <TabsTrigger value="food" className="flex items-center">
              <Leaf className="h-4 w-4 mr-2" />
              Food
            </TabsTrigger>
          </TabsList>
          
          {tips.map(tipCategory => (
            <TabsContent key={tipCategory.category} value={tipCategory.category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tipCategory.items.map((tip, index) => (
                  <div key={index} className="bg-white/50 p-4 rounded-lg border border-eco-tertiary/20 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-eco-primary">{tip.title}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        tip.impact === "high" ? "bg-eco-secondary/20 text-eco-primary" : 
                        tip.impact === "medium" ? "bg-eco-tertiary/20 text-eco-primary" : 
                        "bg-eco-tertiary/10 text-eco-primary"
                      }`}>
                        {tip.impact} impact
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TipsSection;
