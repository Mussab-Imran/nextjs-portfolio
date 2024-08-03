import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Homepage from "@/components/Homepage";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main  className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Justify-centre: center it vertically, items-centre: center it horizontally
          flex-col: switch orientation, overflow-hidden: to hide the scrollbars */}
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]} />
        <Hero />
        {/* <Homepage/> */}
        {/* <Grid /> */}
      </div>
    </main>
  );
}
