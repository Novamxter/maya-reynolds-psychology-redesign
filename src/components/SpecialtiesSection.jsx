import React from 'react';

const specialties = [
  {
    id: 'anxiety',
    title: 'Anxiety & Panic',
    description:
      'For adults experiencing constant worry, racing thoughts, muscle tension, or difficulty sleeping. Using Cognitive Behavioral Therapy (CBT) and mindfulness, we calm the nervous system and address chronic overthinking.',
    href: '#Anxiety-Panic',
  },
  {
    id: 'emdr',
    title: 'Trauma & EMDR',
    description:
      'Eye Movement Desensitization and Reprocessing (EMDR) helps process single-incident trauma and complex patterns. We focus on safety and stabilization so you feel grounded in daily life.',
    href: '#emdr',
  },
  {
    id: 'burnout',
    title: 'Burnout & Perfectionism',
    description:
      'Designed for entrepreneurs, creatives, and high-achieving professionals exhausted by high internal pressure. Learn to transition from relentless stress to sustainable ways of working.',
    href: '#Burnout-Perfectionism',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness & Somatic Therapy',
    description:
      'Integrating body-oriented techniques and mindfulness to help you understand both the emotional and physiological sides of stress, restoring regulation and balance.',
    href: '#Mindfulness-Somatic-Therapy',
  },
];

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="bg-(--bg-white) text-(--text) py-16 md:py-24 px-6 sm:px-10 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Outer Flex Container: */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Heading (Fixed Width on Desktop) */}
          <div className="w-full md:w-1/3 shrink-0">
            <h2 className="text-3xl sm:text-4xl font-cormorant text-(--text-heading) font-normal leading-tight tracking-tight">
              My{' '}
              <span className="font-allura text-4xl lg:text-5xl xl:text-6xl italic text-(--text-highlighted) font-normal font-cursive inline-block">
                specialties
              </span>{' '}
              include...
            </h2>
          </div>

          {/* RIGHT SIDE: Flex Items Grid */}
          <div className="w-full md:w-2/3">
            
            {/* DESKTOP LAYOUT (>= 768px): 2 Columns (Trauma/EMDR top, Dissociation/Special Needs bottom) */}
            <div className="hidden md:flex flex-wrap -mx-4 -my-6">
              {specialties.map((item) => (
                <div key={item.id} className="w-1/2 px-4 py-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-cormorant text-(--text-heading) font-normal">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-(--text-desc) font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <a
                      href={item.href}
                      className="inline-block text-xs uppercase tracking-[0.2em] text-(--text-heading) font-semibold pb-1 border-b border-gray-400 hover:border-gray-800 transition-colors"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE LAYOUT (< 768px): 1 Column (Trauma -> Dissociation -> EMDR -> Special Needs) */}
            <div className="flex md:hidden flex-col space-y-10">
              {/* Order index mapping for Mobile sequence matching screenshots: 0:Trauma, 2:Dissociation, 1:EMDR, 3:Special Needs */}
              {[specialties[0], specialties[2], specialties[1], specialties[3]].map((item) => (
                <div key={item.id} className="space-y-4">
                  <h3 className="text-2xl font-serif text-(--text-heading) font-normal">
                    {item.title}
                  </h3>
                  <p className="text-sm text-(--text-desc) font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={item.href}
                      className="inline-block text-xs uppercase tracking-[0.2em] text-(--text-heading) font-semibold pb-1 border-b border-gray-400 hover:border-gray-800 transition-colors"
                    >
                      LEARN MORE
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}