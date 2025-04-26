
import { useScrollProgress } from "@/hooks/useScrollProgress";

const ScrollProgressBar = () => {
  const progress = useScrollProgress();

  return <div className="progress-bar" style={{ width: `${progress}%` }} />;
};

export default ScrollProgressBar;
