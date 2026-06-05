import { useEffect, useRef } from 'react';

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let stars = [];
    let planets = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Star {
      constructor() {
        this.reset();
        // Randomize initial X position across the whole screen
        this.x = Math.random() * canvas.width;
      }

      reset() {
        this.x = canvas.width + Math.random() * 100;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5;
        this.speed = (Math.random() * 0.2) + 0.05;
        this.opacity = Math.random();
        this.twinkleSpeed = (Math.random() * 0.02) + 0.005;
      }

      update() {
        this.x -= this.speed;
        this.opacity += this.twinkleSpeed;
        
        if (this.opacity >= 1 || this.opacity <= 0.1) {
          this.twinkleSpeed *= -1;
        }

        if (this.x < 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    class Planet {
      constructor(color1, color2, radius, speed, yPos) {
        this.color1 = color1;
        this.color2 = color2;
        this.radius = radius;
        this.speed = speed;
        this.y = yPos;
        this.x = Math.random() * canvas.width;
      }

      reset() {
        this.x = canvas.width + this.radius + Math.random() * 200;
      }

      update() {
        this.x -= this.speed;
        if (this.x < -this.radius * 2) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Add a subtle gradient to make it look spherical
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3, 
          this.y - this.radius * 0.3, 
          this.radius * 0.1, 
          this.x, 
          this.y, 
          this.radius
        );
        gradient.addColorStop(0, this.color1);
        gradient.addColorStop(1, this.color2);

        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // Responsive star count
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }

      planets = [
        // Purple/pink planet
        new Planet('rgba(224, 64, 211, 0.4)', 'rgba(142, 36, 170, 0.1)', 80, 0.1, canvas.height * 0.2),
        // Blue planet
        new Planet('rgba(14, 165, 233, 0.3)', 'rgba(3, 105, 161, 0.05)', 140, 0.05, canvas.height * 0.8),
        // Distant small cyan planet
        new Planet('rgba(45, 212, 191, 0.2)', 'rgba(15, 118, 110, 0.05)', 40, 0.08, canvas.height * 0.5)
      ];
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      planets.forEach(planet => {
        planet.update();
        planet.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}
