
import { useEffect, useState } from "react";

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Add a delay before completely hiding the preloader
      const timer = setTimeout(() => {
        setHidden(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (hidden) return null;

  return (
    <div
      className={`preloader ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gradient mb-4">
          Shashank Pandey
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-pharma-500 animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 rounded-full bg-pharma-600 animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
