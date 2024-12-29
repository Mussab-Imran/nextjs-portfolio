"use client"
import '@/app/globals.css';
import { useEffect } from 'react';
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {

  useEffect(() => {
    const applyParallax = (): void => {
      const body = document.body;

      const scrollPosition = window.scrollY;

      body.style.backgroundPosition = `center -${scrollPosition * 0.1}px`;
    };

    window.addEventListener('scroll', applyParallax);

    return () => {
      window.removeEventListener('scroll', applyParallax);
    };
  }, []);

  return (
    <main className="h-screen w-full">

      <section className="flex items-center justify-center h-[100vh]">
        <div>
          <Hero />
        </div>
      </section>

      <section className="h-full mb-[60vh] md:mb-0"> 
        <div>
          <AboutMe />
        </div>
      </section>

      <section className="h-full mb-[60vh] md:mb-0"> 
        <div>
          <Skills />
        </div>
      </section>

      <section className="h-full md:mt-0 mb-[150vh] md:mb-[100vh]"> 
        <div>
          <WorkExperience />
        </div>
      </section>

      <section className="h-full md:mt-[1vh] mt-[60vh] md:mb-[70vh]">
        <div>
          <Projects />
        </div>
      </section>

      <section className="h-full md:mt-[1vh] mt-[60vh] md:mb-0">
        <div>
          <Footer />
        </div>
      </section>

    </main>
  );
}
