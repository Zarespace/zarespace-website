"use client";

import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  Clock, 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  Figma, 
  Video, 
  Music, 
  Search, 
  Mail, 
  BarChart3, 
  Globe,
  Smartphone,
  Monitor,
  Layers,
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Service type definition
interface Service {
  id: string;
  title: string;
  category: string;
  icon: string;
  imageSrc: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  process: string[];
  startingPrice: string;
}

// Technology icon mapping using SVG files from public/icons and Lucide icons
const getTechnologyIcon = (tech: string) => {
  // SVG icons from public/icons folder
  const svgIconMap: { [key: string]: string } = {
    // Web Development
    "Next.js": "/icons/next-js-svgrepo-com.svg",
    "TypeScript": "/icons/typescript-icon-svgrepo-com.svg",
    "Node.js": "/icons/node-js-svgrepo-com.svg",
    "MongoDB": "/icons/mongodb-svgrepo-com.svg",
    "Vercel": "/icons/vercel-svgrepo-com.svg",
    
    // Design
    "After Effects": "/icons/adobe-after-effects-svgrepo-com.svg",
    "Illustrator": "/icons/adobe-illustrator-svgrepo-com (1).svg",
    "Photoshop": "/icons/adobe-photoshop-svgrepo-com.svg",
    "Canva": "/icons/canva-svgrepo-com.svg",
    
    // Video Editing
    "Adobe Premiere Pro": "/icons/adobe-premiere-svgrepo-com.svg",
    "DaVinci Resolve": "/icons/DaVinci_Resolve_17_logo.svg",
    
    // Digital Marketing
    "Google Ads": "/icons/google-ads-svgrepo-com.svg",
    "Google Analytics": "/icons/google-analytics-svgrepo-com.svg",
    "WordPress": "/icons/wordpress-color-svgrepo-com.svg"
  };
  
  // Icons that need white background (typically black/monochrome icons)
  const iconsNeedingWhiteBg = [
    "Next.js", 
    "Vercel", 
    "After Effects", 
    "Illustrator", 
    "Adobe Premiere Pro"
  ];
  
  // Lucide icons for specific technologies
  const lucideIconMap: { [key: string]: React.ReactNode } = {
    "Figma": <Figma className="w-8 h-8" />
  };
  
  // Check for Lucide icon first
  if (lucideIconMap[tech]) {
    return lucideIconMap[tech];
  }
  
  // Then check for SVG icon
  const iconPath = svgIconMap[tech];
  const needsWhiteBg = iconsNeedingWhiteBg.includes(tech);
  
  return iconPath ? (
    <div className={`flex items-center justify-center ${needsWhiteBg ? 'w-12 h-12 bg-white rounded-3xl p-2' : ''}`}>
      <Image 
        src={iconPath} 
        alt={tech} 
        width={32} 
        height={32} 
        className={`object-contain ${needsWhiteBg ? 'w-8 h-8' : 'w-8 h-8'}`}
      />
    </div>
  ) : null;
};

// Static Apple Card Component
const StaticAppleCard = ({ service, className }: { service: Service; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative z-10 flex h-80 w-full max-w-sm mx-auto flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] dark:bg-neutral-900 hover:shadow-2xl hover:shadow-black/25 dark:hover:shadow-primary/20 transition-all duration-300",
        className
      )}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Subtle overlay for better visual depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/20 via-transparent to-black/30 group-hover:from-black/30 group-hover:to-black/40 transition-all duration-300" />
      {/* Background Image */}
      <Image
        src={service.imageSrc}
        alt={service.title}
        fill
        className="absolute inset-0 z-10 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
      />
      <div className="absolute bottom-8 left-8 z-40">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
          <Image src={service.icon} alt={service.title} width={24} height={24} className="filter brightness-0 invert" />
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  {
    id: "web-development",
    title: "Web Development",
    category: "Development",
    icon: "/window.svg",
    imageSrc: "/stock/web_dev.jpg",
    description: "Custom websites and web applications built with cutting-edge technologies",
    longDescription: "We create powerful, scalable web solutions that drive business growth. From simple landing pages to complex enterprise applications, our development team delivers high-performance websites that engage users and convert visitors into customers.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Application Development",
      "Responsive Design",
      "Performance Optimization",
      "SEO-Friendly Architecture",
      "Content Management Systems",
      "API Integration"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Vercel"],
    process: [
      "Discovery & Planning",
      "Design & Prototyping", 
      "Development & Testing",
      "Launch & Optimization"
    ],
    startingPrice: "From $2,500"
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    category: "Design",
    icon: "/file.svg",
    imageSrc: "/stock/graphics.png",
    description: "Professional visual identity and marketing materials that make your brand stand out",
    longDescription: "Our creative design team crafts compelling visual experiences that communicate your brand's story effectively. We combine artistic creativity with strategic thinking to deliver designs that not only look great but also drive results.",
    features: [
      "Brand Identity Design",
      "Logo Design & Branding",
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Packaging Design",
      "Web Graphics",
      "Illustration Services"
    ],
    technologies: ["Figma", "After Effects", "Illustrator", "Photoshop", "Canva"],
    process: [
      "Brand Research",
      "Concept Development",
      "Design Creation",
      "Refinement & Delivery"
    ],
    startingPrice: "From $800"
  },
  {
    id: "video-editing",
    title: "Video Editing",
    category: "Media",
    icon: "/globe.svg",
    imageSrc: "/stock/video.jpg",
    description: "Professional video content that engages audiences and tells your story",
    longDescription: "Transform raw footage into compelling stories with our professional video editing services. We create engaging content for social media, marketing campaigns, corporate communications, and more, ensuring your message resonates with your target audience.",
    features: [
      "Professional Video Editing",
      "Social Media Content",
      "Corporate Videos",
      "Product Demonstrations",
      "Event Coverage",
      "Motion Graphics",
      "Color Correction",
      "Audio Enhancement"
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
    process: [
      "Content Planning",
      "Footage Review",
      "Editing & Effects",
      "Final Production"
    ],
    startingPrice: "From $500"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    icon: "/Logo.png",
    imageSrc: "/stock/marketing.jpg",
    description: "Data-driven marketing strategies that grow your online presence and drive results",
    longDescription: "Accelerate your business growth with our comprehensive digital marketing services. We develop and execute strategic campaigns across multiple channels to increase your visibility, engage your audience, and drive conversions.",
    features: [
      "Search Engine Optimization",
      "Social Media Management",
      "Pay-Per-Click Advertising",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Optimization",
      "Brand Strategy"
    ],
    technologies: ["Google Ads", "Google Analytics", "WordPress"],
    process: [
      "Market Analysis",
      "Strategy Development",
      "Campaign Execution",
      "Performance Monitoring"
    ],
    startingPrice: "From $1,200/month"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth. 
            We combine creativity, technology, and strategy to deliver exceptional results.
          </p>
        </div>

        {/* Services with Alternating Apple Cards */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              id={service.id} 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Apple Card - Alternating position */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <StaticAppleCard service={service} />
                </div>

                {/* Service Description - Alternating position */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Image src={service.icon} alt={service.title} width={24} height={24} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>

                  {/* Features and Process Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Features */}
                    <Card className="border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-base">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          What&apos;s Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Process */}
                    <Card className="border-primary/20">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-base">
                          <Clock className="w-4 h-4 text-primary mr-2" />
                          Our Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-xs font-semibold text-primary flex-shrink-0">
                                {idx + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.slice(0, 8).map((tech, idx) => {
                        const icon = getTechnologyIcon(tech);
                        return icon ? (
                          <div 
                            key={idx} 
                            className="flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform duration-200 group"
                            title={tech}
                          >
                            {icon}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started with {service.title}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a custom solution that drives results. 
            Get a free consultation and project estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Web Development & Digital Marketing Services | Zarespace Digital",
    description: "Professional web development, graphics design, and digital marketing services in Ethiopia. Custom solutions for modern businesses.",
    keywords: "web development Ethiopia, digital marketing Ethiopia, custom website development, graphics design services, video editing services",
    openGraph: {
      title: "Web Development & Digital Marketing Services | Zarespace Digital",
      description: "Professional web development, graphics design, and digital marketing services in Ethiopia. Custom solutions for modern businesses.",
      url: "https://zarespace.digital/services",
      siteName: "Zarespace Digital",
      images: [
        {
          url: "/services-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Zarespace Digital Services",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Development & Digital Marketing Services | Zarespace Digital",
      description: "Professional web development, graphics design, and digital marketing services in Ethiopia.",
    },
  };
}