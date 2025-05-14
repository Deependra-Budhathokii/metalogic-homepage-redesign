import Herosection from "@/components/Herosection";
import Service from "@/components/Service";
import Whymetalogic from "@/components/Whymetalogic";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <Herosection imageUrl="/metalogic-hero-image.svg" Descrip=" Metalogic delivers intelligent software solutions that drive transformation and growth. We help businesses adapt, scale, and thrive in the digital era through innovation, reliability, and a focus on results-driven technology and consulting services." />

      <Service />

      <Whymetalogic />


    </main>
  );
}
