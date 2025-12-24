import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Zarespace Digital | Leading Digital Solutions & Web Development Services",
    template: "%s | Zarespace Digital",
  },
  description:
    "Top digital agency offering web development, graphics design, video editing, and digital marketing. Transform your business with cutting-edge digital solutions.",
  keywords:
    "digital agency, web development, graphics design, video editing, digital marketing, digital solutions, Ethiopia",
  authors: [{ name: "Zarespace Digital" }],
  creator: "Zarespace Digital",
  publisher: "Zarespace Digital",
  openGraph: {
    title:
      "Zarespace Digital | Leading Digital Solutions & Web Development Services",
    description:
      "Top digital agency offering web development, graphics design, video editing, and digital marketing. Transform your business with cutting-edge digital solutions.",
    url: "https://zarespace.digital",
    siteName: "Zarespace Digital",
    images: [
      {
        url: "/og-image.jpg", // Create and add an optimized OG image
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
    title:
      "Zarespace Digital | Leading Digital Solutions & Web Development Services",
    description:
      "Top digital agency offering web development, graphics design, video editing, and digital marketing.",
  },
  alternates: {
    canonical: "https://zarespace.digital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="Lb4VuECbIusiaDj4Njnwr9fyjtkZghYGJJjTcGpgzt0"
        />
        <link
          rel="preload"
          href="/fonts/TTLakes.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
