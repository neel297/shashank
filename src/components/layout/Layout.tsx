
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
      <DnaBackgroundAnimation />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <SideNavDots />
      <main className="min-h-screen relative z-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
