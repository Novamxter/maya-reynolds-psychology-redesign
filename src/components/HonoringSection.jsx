import React from 'react';
import Image from 'next/image';

export default function HonoringSection() {
  return (
    <section className="bg-(--bg-white) text-(--text) py-12 md:py-24 overflow-x-hidden">
      
      <div className="w-full pl-6 md:pl-0 pr-0 md:pr-12 lg:pr-20 xl:pr-28">
        
        {/* Flex Layout: Stacked vertically on Mobile, Horizontal on Desktop */}
        <div className="flex flex-col md:flex-row items-end gap-8 md:gap-10 lg:gap-14">
          
          {/* IMAGE CONTAINER */}
          <div className="w-full md:w-[40%] lg:w-[56%] shrink-0">
            <div className="relative w-full h-70 sm:h-80 md:h-100 lg:h-120">
              <Image
                src="/Images/misty-morning-path.jpg" 
                alt="Misty morning path"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="w-full md:w-5/12 lg:w-[45%] flex flex-col justify-end pr-6 md:pr-0">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant text-(--text-heading) font-normal leading-[1.3] tracking-tight">
              Honoring where you’ve been{' '}
              <span className="font-allura text-4xl lg:text-5xl xl:text-6xl italic text-(--text-highlighted) font-normal font-cursive sm:text-4xl inline-block mr-2">
                &amp;
              </span>{' '}
              helping you cultivate sustainable ways of living.
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}