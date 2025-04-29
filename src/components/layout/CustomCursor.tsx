
import { useCustomCursor } from "@/hooks/useCustomCursor";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const { position, isHovering, isHidden } = useCustomCursor();
  const isMobile = useIsMobile();

  // Don't render cursor on mobile devices
  if (isHidden || isMobile) return null;

  return (
    <div
      className={`cursor-dot glass-cursor ${isHovering ? 'scale-150 bg-teal-500/70' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
