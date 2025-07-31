import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 pt-20">
          {/* Left Content */}
          <div className="dark:text-white text-slate-950 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
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

      {/* Temporary sections placeholder */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">More Sections Coming Soon</h2>
          <p className="text-muted-foreground">
            Services • Why Choose Us • Portfolio • Process • About • Contact
          </p>
        </div>
      </section>
    </div>
  );
}
