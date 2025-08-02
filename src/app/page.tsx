"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Interactive3DMockup } from "@/components/ui/interactive-3d-mockup";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Rocket, Users, DollarSign, Zap, X, ExternalLink, Calendar, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

// Portfolio data for the grid
const portfolioData = [
  {
    id: 1,
    category: "Web Development",
    name: "TechStart Landing Page",
    image: "/stock/web_dev.jpg",
    description: "A modern, responsive landing page for a tech startup featuring smooth animations and optimized performance.",
    client: "TechStart Inc.",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    link: "#"
  },
  {
    id: 2,
    category: "Graphics Design",
    name: "Brand Identity Suite",
    image: "/stock/graphics.png",
    description: "Complete brand identity design including logo, color palette, typography, and marketing materials.",
    client: "Creative Agency",
    year: "2024",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Digital Assets"],
    link: "#"
  },
  {
    id: 3,
    category: "Video Editing",
    name: "Product Launch Video",
    image: "/stock/video.jpg",
    description: "High-impact product launch video with motion graphics, professional editing, and compelling storytelling.",
    client: "Product Co.",
    year: "2024",
    technologies: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    features: ["Motion Graphics", "Color Grading", "Sound Design", "Professional Editing"],
    link: "#"
  },
  {
    id: 4,
    category: "Digital Marketing",
    name: "Social Media Campaign",
    image: "/stock/marketing.jpg",
    description: "Comprehensive social media marketing campaign that increased engagement by 300% and drove significant conversions.",
    client: "E-commerce Brand",
    year: "2024",
    technologies: ["Facebook Ads", "Google Analytics", "Hootsuite"],
    features: ["Content Strategy", "Ad Management", "Analytics", "ROI Optimization"],
    link: "#"
  },
  {
    id: 5,
    category: "Web Development",
    name: "E-commerce Platform",
    image: "/stock/web_dev.jpg",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
    client: "Retail Business",
    year: "2024",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
    link: "#"
  },
  {
    id: 6,
    category: "Graphics Design",
    name: "Marketing Campaign Assets",
    image: "/stock/graphics.png",
    description: "Complete set of marketing assets including social media graphics, banners, and print materials for a product launch.",
    client: "Startup Company",
    year: "2024",
    technologies: ["Adobe Creative Suite", "Canva Pro"],
    features: ["Social Media Graphics", "Print Materials", "Web Banners", "Brand Consistency"],
    link: "#"
  }
];

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
    <section className="py-12 bg-background">
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

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Showcasing our best work across web development, design, video, and marketing. Each project represents our commitment to excellence and innovation.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 aspect-[4/3] mb-4 group-hover:scale-105 transition-transform duration-300">
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground font-medium">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Name */}
              <h3 className="text-lg font-bold font-dm-sans group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground font-inter mt-1">
                {project.client} • {project.year}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button size="lg" className="px-8 py-3" asChild>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>

        {/* Project Popup Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <Badge className="bg-primary/90 text-primary-foreground mb-2">
                      {selectedProject.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-dm-sans">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h4 className="text-lg font-bold font-dm-sans mb-3">Project Overview</h4>
                      <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                        {selectedProject.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Client</p>
                            <p className="text-sm text-muted-foreground">{selectedProject.client}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium">Year</p>
                            <p className="text-sm text-muted-foreground">{selectedProject.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h4 className="text-lg font-bold font-dm-sans mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="text-lg font-bold font-dm-sans mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm font-inter">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button className="w-full md:w-auto" asChild>
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Project
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-background to-accent/5">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Fast Delivery */}
          <motion.div
            className="text-center p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, -15, 15, -10, 10, 0],
                  scale: [1, 1.2, 0.9, 1.15, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Fast Delivery</h3>
            <p className="text-lg text-muted-foreground font-inter">2-week average turnaround</p>
          </motion.div>

          {/* Direct Communication */}
          <motion.div
            className="text-center p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.08, 1],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  y: [0, -8, 0, -5, 0],
                  scale: [1, 1.1, 0.95, 1.08, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeInOut"
                }}
              >
                <Users className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Direct Communication</h3>
            <p className="text-lg text-muted-foreground font-inter">Work directly with founders</p>
          </motion.div>

          {/* Modern Tech Stack */}
          <motion.div
            className="text-center p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 20, -20, 15, -10, 0],
                  y: [0, -6, 4, -4, 0],
                  scale: [1, 1.15, 0.9, 1.1, 1]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 0.3,
                  ease: "easeInOut"
                }}
              >
                <Rocket className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Modern Tech Stack</h3>
            <p className="text-lg text-muted-foreground font-inter">Latest tools, not legacy</p>
          </motion.div>

          {/* Transparent Pricing */}
          <motion.div
            className="text-center p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.07, 1],
                rotate: [0, -4, 4, 0]
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 0.85, 1.15, 1],
                  rotate: [0, 8, -8, 5, -5, 0],
                  y: [0, -2, 2, 0]
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut"
                }}
              >
                <DollarSign className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 font-dm-sans">Transparent Pricing</h3>
            <p className="text-lg text-muted-foreground font-inter">No hidden fees or surprises</p>
          </motion.div>
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

          {/* Right Visual - Interactive 3D Mockup */}
          <div className="flex items-center justify-center h-96">
            <Interactive3DMockup className="w-full h-full" />
          </div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Temporary sections placeholder */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-dm-sans">More Sections Coming Soon</h2>
          <p className="text-muted-foreground font-inter">
            Process • About • Contact
          </p>
        </div>
      </section>
    </div>
  );
}
