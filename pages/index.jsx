import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white text-center py-24 px-6">
        <img
          src="/hero-placeholder.jpg"
          alt="Military family home"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">From Orders to Ownership</h1>
          <p className="text-xl mb-6">
            BaseNest helps military families search, plan, and buy with confidence during every PCS.
          </p>
          <a
            href="#waitlist"
            className="inline-block px-6 py-3 bg-white text-blue-900 font-bold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ... rest of your sections (features, testimonials, waitlist, footer) ... */}
    </div>
  );
}
