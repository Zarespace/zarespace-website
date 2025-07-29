import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <Card className="p-8 max-w-2xl mx-auto text-center shadow-lg border-2">
          <Image
            src="/Logo.png"
            alt="Zarespace Digital Logo"
            width={120}
            height={120}
            className="mb-6 rounded-full mx-auto ring-4 ring-primary/20"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Zarespace Digital
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Empowering Businesses, Digitally.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Innovative digital solutions for modern enterprises
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            🚀 Website under development - Coming soon with amazing features!
          </p>
        </div>
      </div>
    </div>
  );
}
