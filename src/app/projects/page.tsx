import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Globe } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    image: "/next.svg",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "Tailwind CSS"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and investment tracking.",
    image: "/vercel.svg",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Firebase"],
    category: "Mobile Development",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "3",
    title: "AI-Powered Analytics Dashboard",
    description: "Intelligent analytics platform with machine learning insights, predictive modeling, and interactive data visualization.",
    image: "/globe.svg",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
    category: "AI & Analytics",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "Restaurant Management System",
    description: "Complete restaurant management solution with order tracking, inventory management, and customer relationship tools.",
    image: "/file.svg",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker"],
    category: "Web Development",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description: "Comprehensive fitness app with workout planning, progress tracking, and social features for motivation.",
    image: "/window.svg",
    technologies: ["Flutter", "Firebase", "Google Fit API", "Cloud Functions"],
    category: "Mobile Development",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Real Estate Platform",
    description: "Modern real estate platform with property listings, virtual tours, mortgage calculator, and agent management.",
    image: "/Logo.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "Socket.io"],
    category: "Web Development",
    liveUrl: "https://example.com",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "AI & Analytics"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our portfolio of innovative digital solutions that transform businesses and enhance user experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="rounded-full px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <CardContainer key={project.id} className="inter-var" containerClassName="py-10">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-16 h-16 object-contain opacity-60 group-hover/card:opacity-80 transition-opacity"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ="80" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardItem>
                  <div className="flex justify-between items-center mt-6">
                    {project.liveUrl && (
                      <CardItem translateZ={20} className="px-4 py-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </CardItem>
                    )}
                    {project.githubUrl && (
                      <CardItem translateZ={20} className="px-4 py-2">
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <GitBranch className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <CardContainer key={project.id} className="inter-var" containerClassName="py-8">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem translateZ="100" className="w-full mb-4">
                    <div className="relative h-32 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-12 h-12 object-contain opacity-60 group-hover/card:opacity-80 transition-opacity"
                      />
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-lg font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-2"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="70" className="mt-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardItem>
                  <div className="flex gap-2 mt-4">
                    {project.liveUrl && (
                      <CardItem translateZ={20}>
                        <Button size="sm" variant="ghost" asChild className="text-xs px-3 py-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </CardItem>
                    )}
                    {project.githubUrl && (
                      <CardItem translateZ={20}>
                        <Button size="sm" variant="ghost" asChild className="text-xs px-3 py-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <GitBranch className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}