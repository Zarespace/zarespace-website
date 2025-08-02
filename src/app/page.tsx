"use client";

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Rocket, Users, DollarSign, Zap } from "lucide-react";

// Services data for the carousel
const servicesData = [
  {
    category: "Development",
    title: "Web Development",
    src: "/stock/web_dev.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Custom websites and web applications
          </span>{" "}
          built with cutting-edge technologies. From simple landing pages to complex enterprise applications, we deliver high-performance websites that engage users and convert visitors into customers.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">What's Included:</h4>
            <ul className="text-sm space-y-1">
              <li>• Custom Website Development</li>
              <li>• E-commerce Solutions</li>
              <li>• Responsive Design</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Next.js</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">React</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">TypeScript</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Node.js</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Design",
    title: "Graphics Design",
    src: "/stock/graphics.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Professional visual identity and marketing materials
          </span>{" "}
          that make your brand stand out. We combine artistic creativity with strategic thinking to deliver designs that not only look great but also drive results.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Services:</h4>
            <ul className="text-sm space-y-1">
              <li>• Brand Identity Design</li>
              <li>• Logo Design & Branding</li>
              <li>• Marketing Materials</li>
              <li>• Social Media Graphics</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Tools:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Adobe Creative Suite</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Figma</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Sketch</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Media",
    title: "Video Editing",
    src: "/stock/video.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Professional video content that engages audiences
          </span>{" "}
          and tells your story. We create compelling content for social media, marketing campaigns, corporate communications, and more.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Video Services:</h4>
            <ul className="text-sm space-y-1">
              <li>• Professional Video Editing</li>
              <li>• Social Media Content</li>
              <li>• Corporate Videos</li>
              <li>• Motion Graphics</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Software:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Premiere Pro</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">After Effects</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">DaVinci Resolve</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Marketing",
    title: "Digital Marketing",
    src: "/stock/marketing.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Data-driven marketing strategies
          </span>{" "}
          that grow your online presence and drive results. We develop and execute strategic campaigns across multiple channels to increase visibility and drive conversions.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Marketing Services:</h4>
            <ul className="text-sm space-y-1">
              <li>• Search Engine Optimization</li>
              <li>• Social Media Management</li>
              <li>• Pay-Per-Click Advertising</li>
              <li>• Content Marketing</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">Platforms:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Google Ads</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Facebook Ads</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Analytics</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    category: "Explore More",
    title: "View All Services",
    src: "/stock/web_dev.jpg",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Discover our complete range of digital services
          </span>{" "}
          with detailed information, pricing, processes, and technologies. Get comprehensive insights into how we can transform your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">What You'll Find:</h4>
            <ul className="text-sm space-y-2">
              <li>• Detailed service descriptions</li>
              <li>• Complete feature lists</li>
              <li>• Technology stacks we use</li>
              <li>• Our proven processes</li>
              <li>• Starting prices and packages</li>
              <li>• Portfolio examples</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">Ready to Get Started?</h4>
            <p className="text-sm mb-4">
              Explore our comprehensive services page to find the perfect solution for your business needs.
            </p>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors w-full"
            >
              View All Services →
            </a>
          </div>
        </div>
      </div>
    ),
  },
];

function ServicesSection() {
  const cards = servicesData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-inter">
            Comprehensive digital solutions designed to transform your business. Click on any service to learn more about what we offer.
          </p>
        </div>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Why Choose Zarespace Digital?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            We're not just another agency. We're your digital growth partners, built for the modern business landscape.
          </p>
        </div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Fast Delivery */}
          <div className="text-center p-10">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Fast Delivery</h3>
            <p className="text-lg text-muted-foreground font-inter">2-week average turnaround</p>
          </div>

          {/* Direct Communication */}
          <div className="text-center p-10">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Direct Communication</h3>
            <p className="text-lg text-muted-foreground font-inter">Work directly with founders</p>
          </div>

          {/* Modern Tech Stack */}
          <div className="text-center p-10">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Modern Tech Stack</h3>
            <p className="text-lg text-muted-foreground font-inter">Latest tools, not legacy</p>
          </div>

          {/* Transparent Pricing */}
          <div className="text-center p-10">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Transparent Pricing</h3>
            <p className="text-lg text-muted-foreground font-inter">No hidden fees or surprises</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-3">
            Ready to Get Started?
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 pt-20">
          {/* Left Content */}
          <div className="dark:text-white text-slate-950 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight font-dm-sans">
              Empowering Businesses,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Digitally.
              </span>
            </h1>
            <p className="text-xl dark:text-neutral-200 text-slate-700 leading-relaxed font-inter">
              We help startups and SMEs transform their digital presence with cutting-edge
              web development, design, video, and marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-gray-100 font-semibold">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-slate-950 dark:border-white text-slate-950 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950">
                View Our Services
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm dark:text-neutral-300 text-slate-600 font-inter">
                Helping businesses grow since 2024
              </p>
            </div>
          </div>

          {/* Right Visual - Enhanced with Aurora theme */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/30 to-blue-500/20 rounded-full flex items-center justify-center border border-primary/30 backdrop-blur-sm">
              <div className="w-60 h-60 bg-gradient-to-br from-primary/40 to-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center dark:text-white text-slate-950">
                  <div className="text-4xl mb-2">✨</div>
                  <p className="text-sm font-medium font-dm-sans">Digital Innovation</p>
                  <p className="text-xs dark:text-neutral-300 text-slate-600 mt-1 font-inter">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Temporary sections placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-dm-sans">More Sections Coming Soon</h2>
          <p className="text-muted-foreground font-inter">
            Portfolio • Process • About • Contact
          </p>
        </div>
      </section>
    </div>
  );
}
