import { useEffect, useRef } from "react";

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    let particles = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    }

    function createParticles() {
      particles = [];

      const count =
        window.innerWidth < 768 ? 85 : 170;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,

          vx: (Math.random() - 0.5) * 0.75,
          vy: (Math.random() - 0.5) * 0.75,

          size: Math.random() * 1.7 + 0.7,

          baseSize: Math.random() * 1.7 + 0.7,

          pulse:
            Math.random() * Math.PI * 2,

          pulseSpeed:
            0.015 + Math.random() * 0.025,
        });
      }
    }

    function moveMouse(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function touchMove(e) {
      if (!e.touches.length) return;

      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }

    function stopMouse() {
      mouse.active = false;
    }

    function animate() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      /* =========================
         PARTICLE MOVEMENT
      ========================= */

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        /* Screen wrapping */

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        /* Pulse */

        p.pulse += p.pulseSpeed;

        p.size =
          p.baseSize +
          Math.sin(p.pulse) * 0.45;

        /* =========================
           CURSOR INTERACTION
        ========================= */

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const distance = Math.hypot(dx, dy);

          const radius = 220;

          if (distance < radius && distance > 0) {
            const force =
              (radius - distance) / radius;

            /*
             * Gentle attraction toward cursor
             */

            p.vx +=
              (dx / distance) *
              force *
              0.018;

            p.vy +=
              (dy / distance) *
              force *
              0.018;
          }
        }

        /* =========================
           NATURAL MOVEMENT
        ========================= */

        p.vx *= 0.995;
        p.vy *= 0.995;

        /* Prevent particles from stopping */

        if (Math.abs(p.vx) < 0.08) {
          p.vx +=
            (Math.random() - 0.5) * 0.018;
        }

        if (Math.abs(p.vy) < 0.08) {
          p.vy +=
            (Math.random() - 0.5) * 0.018;
        }

        /* Speed limit */

        const speed = Math.hypot(
          p.vx,
          p.vy
        );

        const maxSpeed = 1.2;

        if (speed > maxSpeed) {
          p.vx =
            (p.vx / speed) *
            maxSpeed;

          p.vy =
            (p.vy / speed) *
            maxSpeed;
        }
      });

      /* =========================
         CONNECTION NETWORK
      ========================= */

      for (let i = 0; i < particles.length; i++) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const distance = Math.hypot(
            dx,
            dy
          );

          const connectionDistance = 145;

          if (
            distance <
            connectionDistance
          ) {
            let opacity =
              1 -
              distance /
                connectionDistance;

            opacity *= 0.42;

            /* Highlight network near cursor */

            if (mouse.active) {
              const mouseA =
                Math.hypot(
                  a.x - mouse.x,
                  a.y - mouse.y
                );

              const mouseB =
                Math.hypot(
                  b.x - mouse.x,
                  b.y - mouse.y
                );

              if (
                mouseA < 220 ||
                mouseB < 220
              ) {
                opacity *= 2.2;
              }
            }

            opacity = Math.min(
              opacity,
              0.65
            );

            ctx.beginPath();

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle =
              `rgba(196, 22, 32, ${opacity})`;

            ctx.lineWidth = 0.7;

            ctx.stroke();
          }
        }
      }

      /* =========================
         PARTICLE GLOW + NODES
      ========================= */

      particles.forEach((p) => {
        /* Outer glow */

        const gradient =
          ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.size * 5
          );

        gradient.addColorStop(
          0,
          "rgba(232, 165, 171, 0.22)"
        );

        gradient.addColorStop(
          1,
          "rgba(232, 165, 171, 0)"
        );

        ctx.beginPath();

        ctx.fillStyle = gradient;

        ctx.arc(
          p.x,
          p.y,
          p.size * 5,
          0,
          Math.PI * 2
        );

        ctx.fill();

        /* Main node */

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(232, 165, 171, 0.78)";

        ctx.fill();
      });

      /* =========================
         CURSOR NETWORK
      ========================= */

      if (mouse.active) {
        particles.forEach((p) => {
          const distance =
            Math.hypot(
              p.x - mouse.x,
              p.y - mouse.y
            );

          if (distance < 220) {
            const opacity =
              1 - distance / 220;

            ctx.beginPath();

            ctx.moveTo(
              mouse.x,
              mouse.y
            );

            ctx.lineTo(
              p.x,
              p.y
            );

            ctx.strokeStyle =
              `rgba(217, 120, 130, ${
                opacity * 0.6
              })`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        });

        /* =========================
           CURSOR ENERGY RINGS
        ========================= */

        const time =
          Date.now() * 0.002;

        const ring1 =
          8 + Math.sin(time) * 3;

        const ring2 =
          18 + Math.sin(time * 0.8) * 5;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          ring1,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          "rgba(232, 165, 171, 0.55)";

        ctx.lineWidth = 0.8;

        ctx.stroke();

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          ring2,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          "rgba(196, 22, 32, 0.25)";

        ctx.lineWidth = 0.7;

        ctx.stroke();

        /* Cursor center */

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          2.5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(232, 165, 171, 0.95)";

        ctx.fill();
      }

      animationFrame =
        requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      moveMouse
    );

    window.addEventListener(
      "mouseleave",
      stopMouse
    );

    window.addEventListener(
      "touchmove",
      touchMove,
      { passive: true }
    );

    window.addEventListener(
      "touchend",
      stopMouse
    );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        moveMouse
      );

      window.removeEventListener(
        "mouseleave",
        stopMouse
      );

      window.removeEventListener(
        "touchmove",
        touchMove
      );

      window.removeEventListener(
        "touchend",
        stopMouse
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-background"
    />
  );
}

export default NeuralBackground;