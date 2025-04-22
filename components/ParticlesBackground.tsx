import React, { useEffect, useRef, memo, useCallback } from 'react';

// Define types for our particles and network
interface Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;
  opacity: number;
}

interface MousePosition {
  x: number | null;
  y: number | null;
  radius: number;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mousePositionRef = useRef<MousePosition>({
    x: null,
    y: null,
    radius: 200, // Increased radius for more interactive effect
  });
  const animationFrameRef = useRef<number | null>(null);
  
  // Connect particles with vibrant purple gradient lines like the original site
  const connectParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    const particles = particlesRef.current;
    const maxDistance = 150; // Increased connection distance
    
    // Connect all particles within range for more connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          
          // Create gradient for lines
          const gradient = ctx.createLinearGradient(
            particles[i].x, particles[i].y,
            particles[j].x, particles[j].y
          );
          
          // Purple gradient lines
          gradient.addColorStop(0, `rgba(160, 140, 255, ${opacity * 0.7})`);
          gradient.addColorStop(1, `rgba(110, 18, 232, ${opacity * 0.7})`);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8; // Thicker lines
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }, []);
  
  // Create particles
  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particlesRef.current = [];
    
    // More particles for a vibrant, energetic look like the original site
    const isMobile = window.innerWidth < 768;
    const divisor = isMobile ? 12000 : 9000; // Increased particle count (original site used ~9000)
    const numberOfParticles = Math.floor((canvas.width * canvas.height) / divisor);
    
    for (let i = 0; i < numberOfParticles; i++) {
      // Increased size range for more visible particles
      const size = Math.random() * 3 + 1.5; 
      const x = Math.random() * (canvas.width - size * 2);
      const y = Math.random() * (canvas.height - size * 2);
      const directionX = Math.random() * 1 - 0.5; // Increased movement speed
      const directionY = Math.random() * 1 - 0.5; // Increased movement speed
      // Brighter particles - combination of white and light purple
      const isWhite = Math.random() > 0.3; // 70% white, 30% purple particles
      const opacity = Math.random() * 0.5 + 0.4; // Higher base opacity
      const color = isWhite 
        ? `rgba(220, 220, 255, ${opacity})` 
        : `rgba(155, 77, 255, ${opacity})`;
      
      particlesRef.current.push({
        x,
        y,
        directionX,
        directionY,
        size,
        color,
        opacity
      });
    }
  }, []);
  
  // Animation draw function
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // First connect particles, then draw them (ensures lines appear behind particles)
    connectParticles(ctx);

    // Draw and update particles
    particlesRef.current.forEach((particle) => {
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Optional subtle glow effect for larger particles
      if (particle.size > 2.5) {
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(155, 77, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      // Update particle position with more energetic movement
      particle.x += particle.directionX;
      particle.y += particle.directionY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.directionX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.directionY *= -1;
      }
      
      // More interactive mouse effect
      const mousePosition = mousePositionRef.current;
      if (mousePosition.x !== null && mousePosition.y !== null) {
        const dx = particle.x - mousePosition.x;
        const dy = particle.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mousePosition.radius) {
          // Push particle away from mouse with more force
          const angle = Math.atan2(dy, dx);
          const force = (mousePosition.radius - distance) / mousePosition.radius;
          particle.x += Math.cos(angle) * force * 2;
          particle.y += Math.sin(angle) * force * 2;
        }
      }
    });
  }, [connectParticles]);
  
  // Animation loop with FPS limiting
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Setup canvas size
    const resizeCanvas = () => {
      if (canvas) {
        // Use device pixel ratio for sharper rendering
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.scale(dpr, dpr);
        createParticles();
      }
    };
    
    // Improved mouse move handler - more responsive but still efficient
    let throttled = false;
    const throttledMouseMove = (event: MouseEvent) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          throttled = false;
        }, 16); // ~60fps throttle rate
        
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          radius: 200 // Increased radius for more interactive effect
        };
      }
    };
    
    // Animation loop with FPS control
    let lastTime = 0;
    const fps = 30; // Increased FPS for smoother animation
    const fpsInterval = 1000 / fps;
    
    const animate = (timeStamp: number) => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Limit FPS
      const elapsed = timeStamp - lastTime;
      if (elapsed > fpsInterval) {
        lastTime = timeStamp - (elapsed % fpsInterval);
        draw();
      }
    };
    
    // Initialize
    resizeCanvas();
    
    // Add event listeners
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', throttledMouseMove);
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', throttledMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [createParticles, draw]);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ParticlesBackground);
