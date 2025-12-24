import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  image,
  type = "website"
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : undefined,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title,
      description,
      type,
      url: canonical || "https://zarespace.digital",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

// Specific SEO generators for different page types
export function generateHomeSEO(): Metadata {
  return generateSEOMetadata({
    title: "Zarespace Digital | Leading Digital Solutions & Web Development Services",
    description: "Top digital agency offering web development, graphics design, video editing, and digital marketing. Transform your business with cutting-edge digital solutions.",
    keywords: "digital agency, web development, graphics design, video editing, digital marketing, digital solutions, Ethiopia",
    canonical: "https://zarespace.digital",
    image: "https://zarespace.digital/og-image.jpg"
  });
}

export function generateServicesSEO(): Metadata {
  return generateSEOMetadata({
    title: "Web Development & Digital Marketing Services | Zarespace Digital",
    description: "Professional web development, graphics design, and digital marketing services in Ethiopia. Custom solutions for modern businesses.",
    keywords: "web development Ethiopia, digital marketing Ethiopia, custom website development, graphics design services",
    canonical: "https://zarespace.digital/services",
    image: "https://zarespace.digital/services-og-image.jpg"
  });
}

export function generateProjectsSEO(): Metadata {
  return generateSEOMetadata({
    title: "Our Portfolio | Zarespace Digital Projects",
    description: "Explore our portfolio of successful web development, design, and digital marketing projects. See how we've helped businesses grow.",
    keywords: "web development portfolio, design projects, digital marketing case studies, Ethiopia portfolio",
    canonical: "https://zarespace.digital/projects",
    image: "https://zarespace.digital/projects-og-image.jpg"
  });
}

export function generatePricingSEO(): Metadata {
  return generateSEOMetadata({
    title: "Pricing & Packages | Zarespace Digital Services",
    description: "Transparent pricing for web development, graphics design, video editing, and digital marketing services. Custom quotes available.",
    keywords: "web development pricing, design services cost, digital marketing packages, transparent pricing",
    canonical: "https://zarespace.digital/pricing",
    image: "https://zarespace.digital/pricing-og-image.jpg"
  });
}