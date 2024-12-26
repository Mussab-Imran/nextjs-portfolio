"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import '@/app/globals.css'

export default function Home() {
  return (
    <main className="h-screen w-full">

      <section className="flex items-center justify-start h-[100vh]">
        <div className="ml-20">
          <Hero />
        </div>
      </section>

      <section className="h-full ml-[10vw]">
        <div>
          <AboutMe />
        </div>
      </section>

    </main>
  );
}


