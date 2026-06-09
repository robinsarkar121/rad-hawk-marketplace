import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const animate = () => {
      // Dot snaps instantly
      dotRef.current.style.left = mouse.current.x + "px";
      dotRef.current.style.top = mouse.current.y + "px";

      // Ring smoothly follows
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      ringRef.current.style.left = ring.current.x + "px";
      ringRef.current.style.top = ring.current.y + "px";

      requestAnimationFrame(animate);
    };
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1.5px solid rgba(220,50,50,0.85)",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 10,
          height: 10,
          background: "#dc3232",
          borderRadius: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
}