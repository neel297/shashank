
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Strengths from "@/components/sections/Strengths";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Shashank Mohan Pandey | Pharmacist Portfolio";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional portfolio of Shashank Mohan Pandey, B.Pharmacy graduate with expertise in pharmaceutical sciences, patient care, and healthcare innovation.');
    
    // Smooth scroll for Safari
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  
  return (
    <>
      <Hero />
      <About />
      <Strengths />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Index;
