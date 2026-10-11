import React from "react";
import Image from "next/image";

const cardsData = [
  {
    id: "anxiety",
    title: "Anxiety & Panic",
    image: "/Images/anxiety-tea.jpg", // Replace with your image path
    alt: "Two adults sitting by the beach water",
    description:
      "For adults and professionals dealing with constant worry, racing thoughts, muscle tension, or trouble sleeping. Using CBT and mindfulness, we help calm your nervous system and dismantle overthinking patterns",
  },
  {
    id: "trauma",
    title: "Trauma & EMDR",
    image: "/Images/balance-stone.jpg", // Replace with your image path
    alt: "A happy couple embracing outdoors",
    description:
      "Carefully paced support for single-incident trauma or complex, long-standing patterns from earlier life. Integrating EMDR and body-oriented tools helps you feel regulated, safe, and grounded.",
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism",
    image: "/Images/desk.jpg", // Replace with your image path
    alt: "Children playing at the beach",
    description:
      "Tailored for high-achieving professionals, entrepreneurs, and creatives experiencing internal exhaustion. Learn to move past relentless pressure toward sustainable ways of living.",
  },
];

export default function WhoIHelp() {
  return (
    <section id="services" className="bg-(--bg-white) text-(--text) py-16 md:py-24 px-6 sm:px-10 lg:px-14 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant text-(--text-heading) font-normal leading-tight mb-8 md:mb-14">
          Who I{" "}
          <span className="font-allura italic text-(--text-highlighted) font-normal font-cursive text-5xl lg:text-6xl xl:text-7xl">
            help
          </span>
        </h2>

        {/* Card Grid: 1 Column on Mobile (<768px), 3 Columns on Desktop (>=768px) */}
        <div className="flex justify-end w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-[85%] gap-10 md:gap-6 lg:gap-10 items-start">
            {cardsData.map((card) => (
              <div
                key={card.id}
                className="flex flex-col space-y-4 sm:space-y-5"
              >
                {/* Image Container: Landscape on Mobile (<768px), Square on Desktop (>=768px) */}
                <div className="relative w-full aspect-video md:aspect-9/12 overflow-hidden shadow-sm bg-gray-200">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-cormorant text-(--text-heading) font-normal pt-1">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-(--text-desc) font-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
