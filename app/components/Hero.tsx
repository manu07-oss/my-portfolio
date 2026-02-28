"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Manogna Vengala</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl text-gray-400 mb-6"
      >
        DevOps Engineer | AWS | Azure | Terraform | Kubernetes | CI/CD
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
}