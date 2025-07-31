import Image from "next/image";

const PencilIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
    <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" fill="#666"/>
    <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#b6ff1c"/>
  </svg>
);

const ContentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="#b6ff1c"/>
    <rect x="6" y="7" width="12" height="2" rx="1" fill="#666"/>
    <rect x="6" y="11" width="8" height="2" rx="1" fill="#666"/>
    <rect x="6" y="15" width="6" height="2" rx="1" fill="#666"/>
  </svg>
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16 px-2 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Web Development */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <Image src="/window.svg" alt="Web Development" width={40} height={40} className="mb-2" />
            <h2 className="text-xl font-semibold mb-1">Web Development</h2>
            <p className="text-muted-foreground text-sm mb-3">Custom websites, web apps, e-commerce, responsive design, and performance optimization.</p>
            <a href="#" className="mt-auto inline-block px-3 py-1.5 bg-lime-400 text-black font-medium rounded hover:bg-lime-300 transition text-sm">Learn More</a>
          </div>
          {/* Graphics Design */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <PencilIcon />
            <h2 className="text-xl font-semibold mb-1">Graphics Design</h2>
            <p className="text-muted-foreground text-sm mb-3">Brand identity, logo design, marketing materials, print, and social media graphics.</p>
            <a href="#" className="mt-auto inline-block px-3 py-1.5 bg-lime-400 text-black font-medium rounded hover:bg-lime-300 transition text-sm">Learn More</a>
          </div>
          {/* Video Editing */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <Image src="/file.svg" alt="Video Editing" width={40} height={40} className="mb-2" />
            <h2 className="text-xl font-semibold mb-1">Video Editing</h2>
            <p className="text-muted-foreground text-sm mb-3">Professional video content, social media videos, corporate videos, and post-production services.</p>
            <a href="#" className="mt-auto inline-block px-3 py-1.5 bg-lime-400 text-black font-medium rounded hover:bg-lime-300 transition text-sm">Learn More</a>
          </div>
          {/* Digital Marketing */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <Image src="/globe.svg" alt="Digital Marketing" width={40} height={40} className="mb-2" />
            <h2 className="text-xl font-semibold mb-1">Digital Marketing</h2>
            <p className="text-muted-foreground text-sm mb-3">SEO optimization, social media management, online advertising, and content marketing strategy.</p>
            <a href="#" className="mt-auto inline-block px-3 py-1.5 bg-lime-400 text-black font-medium rounded hover:bg-lime-300 transition text-sm">Learn More</a>
          </div>
          {/* Content Creation */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <ContentIcon />
            <h2 className="text-xl font-semibold mb-1">Content Creation</h2>
            <p className="text-muted-foreground text-sm mb-3">Copywriting, blog posts, social media content, and creative writing for digital platforms.</p>
            <a href="#" className="mt-auto inline-block px-3 py-1.5 bg-lime-400 text-black font-medium rounded hover:bg-lime-300 transition text-sm">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}