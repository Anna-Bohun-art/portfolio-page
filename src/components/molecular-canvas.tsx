"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

export function MolecularCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points: Point[] = [];
    const pointer = { x: 0, y: 0, active: false };
    let frame = 0;
    let width = 0;
    let height = 0;
    let running = true;

    function setup() {
      if (!canvas || !context) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      points.length = 0;
      const count = Math.min(72, Math.max(34, Math.floor((width * height) / 22000)));
      for (let index = 0; index < count; index += 1) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: 1.2 + Math.random() * 1.8,
        });
      }
    }

    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const dark = document.documentElement.classList.contains("dark");
      const nodeColor = dark ? "99, 242, 255" : "20, 123, 145";
      const violetColor = dark ? "166, 132, 255" : "106, 76, 190";

      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];
        if (!reduceMotion) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < -10 || point.x > width + 10) point.vx *= -1;
          if (point.y < -10 || point.y > height + 10) point.vy *= -1;
        }

        for (let targetIndex = index + 1; targetIndex < points.length; targetIndex += 1) {
          const target = points[targetIndex];
          const distance = Math.hypot(point.x - target.x, point.y - target.y);
          if (distance < 145) {
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(${nodeColor}, ${0.14 * (1 - distance / 145)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        const pointerDistance = pointer.active ? Math.hypot(point.x - pointer.x, point.y - pointer.y) : 999;
        const glow = pointerDistance < 160 ? 1 - pointerDistance / 160 : 0;
        context.beginPath();
        context.arc(point.x, point.y, point.radius + glow * 2.5, 0, Math.PI * 2);
        context.fillStyle = `rgba(${index % 7 === 0 ? violetColor : nodeColor}, ${0.42 + glow * 0.45})`;
        context.fill();
      }

      if (!reduceMotion && running) frame = requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    }

    function onVisibilityChange() {
      running = !document.hidden;
      if (running && !reduceMotion) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(draw);
      }
    }

    setup();
    draw();
    window.addEventListener("resize", setup);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", () => {
      pointer.active = false;
    });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", setup);
      canvas.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="molecular-canvas" aria-hidden="true" />;
}
