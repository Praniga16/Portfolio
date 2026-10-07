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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      createParticles();
    }

    function createParticles() {
      particles = [];

      const count = window.innerWidth < 768 ? 80 : 140;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,

          size: Math.random() * 1.8 + 0.7,
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
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      /* =========================
         MOVE PARTICLES
      ========================= */

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        /* Screen wrapping */

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        /* Mouse interaction */

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          const radius = 180;

          if (distance < radius) {
            const force =
              (radius - distance) / radius;

            const angle = Math.atan2(dy, dx);

            p.vx +=
              Math.cos(angle) *
              force *
              0.08;

            p.vy +=
              Math.sin(angle) *
              force *
              0.08;
          }
        }

        /* Slow down */

        p.vx *= 0.985;
        p.vy *= 0.985;

        /* Keep minimum movement */

        if (Math.abs(p.vx) < 0.05) {
          p.vx +=
            (Math.random() - 0.5) * 0.01;
        }

        if (Math.abs(p.vy) < 0.05) {
          p.vy +=
            (Math.random() - 0.5) * 0.01;
        }
      });


      /* =========================
         CONNECTION LINES
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

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 135) {
            let opacity =
              1 - distance / 135;

            /* Stronger near mouse */

            if (mouse.active) {
              const mouseA = Math.hypot(
                a.x - mouse.x,
                a.y - mouse.y
              );

              const mouseB = Math.hypot(
                b.x - mouse.x,
                b.y - mouse.y
              );

              if (
                mouseA < 180 ||
                mouseB < 180
              ) {
                opacity *= 2;
              }
            }

            opacity = Math.min(
              opacity,
              0.45
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
         PARTICLES
      ========================= */

      particles.forEach((p) => {
        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(232, 165, 171, 0.7)";

        ctx.fill();
      });


      /* =========================
         MOUSE CONNECTIONS
      ========================= */

      if (mouse.active) {
        particles.forEach((p) => {
          const distance = Math.hypot(
            p.x - mouse.x,
            p.y - mouse.y
          );

          if (distance < 180) {
            const opacity =
              1 - distance / 180;

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
                opacity * 0.55
              })`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        });

        /* Cursor interaction point */

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          3,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          "rgba(232, 165, 171, 0.9)";

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