"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CrossCard({ position, imageUrl }: { position: string, imageUrl?: string }) {
  return (
    <>
      <div className=" flex flex-col lg:flex-row w-full gap-4 mx-auto px-8">
        <div className={`border group/canvas-card flex items-center border-slate-400 max-w-sm w-full mx-auto p-4 h-[30rem] absolute ${position}`}>
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          {imageUrl ? (
            <img src={imageUrl} alt="Card Image" className="w-full h-full object-cover" />
          ) : (
            <p className="text-white">test here</p>
          )}
        </div>
      </div>
    </>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
