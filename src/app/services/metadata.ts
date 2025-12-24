import { Metadata } from "next";

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