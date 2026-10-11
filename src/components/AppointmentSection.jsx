import React from 'react';
import Image from 'next/image';

export default function ScheduleAppointmentSection() {
  return (
    <section id="contact" className="bg-(--bg-secondary) text-(--text) py-12 md:py-24 overflow-x-hidden">
      
      {/* DESKTOP LAYOUT (>= 768px): 3-column flex with full bleed image on right */}
      <div className="hidden md:flex w-full items-end justify-between pl-6 lg:pl-12 pr-0">
        
        {/* Left Side Peek Image */}
        <div className="w-1/6 shrink-0 -ml-16 lg:-ml-20">
          <div className="relative w-full h-95 lg:h-115 rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/Images/schedule-appointment.jpg" // Replace with left beach image
              alt="Hands picking up seashells on sand"
              fill
              className="object-cover object-right"
            />
          </div>
        </div>

        {/* Center Content Column */}
        <div className="w-full md:w-5/12 lg:w-[50%] px-6 lg:px-10 flex flex-col space-y-6">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gray-700 font-medium 
          lg:pb-[20%]">
            SCHEDULE A CONSULTATION
          </p>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-cormorant text-(--text-heading) font-normal leading-tight tracking-tight">
            Take the first step toward{' '}
            <span className="font-allura text-(--text-highlighted) font-normal font-cursive text-4xl lg:text-5xl xl:text-6xl inline-block">
              feeling
            </span>{' '}
            more grounded and resilient.
          </h2>

          <p className="text-sm lg:text-base text-(--text-desc) font-light leading-relaxed">
            If you are looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit. Whether you prefer in-person therapy in Santa Monica or secure telehealth across California, therapy offers a space to slow down and reconnect.
          </p>

          <p className="text-sm text-(--text-desc) font-light">
            Click below to request a complimentary initial consultation.
          </p>

          <div className="pt-2">
            <a
              href="#book"
              className="inline-block px-8 py-3 rounded-[60%] border border-gray-600 text-xs tracking-[0.2em] uppercase text-(--text) font-medium hover:bg-(--text) hover:text-white transition-all duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Right Side Full-Bleed Image (Touches Right Edge) */}
        <div className="w-full md:w-5/12 lg:w-5/12 shrink-0 lg:-mr-25">
          <div className="relative w-full h-120 lg:h-145">
            <Image
              src="/Images/office1.jpeg" // Replace with right beach image
              alt="Person drawing in beach sand with child"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>

      {/* MOBILE LAYOUT (< 768px): Sequential Stack */}
      <div className="flex md:hidden flex-col space-y-8">
        
        {/* Top Mobile Image: Touches Left Edge */}
        <div className="w-[52%] pr-6 mb-18">
          <div className="relative w-full h-50 sm:h-55">
            <Image
              src="/Images/schedule-appointment.jpg"
              alt="Hands picking up seashells on sand"
              fill
              sizes='(100vw)'
              className="object-cover object-right"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="px-12 space-y-8">
          <p className="text-xs tracking-[0.18em] uppercase text-gray-700 font-medium">
            SCHEDULE AN APPOINTMENT
          </p>

          <h2 className="text-3xl font-serif text-(--text-heading) font-normal leading-tight">
            Find a therapist who is the right fit for{' '}
            <span className="font-serif italic text-(--text-highlighted) font-normal font-cursive text-4xl inline-block">
              you.
            </span>
          </h2>

          <p className="text-sm text-(--text-desc) font-light leading-relaxed">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>

          <p className="text-sm text-(--text-desc) font-light">
            Click the button below to schedule an appointment.
          </p>

          <div>
            <a
              href="#book"
              className="inline-block px-8 py-3 rounded-[60%] border border-gray-600 text-xs tracking-[0.18em] uppercase text-(--text) font-medium mt-14"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Bottom Mobile Image: Touches Right Edge */}
        <div className="w-full pl-30 pt-4">
          <div className="relative w-full h-60 sm:h-75">
            <Image
              src="/Images/office1.jpeg"
              alt="Person drawing in beach sand with child"
              fill
              sizes='(100vw)'
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>

    </section>
  );
}