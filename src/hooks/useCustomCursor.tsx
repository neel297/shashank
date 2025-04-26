
import { useEffect, useState } from 'react';

export const useCustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if device has hover capability (not mobile/touch)
    const hasHoverSupport = window.matchMedia('(hover: hover)').matches;
    if (!hasHoverSupport) {
      setIsHidden(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setPosition({ x: -100, y: -100 });
    };

    const onMouseEnter = () => {
      setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    };

    // Track hover state on interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    // Add hover listeners after a slight delay to ensure DOM is ready
    const timer = setTimeout(addHoverListeners, 500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      clearTimeout(timer);
      
      const interactiveElements = document.querySelectorAll('a, button, .interactive');
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setIsHovering(true));
        element.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);

  return { position, isHovering, isHidden };
};
