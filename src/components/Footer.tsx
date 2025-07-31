import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#graphics-design", label: "Graphics Design" },
    { href: "/services#video-editing", label: "Video Editing" },
    { href: "/services#digital-marketing", label: "Digital Marketing" },
  ];

  const companyLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About Us" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  const socialLinks = [
    { href: "#", label: "LinkedIn", icon: "linkedin" },
    { href: "#", label: "Twitter", icon: "twitter" },
    { href: "#", label: "Instagram", icon: "instagram" },
    { href: "#", label: "Facebook", icon: "facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/Logo.png"
                alt="Zarespace Digital"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-foreground">
                Zarespace Digital
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Empowering businesses digitally with cutting-edge web development, 
              design, video, and marketing solutions.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                📧 hello@zarespace.digital
              </p>
              <p className="text-muted-foreground">
                📞 +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates on digital trends and our services.
            </p>
            <div className="flex flex-col space-y-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-xs font-bold">
                    {social.icon === "linkedin" && "Li"}
                    {social.icon === "twitter" && "X"}
                    {social.icon === "instagram" && "Ig"}
                    {social.icon === "facebook" && "Fb"}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Zarespace Digital. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Magic UI Scroll Based Velocity Component Placeholder */}
        <div className="mt-8 text-center">
          <div className="text-xs text-muted-foreground">
            {/* Magic UI Scroll Based Velocity component will be implemented here */}
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-pulse">
                ✨ Digital Solutions • Web Development • Graphics Design • Video Editing • Digital Marketing • 
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}