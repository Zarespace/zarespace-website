import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing & Packages | Zarespace Digital Services",
    description: "Transparent pricing for web development, graphics design, video editing, and digital marketing services. Custom quotes available.",
    keywords: "web development pricing, design services cost, digital marketing packages, transparent pricing, custom website quote, Ethiopia digital services",
    openGraph: {
      title: "Pricing & Packages | Zarespace Digital Services",
      description: "Transparent pricing for web development, graphics design, video editing, and digital marketing services. Custom quotes available.",
      url: "https://zarespace.digital/pricing",
      siteName: "Zarespace Digital",
      images: [
        {
          url: "/pricing-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Zarespace Digital Pricing",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Pricing & Packages | Zarespace Digital Services",
      description: "Transparent pricing for web development, graphics design, video editing, and digital marketing services.",
    },
  };
}