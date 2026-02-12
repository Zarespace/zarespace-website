"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Interactive3DMockup } from "@/components/ui/interactive-3d-mockup";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Timeline } from "@/components/ui/timeline";
import { Metadata } from "next";
// Removed unused DraggableCardContainer import
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Rocket, Users, DollarSign, Zap, X, ExternalLink, Calendar, User, MessageCircle, FileText, Mail, Clock, Linkedin, Send, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

// Portfolio data for the grid
const portfolioData = [
  {
    id: 1,
    category: "Web Development",
    name: "ZareShop E-Commerce",
    image: "/projects/zareshop.png",
    description: "A modern, responsive e-commerce website built with modern technologies.",
    client: "Zarespace Digital",
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    features: ["Responsive Design", "Fast Loading", "Modern UI/UX"],
    link: "https://zareshop-gamma.vercel.app"
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
            <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
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
            <h4 className="font-semibold mb-3 text-lg">What You&apos;ll Find:</h4>
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
    <section className="py-12 bg-gradient-to-b from-white via-white via-70% to-zinc-200 dark:from-black dark:via-black dark:via-70% dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header stays within normal padding */}
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

        {/* Carousel breaks out to screen edges on mobile */}
        <motion.div
          className="-mx-4 md:mx-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="px-4 md:px-0">
            <Carousel items={cards} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-white via-white via-70% to-zinc-200 dark:from-black dark:via-black dark:via-70% dark:to-zinc-900">
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

        {/* Portfolio Grid - 3 projects on mobile, all on desktop */}
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
              className={`group cursor-pointer ${index >= 3 ? 'hidden md:block' : ''}`}
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
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Question */}
          <div className="lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-dm-sans bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Why Choose Zarespace Digital?
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              We&apos;re not just another agency. We&apos;re your digital growth partners, built for the modern business landscape.
            </p>
          </div>

          {/* Vertical Divider - Only visible on lg screens and up */}
          <div className="hidden lg:block h-96 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent mx-8"></div>

          {/* Right Side - Reasons */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fast Delivery */}
              <motion.div
                className="text-center p-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
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
                <h3 className="text-2xl font-bold mb-3 font-dm-sans">Transparent Pricing</h3>
                <p className="text-lg text-muted-foreground font-inter">No hidden fees or surprises</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  const contactPaths = [
    {
      id: 'quick-chat',
      title: 'Quick Chat',
      subtitle: 'Get instant answers',
      icon: MessageCircle,
      description: 'Jump on Telegram for immediate questions and quick project discussions.',
      href: 'https://t.me/zarespace' // Replace with your Telegram username
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
      href: 'https://www.linkedin.com/company/zarespace-digital',
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
    <section className="py-20 bg-gradient-to-b from-white via-white via-70% to-zinc-200 dark:from-black dark:via-black dark:via-70% dark:to-zinc-900 relative overflow-hidden rounded-b-3xl">

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
                Connect with us through your preferred platform. We&apos;re always ready to discuss your next big idea.
              </p>
            </div>

            {/* Social Icons */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                    className={`group flex items-center justify-start space-x-3 md:space-x-4 p-4 md:p-6 rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer w-full ${social.hoverTextColor}`}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${social.bgColor} ${social.hoverBgColor} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                      <social.icon className={`w-5 h-5 md:w-6 md:h-6 ${social.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold font-dm-sans group-hover:text-primary transition-colors">
                        {social.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
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
            <div className="space-y-4 md:space-y-6">
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
                    className="flex items-center space-x-4 md:space-x-6 p-4 md:p-6 bg-transparent transition-all duration-300 hover:scale-105 cursor-pointer rounded-full"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <path.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold mb-1 font-dm-sans group-hover:text-primary transition-colors">
                        {path.title}
                      </h3>
                      <p className="text-primary font-medium text-xs md:text-sm mb-1 md:mb-2">{path.subtitle}</p>
                      <p className="text-muted-foreground font-inter text-xs md:text-sm leading-relaxed">
                        {path.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </HoverBorderGradient>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="text-center pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <p className="text-muted-foreground font-inter">
                All consultations are free and confidential. Let&apos;s build something amazing together.
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
            This phase includes competitor analysis, market research, and defining the project scope to ensure we&apos;re aligned from day one.
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
            to perform optimally. Our relationship doesn&apos;t end at launch - we&apos;re here for the long term with maintenance and updates.
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
        <div className="relative z-10 w-full mx-auto px-4 pt-16 pb-8 lg:pt-20 lg:max-w-7xl">
          {/* Mobile-First Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            {/* Right Visual - Interactive 3D Mockup - Mobile First */}
            <motion.div
              className="flex items-center justify-center h-64 sm:h-80 lg:h-96 mb-6 lg:mb-0 lg:order-last"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-none h-full flex items-center justify-center">
                <Interactive3DMockup className="w-full h-full" />
              </div>
            </motion.div>

            {/* Left Content */}
            <motion.div
              className="dark:text-white text-slate-950 space-y-4 lg:space-y-6 text-center lg:text-left w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-dm-sans px-2"
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
                className="text-base sm:text-lg lg:text-xl dark:text-neutral-200 text-slate-700 leading-relaxed font-inter max-w-2xl mx-auto lg:mx-0 px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                We help startups and SMEs transform their digital presence with cutting-edge
                web development, design, video, and marketing solutions.
              </motion.p>
              <motion.div
                className="flex flex-row gap-3 justify-center lg:justify-start px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <a href="#contact" className="w-full max-w-[170px]">
                  <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="button"
                    className="!bg-primary text-white dark:text-black hover:!bg-primary/90 font-semibold px-6 py-3 text-sm w-full"
                  >
                    Start Your Project
                  </HoverBorderGradient>
                </a>
                <a href="/services" className="w-full max-w-[170px]">
                  <HoverBorderGradient
                    containerClassName="rounded-full w-full"
                    as="button"
                    className="bg-transparent border border-slate-950 dark:border-white text-slate-950 dark:text-white hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 font-semibold px-6 py-3 text-sm w-full"
                  >
                    View Our Services
                  </HoverBorderGradient>
                </a>
              </motion.div>
              <motion.div
                className="pt-2 lg:pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <p className="text-xs sm:text-sm dark:text-neutral-300 text-slate-600 font-inter">
                  Helping businesses grow since 2024
                </p>
              </motion.div>
            </motion.div>
          </div>
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
      {/* <div className="rounded-b-3xl overflow-hidden">
        <AboutSection />
      </div> */}

      {/* Multi-Path Contact Hub */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
