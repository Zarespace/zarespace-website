import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={200}
        height={200}
        className="mb-4 rounded-full"
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to Zarespace Digital Website</h1>
      <p className="text-lg text-gray-600">This is a simple Next.js website.</p>
    </div>
  );
}
