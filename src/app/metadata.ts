import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zarespace Digital | Leading Digital Solutions & Web Development Services",
    description: "Top digital agency offering web development, graphics design, video editing, and digital marketing. Transform your business with cutting-edge digital solutions.",
    keywords: "digital agency, web development, graphics design, video editing, digital marketing, digital solutions, Ethiopia",
    openGraph: {
      title: "Zarespace Digital | Leading Digital Solutions & Web Development Services",
      description: "Top digital agency offering web development, graphics design, video editing, and digital marketing. Transform your business with cutting-edge digital solutions.",
      url: "https://zarespace.digital",
      siteName: "Zarespace Digital",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Zarespace Digital",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zarespace Digital | Leading Digital Solutions & Web Development Services",
      description: "Top digital agency offering web development, graphics design, video editing, and digital marketing.",
    },
  };
}