import React from 'react'
import { Inconsolata } from "next/font/google";

const incon = Inconsolata({ subsets: ['latin'] })

const BrutalButton = ({title, link, otherClasses} : {title: string; link: string; otherClasses?: string}) => {
  return (
    <a href={`${link}`} target='_blank'>
      <button className="px-4 py-2 rounded-md border border-lime-400 bg-black text-white text-base hover:shadow-[-4px_4px_0px_0px_rgba(163,230,53)] transition duration-200">
        <div className={incon.className}>
            {title}
        </div>
      </button>
    </a>
  )
}

export default BrutalButton