import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  type: 'electron' | 'wave' | 'field';
}

const PhysicsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 60;
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          type: ['electron', 'wave', 'field'][Math.floor(Math.random() * 3)] as Particle['type']
        });
      }
    };

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Draw electromagnetic field lines
    const drawFieldLines = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(107, 70, 193, 0.1)';
      ctx.lineWidth = 1;
      
      const time = Date.now() * 0.001;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * 0.5;
        const radius = 150 + Math.sin(time + i) * 30;
        
        ctx.beginPath();
        for (let j = 0; j < 100; j++) {
          const t = j / 100;
          const x = centerX + Math.cos(angle + t * Math.PI * 2) * radius * (1 - t * 0.5);
          const y = centerY + Math.sin(angle + t * Math.PI * 2) * radius * (1 - t * 0.5);
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    };

    // Draw circuit traces
    const drawCircuitTraces = (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.15)';
      ctx.lineWidth = 2;
      
      const time = Date.now() * 0.002;
      const spacing = 80;
      
      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing) {
          const offsetX = Math.sin(time + x * 0.01) * 20;
          const offsetY = Math.cos(time + y * 0.01) * 20;
          
          ctx.beginPath();
          ctx.moveTo(x + offsetX, y + offsetY);
          ctx.lineTo(x + spacing + offsetX, y + offsetY);
          ctx.lineTo(x + spacing + offsetX, y + spacing + offsetY);
          ctx.stroke();
        }
      }
    };

    // Draw wave interference
    const drawWaveInterference = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() * 0.003;
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.3, 0,
        canvas.width * 0.3, canvas.height * 0.3, 200
      );
      
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0)');
      
      ctx.fillStyle = gradient;
      
      for (let i = 0; i < 3; i++) {
        // Ensure radius is always positive by using Math.abs and adding a minimum value
        const radius = Math.abs(30 + Math.sin(time + i * 2) * 60) + 10;
        ctx.beginPath();
        ctx.arc(canvas.width * (0.2 + i * 0.3), canvas.height * 0.5, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animate particles
    const animateParticles = (ctx: CanvasRenderingContext2D) => {
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle based on type
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        if (particle.type === 'electron') {
          ctx.fillStyle = '#6B46C1';
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'wave') {
          ctx.strokeStyle = '#14B8A6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = '#F59E0B';
          ctx.fillRect(particle.x - particle.radius/2, particle.y - particle.radius/2, particle.radius, particle.radius);
        }
        
        ctx.restore();
      });
    };

    // Main animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(107, 70, 193, 0.03)');
      gradient.addColorStop(0.5, 'rgba(20, 184, 166, 0.02)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0.03)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw physics elements
      drawFieldLines(ctx);
      drawCircuitTraces(ctx);
      drawWaveInterference(ctx);
      animateParticles(ctx);
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.05), rgba(20, 184, 166, 0.05))'
      }}
    />
  );
};

export default PhysicsBackground;