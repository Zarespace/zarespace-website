import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

// Services data for the carousel
const servicesData = [
  {
    category: "Development",
    title: "Web Development",
    src: "/window.svg",
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
    src: "/file.svg",
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
    src: "/globe.svg",
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
    src: "/Logo.png",
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
    src: "/Logo.png",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive digital solutions designed to transform your business. Click on any service to learn more about what we offer.
          </p>
        </div>
        <Carousel items={cards} />
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
            <p className="text-xl dark:text-neutral-200 text-slate-700 leading-relaxed">
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
              <p className="text-sm dark:text-neutral-300 text-slate-600">
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
                  <p className="text-sm font-medium">Digital Innovation</p>
                  <p className="text-xs dark:text-neutral-300 text-slate-600 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* Services Section */}
      <ServicesSection />

      {/* Temporary sections placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">More Sections Coming Soon</h2>
          <p className="text-muted-foreground">
            Why Choose Us • Portfolio • Process • About • Contact
          </p>
        </div>
      </section>
    </div>
  );
}
