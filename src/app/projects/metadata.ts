import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Portfolio | Zarespace Digital Projects",
    description: "Explore our portfolio of successful web development, design, and digital marketing projects. See how we've helped businesses grow.",
    keywords: "web development portfolio, design projects, digital marketing case studies, Ethiopia portfolio, mobile development projects, AI analytics dashboard",
    openGraph: {
      title: "Our Portfolio | Zarespace Digital Projects",
      description: "Explore our portfolio of successful web development, design, and digital marketing projects. See how we've helped businesses grow.",
      url: "https://zarespace.digital/projects",
      siteName: "Zarespace Digital",
      images: [
        {
          url: "/projects-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Zarespace Digital Projects",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Portfolio | Zarespace Digital Projects",
      description: "Explore our portfolio of successful web development, design, and digital marketing projects.",
    },
  };
}