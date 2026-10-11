import React from 'react';

const expertiseItems = [
  'ANXIETY & PANIC',
  'TRAUMA & PTSD',
  'PROFESSIONAL BURNOUT',
  'PERFECTIONISM',
  'CBT (COGNITIVE BEHAVIORAL)',
  'EMDR THERAPY',
  'MINDFULNESS PRACTICES',
  'BODY-ORIENTED / SOMATIC',
  'CHRONIC STRESS',
  'HIGH-ACHIEVING ADULTS',
  'IN-PERSON & TELEHEALTH',
  '...AND MORE.',
];

export default function AreasOfExpertise() {
  return (
    <section className="bg-(--bg-white) text-(--text) py-12 md:pt-14 md:pb-30 px-6 sm:px-10 lg:px-26 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* SECTION TITLE */}
          <div className="md:col-span-4 lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant text-(--text-heading) font-normal leading-tight">
              Areas of{' '}
              <span className="font-allura text-5xl lg:text-6xl xl:text-7xl text-(--text-highlighted) font-normal font-cursive">
                expertise
              </span>
            </h2>
          </div>

          {/* EXPERTISE LIST */}
          <div className="md:col-span-8 lg:col-span-8">
            
            {/* Desktop View (>= 768px): 2 Side-by-Side Columns */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-6">
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-200/80 hover:border-gray-400 transition-colors"
                >
                  <p className="text-xs sm:text-sm tracking-[0.18em] text-(--text-desc) font-medium uppercase">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile View (< 768px): Single Stacked Column */}
            <div className="block md:hidden space-y-5">
              {expertiseItems.map((item, index) => (
                <div
                  key={index}
                  className="pb-4 border-b border-gray-200/80"
                >
                  <p className="text-xs sm:text-sm tracking-[0.18em] text-(--text-desc) font-medium uppercase">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}