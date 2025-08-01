import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Palette, Video, TrendingUp, Users, Clock, Award } from "lucide-react";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "/window.svg",
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
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Vercel"],
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
    icon: "/file.svg",
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
    technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva Pro", "After Effects", "Illustrator", "Photoshop", "InDesign"],
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
    icon: "/globe.svg",
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
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Motion", "Audition", "Cinema 4D", "Blender"],
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
    icon: "/Logo.png",
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
    technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "Hootsuite", "Canva", "WordPress"],
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

        {/* Services Details */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Image src={service.icon} alt={service.title} width={32} height={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-primary font-semibold">{service.startingPrice}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Features */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <CheckCircle className="w-5 h-5 text-primary mr-2" />
                          What's Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Process */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Clock className="w-5 h-5 text-primary mr-2" />
                          Our Process
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-xs font-semibold text-primary">
                                {idx + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Button size="lg" className="w-full md:w-auto">
                    Get Started with {service.title}
                  </Button>
                </div>

                {/* Visual/Stats */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Image src={service.icon} alt={service.title} width={48} height={48} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Technologies We Use</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {service.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-background/50 rounded-lg p-3 text-center">
                          <span className="text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">50+</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs text-muted-foreground">Satisfaction</div>
                      </div>
                      <div>
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">2x</div>
                        <div className="text-xs text-muted-foreground">ROI Average</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives results. 
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