"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Crown, Star, Rocket, Zap } from "lucide-react";
import { motion } from "motion/react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 15000,
    yearlyPrice: 150000,
    popular: false,
    features: [
      "Landing Page Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "2 Revisions",
      "1 Month Support"
    ]
  },
  {
    id: "professional",
    name: "Pro",
    monthlyPrice: 30000,
    yearlyPrice: 300000,
    popular: true,
    features: [
      "Everything from Starter",
      "Multi-page Website",
      "Custom Design",
      "Advanced SEO",
      "CMS Integration",
      "5 Revisions",
      "3 Months Support"
    ]
  },
  {
    id: "business",
    name: "Business",
    monthlyPrice: 50000,
    yearlyPrice: 500000,
    popular: false,
    features: [
      "Everything from Pro",
      "E-commerce Ready",
      "Custom Development",
      "API Integrations",
      "Unlimited Revisions",
      "6 Months Support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    popular: false,
    isCustom: true,
    features: [
      "Everything from Business",
      "Custom Web Application",
      "Dedicated Project Manager",
      "Priority Support",
      "Advanced Security",
      "Custom Integrations"
    ]
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen pt-24 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-dm-sans text-black dark:text-white">
            Digital Solutions without hassle,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans text-black dark:text-white">
            Leave development to Zarespace.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 font-inter">
            Plans for every kind of business
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full p-1 mb-4">
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              Yearly
            </button>
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              Monthly
            </button>
          </div>
          {isYearly && (
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Save up to 20% by paying yearly
            </p>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Crown className="w-4 h-4 mr-1" />
                    Popular choice
                  </div>
                </div>
              )}
              
              <Card className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-dm-sans text-zinc-900 dark:text-white">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {plan.isCustom ? (
                      <div className="text-3xl font-bold text-zinc-900 dark:text-white font-dm-sans">
                        Custom
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-zinc-900 dark:text-white font-dm-sans">
                            {(isYearly ? Math.floor(plan.yearlyPrice / 12) : plan.monthlyPrice).toLocaleString()} ETB
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-400 ml-1">/mo</span>
                        </div>
                        {isYearly && (
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            Billed yearly
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-300 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 mt-auto">
                  {plan.isCustom ? (
                    <Button 
                      className="w-full bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-100 text-white dark:text-black font-medium py-2.5"
                      size="lg"
                    >
                      Contact Sales
                    </Button>
                  ) : plan.popular ? (
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium py-2.5"
                      size="lg"
                    >
                      Get Quote
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white font-dm-sans">
              Website Development
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 font-inter">
              Turn your business ideas into professional websites that convert visitors into customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-medium"
              >
                Get Started Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 font-medium"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}