import { useEffect, useState, useRef } from "react";

export default function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const frameId = useRef<number | null>(null);
  const latestPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !hasFinePointer) {
      return;
    }

    setEnabled(true);

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

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(420px at ${position.x}px ${position.y}px, rgba(88, 166, 255, 0.045), transparent 80%)`,
      }}
    />
  );
}