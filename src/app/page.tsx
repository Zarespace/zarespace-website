import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Temporary placeholder */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Empowering Businesses,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Digitally.
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We help startups and SMEs transform their digital presence with cutting-edge 
              web development, design, video, and marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                View Our Services
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-slate-400">
                Helping businesses grow since 2024
              </p>
            </div>
          </div>

          {/* Right Visual - Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20">
              <div className="w-60 h-60 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🚀</div>
                  <p className="text-sm">3D Visual Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
