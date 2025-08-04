"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Interactive3DMockup } from "@/components/ui/interactive-3d-mockup";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Timeline } from "@/components/ui/timeline";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Rocket, Users, DollarSign, Zap, X, ExternalLink, Calendar, User, MessageCircle, FileText, Phone, Mail, Clock, CheckCircle, Linkedin, Send, Twitter } from "lucide-react";
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
    <section className="py-12 bg-gradient-to-b from-black via-black via-70% to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-left mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl font-inter">
            Comprehensive digital solutions designed to transform your business. Click on any service to learn more about what we offer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Carousel items={cards} />
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-black via-black via-70% to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Showcasing our best work across web development, design, video, and marketing. Each project represents our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-zinc-900 aspect-[4/3] mb-4 group-hover:scale-105 transition-transform duration-300">
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
    <section className="py-12 bg-gradient-to-b from-black via-black via-70% to-zinc-900">
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

function AboutSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Fuad Getachew",
      role: "Founder & CEO",
      skills: ["Strategy", "Vision", "Leadership"],
      image: "/team/fuad.jpg", // Placeholder - you can replace with actual images
      bio: "Visionary leader with 2+ years in digital transformation",
      color: "from-blue-400 to-blue-600",
      position: { x: 20, y: 15 }
    },
    {
      id: 2,
      name: "Remedan Mohammedzeyn",
      role: "Lead Developer",
      skills: ["React", "Next.js", "TypeScript"],
      image: "/team/developer.jpg",
      bio: "Full-stack wizard who turns ideas into reality",
      color: "from-green-400 to-green-600",
      position: { x: 70, y: 25 }
    },
    {
      id: 3,
      name: "Abdellah Qadi",
      role: "Creative Director",
      skills: ["UI/UX", "Figma", "Branding"],
      image: "/team/abde.jpg",
      bio: "Design perfectionist with an eye for detail",
      color: "from-purple-400 to-purple-600",
      position: { x: 25, y: 65 }
    },
    {
      id: 4,
      name: "Soreti Gurmu",
      role: "Marketing Lead",
      skills: ["SEO", "Analytics", "Growth"],
      image: "/team/marketer.jpg",
      bio: "Growth hacker who drives results",
      color: "from-pink-400 to-pink-600",
      position: { x: 75, y: 70 }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-black via-70% to-zinc-900 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            The passionate minds behind your digital transformation
          </p>
        </div>

        {/* Floating Team Constellation */}
        <div className="relative h-96 md:h-[500px] mb-16" id="constellation-container">
          {/* Central Logo - Static (Behind cards) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="w-48 h-48 flex items-center justify-center opacity-30">
              {/* Light mode logo */}
              <div className="w-44 h-44 dark:hidden">
                <svg viewBox="0 0 1080 1080" className="w-full h-full">
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: #b6ff1c;
                        stroke: #231f20;
                        stroke-miterlimit: 10;
                        stroke-width: 12px;
                      }`}
                    </style>
                  </defs>
                  <path className="cls-1" d="M998.5,875.69l-50.98-101.27c-1.4-2.77-4.23-4.52-7.34-4.52l-219.69-15.83-42.19,133.95,312.86-.42c4.54,0,8.22-3.68,8.22-8.22h0c0-1.28-.3-2.55-.88-3.69Z" />
                  <path className="cls-1" d="M157.92,480.92l96.46-265.93c5.01-13.82,18.14-23.02,32.83-23.02h279.75c23.71,0,40.53,23.12,33.23,45.68l-86.03,265.93c-4.66,14.41-18.08,24.17-33.23,24.17H190.75c-24.23,0-41.09-24.06-32.83-46.83Z" />
                  <path className="cls-1" d="M551.05,497.39l62.53-172.38c3.25-8.96,11.76-14.92,21.28-14.92h181.33c15.37,0,26.27,14.99,21.54,29.61l-55.77,172.38c-3.02,9.34-11.72,15.67-21.54,15.67h-188.09c-15.7,0-26.64-15.6-21.28-30.36Z" />
                  <path className="cls-1" d="M91.05,739.54l62.53-172.38c3.25-8.96,11.76-14.92,21.28-14.92h181.33c15.37,0,26.27,14.99,21.54,29.61l-55.77,172.38c-3.02,9.34-11.72,15.67-21.54,15.67H112.33c-15.7,0-26.64-15.6-21.28-30.36Z" />
                  <path className="cls-1" d="M328.74,841.19l96.46-265.93c5.01-13.82,18.14-23.02,32.83-23.02h279.75c23.71,0,40.53,23.12,33.23,45.68l-2.48,7.67-91.37,282.43h-315.58c-24.23,0-41.09-24.06-32.83-46.83Z" />
                </svg>
              </div>
              {/* Dark mode logo */}
              <div className="w-44 h-44 hidden dark:block">
                <svg viewBox="0 0 1080 1080" className="w-full h-full">
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: #b6ff1c;
                        stroke: #fff;
                        stroke-miterlimit: 10;
                        stroke-width: 12px;
                      }`}
                    </style>
                  </defs>
                  <path className="cls-1" d="M993.97,875.69l-50.98-101.27c-1.4-2.77-4.23-4.52-7.34-4.52l-219.69-15.83-42.19,133.95,312.86-.42c4.54,0,8.22-3.68,8.22-8.22h0c0-1.28-.3-2.55-.88-3.69Z" />
                  <path className="cls-1" d="M153.39,480.92l96.46-265.93c5.01-13.82,18.14-23.02,32.83-23.02h279.75c23.71,0,40.53,23.12,33.23,45.68l-86.03,265.93c-4.66,14.41-18.08,24.17-33.23,24.17H186.22c-24.23,0-41.09-24.06-32.83-46.83Z" />
                  <path className="cls-1" d="M546.53,497.39l62.53-172.38c3.25-8.96,11.76-14.92,21.28-14.92h181.33c15.37,0,26.27,14.99,21.54,29.61l-55.77,172.38c-3.02,9.34-11.72,15.67-21.54,15.67h-188.09c-15.7,0-26.64-15.6-21.28-30.36Z" />
                  <path className="cls-1" d="M86.52,739.54l62.53-172.38c3.25-8.96,11.76-14.92,21.28-14.92h181.33c15.37,0,26.27,14.99,21.54,29.61l-55.77,172.38c-3.02,9.34-11.72,15.67-21.54,15.67H107.81c-15.7,0-26.64-15.6-21.28-30.36Z" />
                  <path className="cls-1" d="M324.21,841.19l96.46-265.93c5.01-13.82,18.14-23.02,32.83-23.02h279.75c23.71,0,40.53,23.12,33.23,45.68l-2.48,7.67-91.37,282.43h-315.58c-24.23,0-41.09-24.06-32.83-46.83Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Team Member Draggable Cards */}
          <DraggableCardContainer className="relative w-full h-full">
            {teamMembers.map((member, index) => {
              // Calculate constraints to keep cards within the constellation area
              const cardSize = 224; // 56 * 4 (w-56 = 224px)
              const containerWidth = 896; // approximate max-w-7xl container width
              const containerHeight = 500; // h-[500px]
              const margin = 50; // margin from edges

              return (
                <div
                  key={member.id}
                  className="absolute"
                  style={{
                    left: `${member.position.x}%`,
                    top: `${member.position.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    drag
                    dragConstraints={{
                      left: -(containerWidth / 2) + margin + cardSize / 2,
                      right: (containerWidth / 2) - margin - cardSize / 2,
                      top: -(containerHeight / 2) + margin + cardSize / 2,
                      bottom: (containerHeight / 2) - margin - cardSize / 2,
                    }}
                    dragElastic={0.1}
                    whileDrag={{ scale: 1.05, zIndex: 50 }}
                    className="w-56 h-56 shadow-xl cursor-grab active:cursor-grabbing"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <HoverBorderGradient
                      as="div"
                      containerClassName="w-full h-full rounded-2xl"
                      className="w-full h-full bg-white dark:bg-neutral-800 p-0 rounded-2xl overflow-hidden"
                    >
                      {/* Team member image */}
                      <div className="w-full h-3/4 relative overflow-hidden pointer-events-none">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover pointer-events-none select-none"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                                <div class="text-center">
                                  <div class="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 dark:from-gray-600 dark:to-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <span class="text-white text-lg font-bold">
                                      ${member.name.split(' ').map((n: string) => n[0]).join('')}
                                    </span>
                                  </div>
                                  <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    Photo
                                  </div>
                                </div>
                              </div>
                            `;
                            }
                          }}
                        />
                      </div>
                      {/* Team member info at bottom */}
                      <div className="h-1/4 flex flex-col items-center justify-center px-2 py-1 pointer-events-none select-none">
                        <span className="text-sm font-bold text-center leading-tight mb-1">
                          {member.name}
                        </span>
                        <span className="text-xs text-primary font-medium text-center">
                          {member.role}
                        </span>
                      </div>
                    </HoverBorderGradient>
                  </motion.div>
                </div>
              );
            })}
          </DraggableCardContainer>
        </div>

        {/* Team Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-white dark:text-white font-inter leading-relaxed">
            We're a tight-knit team of digital innovators, each bringing unique expertise to every project.
            Founded in 2024, Zarespace Digital was born from a shared vision: to help businesses thrive in the digital age
            through cutting-edge technology and creative excellence. Our diverse backgrounds in development, design, and marketing
            create a perfect synergy that delivers exceptional results for our clients.
          </p>
          <p className="text-xl text-white dark:text-white font-inter leading-relaxed mt-4">
            What sets us apart isn't just our technical skills—it's our collaborative approach, attention to detail,
            and genuine passion for seeing our clients succeed. We believe in building lasting partnerships,
            not just completing projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const contactPaths = [
    {
      id: 'quick-chat',
      title: 'Quick Chat',
      subtitle: 'Get instant answers',
      icon: MessageCircle,
      description: 'Jump on WhatsApp for immediate questions and quick project discussions.',
      href: 'https://wa.me/1234567890' // Replace with your WhatsApp number
    },
    {
      id: 'project-brief',
      title: 'Project Brief',
      subtitle: 'Tell us your vision',
      icon: FileText,
      description: 'Fill out our smart form to get a detailed proposal and timeline.',
      href: 'mailto:hello@zarespace.digital?subject=Project Brief'
    },
    {
      id: 'schedule-call',
      title: 'Schedule Call',
      subtitle: 'Book a meeting',
      icon: Calendar,
      description: 'Book a 30-minute discovery call to discuss your project in detail.',
      href: 'https://calendly.com/zarespace' // Replace with your calendar link
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/zarespace',
      iconColor: 'text-[#0077B5]',
      bgColor: 'bg-[#0077B5]/10',
      hoverBgColor: 'hover:bg-[#0077B5]/20',
      hoverTextColor: 'hover:text-[#0077B5]'
    },
    {
      name: 'Telegram',
      icon: Send,
      href: 'https://t.me/zarespace',
      iconColor: 'text-[#0088CC]',
      bgColor: 'bg-[#0088CC]/10',
      hoverBgColor: 'hover:bg-[#0088CC]/20',
      hoverTextColor: 'hover:text-[#0088CC]'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      href: 'https://x.com/zarespace',
      iconColor: 'text-gray-600',
      bgColor: 'bg-gray-600/10',
      hoverBgColor: 'hover:bg-gray-600/20',
      hoverTextColor: 'hover:text-gray-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:hello@zarespace.digital',
      iconColor: 'text-[#34D399]',
      bgColor: 'bg-[#34D399]/10',
      hoverBgColor: 'hover:bg-[#34D399]/20',
      hoverTextColor: 'hover:text-[#34D399]'
    }
  ];

  const handlePathSelect = (pathId: string) => {
    const path = contactPaths.find(p => p.id === pathId);
    if (path?.href) {
      window.open(path.href, '_blank');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-black via-70% to-zinc-900 relative overflow-hidden rounded-b-3xl">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Connect with us through your preferred platform. We're always ready to discuss your next big idea.
              </p>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-start space-x-4 p-6 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer w-full ${social.hoverTextColor}`}
                  >
                    <div className={`w-12 h-12 ${social.bgColor} ${social.hoverBgColor} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                      <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-dm-sans group-hover:text-primary transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {social.name === 'Email' ? 'hello@zarespace.digital' : `@zarespace`}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-sm text-muted-foreground">Within 2-4 hours during business days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">hello@zarespace.digital</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Ready to Get Started */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Choose your preferred way to connect with us and start your digital transformation journey.
              </p>
            </div>

            {/* Contact Options - Vertical Stack */}
            <div className="space-y-6">
              {contactPaths.map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group cursor-pointer"
                  onClick={() => handlePathSelect(path.id)}
                >
                  <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="div"
                    className="flex items-center space-x-6 p-6 bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer rounded-full"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <path.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 font-dm-sans group-hover:text-primary transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">{path.subtitle}</p>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        {path.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </HoverBorderGradient>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-muted-foreground font-inter">
                All consultations are free and confidential. Let's build something amazing together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const processData = [
    {
      title: (
        <span>
          Discovery & <span className="text-primary">Planning</span>
        </span>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 font-inter leading-relaxed">
            We start by understanding your business goals, target audience, and project requirements.
            This phase includes competitor analysis, market research, and defining the project scope to ensure we're aligned from day one.
          </p>
        </div>
      ),
    },
    {
      title: (
        <span>
          Design & <span className="text-primary">Prototyping</span>
        </span>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 font-inter leading-relaxed">
            Our design team creates wireframes, mockups, and interactive prototypes that bring your vision to life.
            We focus on user experience and ensure the design aligns perfectly with your brand identity and business objectives.
          </p>
        </div>
      ),
    },
    {
      title: (
        <span>
          Development & <span className="text-primary">Implementation</span>
        </span>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 font-inter leading-relaxed">
            Using modern technologies and best practices, we build your project with clean, scalable code.
            Regular updates and testing ensure everything works perfectly across all devices and browsers, delivering exceptional performance.
          </p>
        </div>
      ),
    },
    {
      title: (
        <span>
          Testing & <span className="text-primary">Optimization</span>
        </span>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 font-inter leading-relaxed">
            Comprehensive testing ensures your project works flawlessly. We test functionality, performance,
            security, and user experience across different devices and browsers before launch, guaranteeing a smooth user experience.
          </p>
        </div>
      ),
    },
    {
      title: (
        <span>
          Launch & <span className="text-primary">Support</span>
        </span>
      ),
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4 font-inter leading-relaxed">
            We handle the complete launch process and provide ongoing support to ensure your project continues
            to perform optimally. Our relationship doesn't end at launch - we're here for the long term with maintenance and updates.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={processData} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="rounded-b-3xl">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 pt-20">
          {/* Left Content */}
          <motion.div 
            className="dark:text-white text-slate-950 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight font-dm-sans"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Empowering Businesses,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Digitally.
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl dark:text-neutral-200 text-slate-700 leading-relaxed font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We help startups and SMEs transform their digital presence with cutting-edge
              web development, design, video, and marketing solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 text-lg"
              >
                Start Your Project
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-transparent border border-slate-950 dark:border-white text-slate-950 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 font-semibold px-8 py-3 text-lg"
              >
                View Our Services
              </HoverBorderGradient>
            </motion.div>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm dark:text-neutral-300 text-slate-600 font-inter">
                Helping businesses grow since 2024
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual - Interactive 3D Mockup */}
          <motion.div 
            className="flex items-center justify-center h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Interactive3DMockup className="w-full h-full" />
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <div className="rounded-b-3xl overflow-hidden">
        <ServicesSection />
      </div>

      {/* Why Choose Us Section */}
      <div className="rounded-b-3xl overflow-hidden">
        <WhyChooseUsSection />
      </div>

      {/* Portfolio Section */}
      <div className="rounded-b-3xl overflow-hidden">
        <PortfolioSection />
      </div>

      {/* Process Section */}
      <div className="rounded-b-3xl overflow-hidden">
        <ProcessSection />
      </div>

      {/* About Section - Floating Team Constellation */}
      <div className="rounded-b-3xl overflow-hidden">
        <AboutSection />
      </div>

      {/* Multi-Path Contact Hub */}
      <ContactSection />
    </div>
  );
}
