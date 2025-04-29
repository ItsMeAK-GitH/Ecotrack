
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartPie, BadgeCheck } from "lucide-react";

const ActivityTracking = () => {
  const categories = [
    { name: "Transport", percentage: 35, activities: ["Daily commute", "Weekend trips", "Air travel"] },
    { name: "Home Energy", percentage: 25, activities: ["Electricity", "Heating", "Appliances"] },
    { name: "Food", percentage: 20, activities: ["Meat consumption", "Dairy products", "Food waste"] },
    { name: "Shopping", percentage: 20, activities: ["Clothing", "Electronics", "Other goods"] },
  ];
  
  const [animateChart, setAnimateChart] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    setAnimateChart(true);
  }, []);

  return (
    <Card className="eco-card mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <ChartPie className="h-5 w-5 mr-2 text-eco-primary" />
          Carbon Impact by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="chart">Distribution</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>
          <TabsContent value="chart" className="animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">3.2</div>
                    <div className="text-sm text-white/80">tons CO₂e/year</div>
                  </div>
                </div>
                <svg className="h-full w-full" viewBox="0 0 20 20">
                  <circle 
                    r="5" 
                    cx="10" 
                    cy="10" 
                    fill="transparent" 
                    stroke="#D9C5B2" 
                    strokeWidth="10" 
                    strokeDasharray={`calc(31.4 * ${animateChart ? 0.35 : 0}) 31.4`} 
                    transform="rotate(-90) translate(-20)"
                    className="transition-all duration-1000 ease-out"
                  />
                  <circle 
                    r="5" 
                    cx="10" 
                    cy="10" 
                    fill="transparent" 
                    stroke="#8EB69B" 
                    strokeWidth="10" 
                    strokeDasharray={`calc(31.4 * ${animateChart ? 0.25 : 0}) 31.4`} 
                    transform="rotate(-90) translate(-20)" 
                    strokeDashoffset={`calc(-31.4 * ${animateChart ? 0.35 : 0})`}
                    className="transition-all duration-1000 ease-out delay-300"
                  />
                  <circle 
                    r="5" 
                    cx="10" 
                    cy="10" 
                    fill="transparent" 
                    stroke="#3E6259" 
                    strokeWidth="10" 
                    strokeDasharray={`calc(31.4 * ${animateChart ? 0.20 : 0}) 31.4`} 
                    transform="rotate(-90) translate(-20)" 
                    strokeDashoffset={`calc(-31.4 * ${animateChart ? 0.60 : 0})`}
                    className="transition-all duration-1000 ease-out delay-600"
                  />
                  <circle 
                    r="5" 
                    cx="10" 
                    cy="10" 
                    fill="transparent" 
                    stroke="#F2E3D5" 
                    strokeWidth="10" 
                    strokeDasharray={`calc(31.4 * ${animateChart ? 0.20 : 0}) 31.4`} 
                    transform="rotate(-90) translate(-20)" 
                    strokeDashoffset={`calc(-31.4 * ${animateChart ? 0.80 : 0})`}
                    className="transition-all duration-1000 ease-out delay-900"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center gap-2">
                    <div className={`h-4 w-4 rounded-full ${
                      category.name === "Transport" ? "bg-[#D9C5B2]" :
                      category.name === "Home Energy" ? "bg-[#8EB69B]" :
                      category.name === "Food" ? "bg-[#3E6259]" : "bg-[#F2E3D5]"
                    }`}></div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-muted-foreground">{category.percentage}% of total</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="activities" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="bg-white/50 p-4 rounded-lg border border-eco-tertiary/20 dark:bg-white/5 dark:border-white/10">
                  <h3 className="font-medium text-eco-primary mb-2 dark:text-white">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.activities.map((activity) => (
                      <li key={activity} className="flex items-center justify-between">
                        <span className="text-sm dark:text-white/80">{activity}</span>
                        <span className="text-sm font-medium dark:text-white">{Math.floor(Math.random() * 8) / 10} tons</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ActivityTracking;
