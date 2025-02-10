
import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out"
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden md:block fixed pointer-events-none z-50 h-8 w-8 rounded-full border border-primary/50 -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorDotRef}
        className="hidden md:block fixed pointer-events-none z-50 h-1 w-1 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
