import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import AboutSection from "../components/AboutSection";
import WhoIHelp from "@/components/WhoIHelp";
import QuoteBanner from "@/components/QuoteBanner";
import AreasOfExpertise from "@/components/Xperties";
import TherapyApproach from "@/components/TherapyApproach";
import HonoringSection from "@/components/HonoringSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ScheduleAppointmentSection from "@/components/AppointmentSection";
import MyOfficeSection from "@/components/MyOfficeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhoIHelp />
      <QuoteBanner />
      <AreasOfExpertise />
      <TherapyApproach />
      <MyOfficeSection />
      <HonoringSection />
      <SpecialtiesSection />
      <ScheduleAppointmentSection />
      <Footer />
    </>
  );
}
