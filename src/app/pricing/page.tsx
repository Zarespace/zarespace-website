"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";
import { motion } from "motion/react";

const services = [
  "Custom Website Development",
  "E-commerce Solutions",
  "Web Application Development",
  "Mobile Responsive Design",
  "SEO & Digital Marketing",
  "UI/UX Design",
  "API Integrations",
  "Ongoing Support & Maintenance"
];

export default function PricingPage() {

  return (
    <div className="min-h-screen pt-24 px-4 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans text-black dark:text-white">
            Custom Web Solutions
          </h1>
          
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-8 mb-10 border border-zinc-200 dark:border-zinc-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary font-dm-sans">
              Tailored Pricing for Your Project
            </h2>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 font-inter">
              We understand that every project is unique. Our pricing is based on the specific 
              requirements, complexity, and scale of your project. Whether you need a simple 
              website or a complex web application, we&apos;ll work with you to create a solution 
              that fits your budget and business goals.
            </p>
            
            <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white font-dm-sans">
                What We Offer:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 font-inter">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-6 px-8 text-lg"
            >
              Get Your Custom Quote
            </Button>
          </div>
        </motion.div>

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