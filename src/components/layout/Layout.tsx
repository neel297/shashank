
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNavDots from "./SideNavDots";
import ScrollProgressBar from "./ScrollProgressBar";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <SideNavDots />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
