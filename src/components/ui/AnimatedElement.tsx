
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 
    | "fade-up" 
    | "fade-down" 
    | "fade-left" 
    | "fade-right" 
    | "zoom-in" 
    | "zoom-out";
  delay?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const AnimatedElement = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold, triggerOnce });

  // Map animation types to CSS classes
  const animationClasses = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-down": "opacity-0 -translate-y-10",
    "fade-left": "opacity-0 translate-x-10",
    "fade-right": "opacity-0 -translate-x-10",
    "zoom-in": "opacity-0 scale-95",
    "zoom-out": "opacity-0 scale-105",
  };

  const baseClass = animationClasses[animation] || animationClasses["fade-up"];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className} ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : baseClass
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
