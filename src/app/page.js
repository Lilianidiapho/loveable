"use client";

// src/app/page.js
import { motion } from "framer-motion";
import PageSection from "@/sections/pageSection";
import { Button } from "@/components/ui/button"; // Make sure you have a Button component
import { ArrowDown } from "lucide-react";



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-6 bg-grey-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight"
        >
          Idiapho Ogheneyoma 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto"
        >
          Aspiring Frontend Developer | Passionate About Creative Web Experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold bg-blue-600 text-white hover:scale-105 transition-transform duration-200"
          >
            View My Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Accordion Section */}
      <PageSection />
    </div>
  );
}
