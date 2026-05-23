import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">
        Welcome to My Portfolio.
      </h1>

      <p className="mt-4 text-zinc-400">
        This is the homepage of my portfolio. Built with Next.js and Tailwind.
      </p>

      <Link 
        href="/about" 
        className="mt-6 inline-block text-blue-500 hover:underline"
      >
        About Me
      </Link>

    </main>
  );
}