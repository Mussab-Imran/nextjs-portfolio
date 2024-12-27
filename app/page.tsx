"use client"
import '@/app/globals.css';
import { useEffect } from 'react';
import Hero from "@/components/hero";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  // Parallax effect function
  useEffect(() => {
    const applyParallax = (): void => {
      // Select the body element
      const body = document.body;

      // Get the scroll position
      const scrollPosition = window.scrollY;

      // Apply a slight vertical movement based on the scroll position
      body.style.backgroundPosition = `center -${scrollPosition * 0.1}px`;
    };

    // Add scroll event listener
    window.addEventListener('scroll', applyParallax);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', applyParallax);
    };
  }, []);

  return (
    <main className="h-screen w-full">
      
      {/* Parallax background is applied globally, no need to add it here */}
      <section className="flex items-center justify-center h-[100vh]">
        <div>
          <Hero />
        </div>
      </section>

      {/* Add margin-bottom to prevent overlap with the next section */}
      <section className="h-full mb-[60vh] md:mb-0"> 
        <div>
          <AboutMe />
        </div>
      </section>

      {/* Add margin-top to prevent overlap with the AboutMe section */}
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
