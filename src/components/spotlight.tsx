import { useEffect, useState, useRef } from "react";

export default function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frameId = useRef<number | null>(null);
  const latestPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      setPosition({ ...latestPos.current });
      frameId.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      latestPos.current = { x: e.clientX, y: e.clientY };
      if (frameId.current === null) {
        frameId.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] mix-blend-lighten"
      style={{
        background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 80%)`,
      }}
    />
  );
}