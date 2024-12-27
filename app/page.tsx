import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import '@/app/globals.css'
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="h-screen w-full">

      <section className="flex items-center justify-start h-[100vh]">
        <div className="ml-[1vw] md:ml-20">
          <Hero />
        </div>
      </section>

      <section className="h-full">
        <div>
          <AboutMe />
        </div>
      </section>

      <section className="h-full">
        <div>
          <WorkExperience />
        </div>
      </section>

      <section className="h-full">
        <div>

        </div>
      </section>

    </main>
  );
}


