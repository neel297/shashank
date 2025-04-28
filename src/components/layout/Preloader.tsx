
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
      className={`fixed inset-0 flex items-center justify-center bg-white z-[100] transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gradient mb-8">
          Shashank Pandey
        </h1>
        <div className="loading">
          <svg width="64px" height="48px">
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
          </svg>
        </div>
      </div>

      <style>
        {`
          .loading svg polyline {
            fill: none;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .loading svg polyline#back {
            fill: none;
            stroke: #0ea4e933;
          }

          .loading svg polyline#front {
            fill: none;
            stroke: #0ea4e9;
            stroke-dasharray: 48, 144;
            stroke-dashoffset: 192;
            animation: dash_682 1.4s linear infinite;
          }

          @keyframes dash_682 {
            72.5% {
              opacity: 0;
            }

            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
