
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate progress from 0 to 100
    tl.to(setProgress, {
      duration: 2,
      value: 100,
      ease: "power2.inOut",
      onUpdate: () => setProgress(gsap.getProperty(setProgress, "value")),
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="w-full max-w-md space-y-4 p-4">
        <h2 className="text-2xl font-bold text-center mb-4">Loading Experience</h2>
        <Progress value={progress} className="w-full" />
        <p className="text-center text-muted-foreground">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
