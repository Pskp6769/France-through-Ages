import { useEffect, useRef } from "react";

/**
 * Smooth trailing blob cursor — premium, subtle.
 * Disabled on touch / small screens.
 */
const BlobCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const blob = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      hovering.current = !!t.closest("a, button, [data-cursor='hover']");
    };

    let raf = 0;
    const tick = () => {
      // Dot — locked to pointer (no perceivable lag)
      dot.current.x = target.current.x;
      dot.current.y = target.current.y;
      // Blob — light trail, very responsive
      blob.current.x += (target.current.x - blob.current.x) * 0.35;
      blob.current.y += (target.current.y - blob.current.y) * 0.35;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (blobRef.current) {
        const scale = hovering.current ? 1.8 : 1;
        blobRef.current.style.transform = `translate3d(${blob.current.x}px, ${blob.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full bg-ink/70 mix-blend-difference hidden md:block"
        style={{ transition: "transform 0.25s var(--ease-soft), background 0.3s ease" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1 w-1 rounded-full bg-background mix-blend-difference hidden md:block"
      />
    </>
  );
};

export default BlobCursor;
