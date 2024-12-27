import '@/app/globals.css'
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen w-full">
      
      <section className="flex items-center justify-start h-[100vh]">
        <div className="ml-[1vw] md:ml-20">
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
      <section className="h-full md:mt-0  mb-[1vh] md:mb-[70vh]"> 
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
