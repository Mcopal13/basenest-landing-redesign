import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-placeholder.jpg"
            alt="Military family home"
            width={1600}
            height={800}
            className="w-full h-auto opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">From Orders to Ownership</h1>
          <p className="text-xl mb-6">
            BaseNest helps military families search, plan, and buy with confidence during every PCS.
          </p>
          <a href="#waitlist" className="inline-block px-6 py-3 bg-white text-blue-900 font-bold rounded-lg shadow hover:bg-gray-100 transition">
            Get Started
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Mission-Ready Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-2">Home Search</h3>
            <p>Browse listings near bases worldwide—stateside and OCONUS.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-6xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">BAH Analyzer</h3>
            <p>Compare buy vs rent using your local housing allowance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">PCS Checklist</h3>
            <p>Step-by-step guidance for moving, buying, and settling in.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">What Military Families Say</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="border-l-4 border-blue-700 pl-6 text-left">
            “BaseNest made our overseas PCS a breeze—found a home and landed VA approval within weeks.”<br />
            <span className="block mt-2 text-sm font-bold text-blue-900">— USMC Spouse, Okinawa</span>
          </blockquote>
          <blockquote className="border-l-4 border-blue-700 pl-6 text-left">
            “Every service member should know about this. The BAH tool alone is worth it.”<br />
            <span className="block mt-2 text-sm font-bold text-blue-900">— Army NCO, Ft. Liberty</span>
          </blockquote>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-20 bg-blue-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join the BaseNest Waitlist</h2>
        <p className="mb-6 text-gray-700">Get early access and exclusive PCS housing tools.</p>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input type="email" name="email" required placeholder="Enter your military email" className="p-3 w-full sm:w-auto flex-1 rounded border border-gray-300" />
          <button type="submit" className="px-6 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition">
            Join Now
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-2">No spam — just solid support for your next move.</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 text-center text-sm">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:underline">About</a>|
          <a href="#" className="mx-2 hover:underline">Blog</a>|
          <a href="#" className="mx-2 hover:underline">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} BaseNest. Built by and for military families.</p>
      </footer>
    </div>
  );
}
