"use client";
import { LampContainer } from "@/components/ui/Lamp";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="overflow-y-auto scrollbar-thin">
      <section>
        <HeroSection />
      </section>
      <section>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Build Digital Experiences <br /> the right way
          </motion.h1>
        </LampContainer>
      </section>
      <section>
        <Skills />
      </section>
      {/* <section>
        <GlobeDemo />
      </section> */}
    </main>
  );
}
