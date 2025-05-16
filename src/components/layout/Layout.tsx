
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNavDots from "./SideNavDots";
import ScrollProgressBar from "./ScrollProgressBar";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";
import DnaBackgroundAnimation from "./DnaBackgroundAnimation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading time to 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="relative min-h-screen flex flex-col">
        {/* Background with reduced opacity */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10"></div>
          <DnaBackgroundAnimation />
        </div>
        
        <CustomCursor />
        <ScrollProgressBar />
        <Navbar />
        <SideNavDots />
        
        <main className="flex-grow relative z-10">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
