"use client";

import { useEffect, useRef, useState } from "react";

type Effect = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  type: "smoke" | "spark" | "skid";
  color?: string;
};

export default function DriftCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const wheelRef = useRef<HTMLDivElement | null>(null);

  const pointer = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0 });
  const lastScroll = useRef(0);
  const lastSpeed = useRef(0);

  const isDragging = useRef(false);
  const dragOffset = useRef(0);
  const idRef = useRef(0);

  const [effects, setEffects] = useState<Effect[]>([]);

  /* =========================
     POINTER MOVE → SMOKE
  ========================= */
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      pointer.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }

      const dx = e.clientX - lastPointer.current.x;
      const dy = e.clientY - lastPointer.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 6) {
        setEffects((prev) => [
          ...prev,
          {
            id: idRef.current++,
            x: e.clientX,
            y: e.clientY,
            vx: -dx * 0.08,
            vy: -dy * 0.08,
            life: 1,
            type: "smoke",
            color: "rgba(255,255,255,0.55)",
          },
        ]);
      }

      lastPointer.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  /* =========================
     SCROLL EFFECTS
  ========================= */
  useEffect(() => {
    let stopTimer: number;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      lastScroll.current = current;

      const speed = Math.abs(delta);
      const dir = delta > 0 ? 1 : -1;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const progress = current / docHeight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      const x = window.innerWidth - scrollbarWidth - 18;
      const y = progress * window.innerHeight;

      /* 🛞 Wheel follows scroll */
      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateY(${y}px) rotate(${current * 0.4}deg)`;
      }

      /* 💨 Scroll smoke */
      if (speed > 8) {
        setEffects((prev) => [
          ...prev,
          {
            id: idRef.current++,
            x,
            y,
            vx: -0.6,
            vy: dir * -1.2,
            life: 1,
            type: "smoke",
            color:
              dir > 0
                ? "rgba(255,255,255,0.6)"
                : "rgba(180,180,180,0.6)",
          },
        ]);
      }

      /* 💥 Brake sparks + skid */
      if (lastSpeed.current > 40 && speed < 10) {
        for (let i = 0; i < 4; i++) {
          setEffects((prev) => [
            ...prev,
            {
              id: idRef.current++,
              x,
              y,
              vx: -Math.random() * 2,
              vy: Math.random() * 2 - 1,
              life: 0.6,
              type: "spark",
            },
          ]);
        }

        setEffects((prev) => [
          ...prev,
          {
            id: idRef.current++,
            x,
            y,
            vx: 0,
            vy: 0,
            life: 0.8,
            type: "skid",
          },
        ]);
      }

      lastSpeed.current = speed;

      clearTimeout(stopTimer);
      stopTimer = window.setTimeout(() => {
        lastSpeed.current = 0;
      }, 120);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================
     DRAG WHEEL → SCROLL PAGE
  ========================= */
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;

      const deltaY = e.clientY - dragOffset.current;
      dragOffset.current = e.clientY;

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollRatio = docHeight / window.innerHeight;

      window.scrollBy({
        top: deltaY * scrollRatio,
        behavior: "auto",
      });
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  /* =========================
     EFFECT ANIMATION LOOP
  ========================= */
  useEffect(() => {
    let raf: number;

    const animate = () => {
      setEffects((prev) =>
        prev
          .map((e) => ({
            ...e,
            x: e.x + e.vx,
            y: e.y + e.vy,
            life: e.life - 0.035,
          }))
          .filter((e) => e.life > 0)
      );
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* CURSOR DOT */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_14px_rgba(225,6,0,1)]" />
      </div>

      {/* DRAGGABLE SCROLL WHEEL */}
      <div
        ref={wheelRef}
        className="fixed right-3 top-0 z-[9997] cursor-grab active:cursor-grabbing select-none"
        onPointerDown={(e) => {
          isDragging.current = true;
          dragOffset.current = e.clientY;
        }}
      >
        <div className="w-7 h-7 rounded-full border-2 border-gray-300 bg-black shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
      </div>

      {/* EFFECTS */}
      {effects.map((e) => (
        <span
          key={e.id}
          className="fixed pointer-events-none z-[9996]"
          style={{
            left: e.x,
            top: e.y,
            width:
              e.type === "spark"
                ? 6
                : e.type === "skid"
                ? 40
                : 34,
            height:
              e.type === "spark"
                ? 6
                : e.type === "skid"
                ? 4
                : 34,
            transform: "translate(-50%, -50%)",
            opacity: e.life,
            background:
              e.type === "smoke"
                ? `radial-gradient(circle, ${e.color}, transparent)`
                : e.type === "spark"
                ? "orange"
                : "rgba(30,30,30,0.85)",
            borderRadius: e.type === "skid" ? "2px" : "50%",
            filter:
              e.type === "smoke"
                ? "blur(12px)"
                : e.type === "spark"
                ? "blur(1px)"
                : "none",
          }}
        />
      ))}
    </>
  );
}
