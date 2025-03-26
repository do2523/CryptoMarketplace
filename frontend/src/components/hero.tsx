import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20" />
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          The Future of Crypto Trading
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-gray-300 mb-6"
        >
          Trade smarter, faster, and more securely with our AI-powered platform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center gap-2">
            Get Started <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center opacity-50">
        <img src="/placeholder-chart.png" alt="Crypto Chart" className="w-3/4 max-w-lg" />
      </div>
    </section>
  );
}
