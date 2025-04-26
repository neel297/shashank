
import { useCustomCursor } from "@/hooks/useCustomCursor";

const CustomCursor = () => {
  const { position, isHovering, isHidden } = useCustomCursor();

  if (isHidden) return null;

  return (
    <div
      className={`cursor-dot ${isHovering ? 'scale-150 bg-teal-500/50' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;
