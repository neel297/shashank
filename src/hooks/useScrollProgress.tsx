
import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        const scrollProgress = Number((currentScrollPos / scrollHeight).toFixed(2));
        setProgress(scrollProgress * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    // Initialize on mount
    updateScrollProgress();
    
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
};
