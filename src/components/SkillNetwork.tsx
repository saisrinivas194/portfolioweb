import React, { useEffect, useRef } from 'react';

interface SkillNode {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  skill: string;
  category: 'core' | 'tech' | 'tool' | 'domain';
}

const SkillNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<SkillNode[]>([]);

  const skills = [
    // Core Skills (reduced from 10 to 6)
    { skill: 'AI', category: 'core' as const },
    { skill: 'ML', category: 'core' as const },
    { skill: 'Data Science', category: 'core' as const },
    { skill: 'Deep Learning', category: 'core' as const },
    { skill: 'Data Analytics', category: 'core' as const },
    { skill: 'Statistics', category: 'core' as const },
    
    // Technical Skills (reduced from 29 to 10)
    { skill: 'Python', category: 'tech' as const },
    { skill: 'TensorFlow', category: 'tech' as const },
    { skill: 'PyTorch', category: 'tech' as const },
    { skill: 'Pandas', category: 'tech' as const },
    { skill: 'NumPy', category: 'tech' as const },
    { skill: 'React', category: 'tech' as const },
    { skill: 'SQL', category: 'tech' as const },
    { skill: 'JavaScript', category: 'tech' as const },
    { skill: 'Scikit-learn', category: 'tech' as const },
    { skill: 'Tableau', category: 'tech' as const },
    
    // Tools (reduced from 18 to 6)
    { skill: 'Jupyter', category: 'tool' as const },
    { skill: 'Git', category: 'tool' as const },
    { skill: 'AWS', category: 'tool' as const },
    { skill: 'Docker', category: 'tool' as const },
    { skill: 'VS Code', category: 'tool' as const },
    { skill: 'Google Cloud', category: 'tool' as const },
    
    // Domain Knowledge (reduced from 30 to 8)
    { skill: 'NLP', category: 'domain' as const },
    { skill: 'Computer Vision', category: 'domain' as const },
    { skill: 'Time Series', category: 'domain' as const },
    { skill: 'Regression', category: 'domain' as const },
    { skill: 'Classification', category: 'domain' as const },
    { skill: 'Feature Engineering', category: 'domain' as const },
    { skill: 'Model Deployment', category: 'domain' as const },
    { skill: 'Data Visualization', category: 'domain' as const }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeNodes = () => {
      nodesRef.current = skills.map((skillData, index) => ({
        id: `node-${index}`,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1, // Much slower movement
        vy: (Math.random() - 0.5) * 0.1,
        skill: skillData.skill,
        category: skillData.category
      }));
    };

    const getCategoryColor = (category: string): string => {
      switch (category) {
        case 'core': return '#06b6d4'; // Cyan
        case 'tech': return '#0f766e'; // Dark teal
        case 'tool': return '#06b6d4'; // Cyan
        case 'domain': return '#0f766e'; // Dark teal
        default: return '#06b6d4';
      }
    };

    const drawNode = (node: SkillNode) => {
      const color = getCategoryColor(node.category);
      const size = node.category === 'core' ? 2 : node.category === 'tech' ? 1.7 : 1.4; // Slightly larger dots for better visibility
      
      // Draw node with high visibility
      ctx.beginPath();
      ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.7; // Much more visible
      ctx.fill();
      
      // Strong glow effect
      ctx.beginPath();
      ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.25; // Strong glow
      ctx.fill();
      
      ctx.globalAlpha = 1;
    };

    const drawConnection = (node1: SkillNode, node2: SkillNode, distance: number) => {
      const maxDistance = 120; // Shorter connections for cleaner look
      const opacity = Math.max(0, (maxDistance - distance) / maxDistance) * 0.15; // Much more subtle connections
      
      if (opacity > 0.05) {
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`; // Very subtle cyan color 
        ctx.lineWidth = 0.8; // Thinner lines for subtlety
        ctx.stroke();
      }
    };

    const updateNodes = () => {
      nodesRef.current.forEach(node => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      updateNodes();

      // Draw connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          drawConnection(node1, node2, distance);
        }
      }

      // Draw nodes
      nodesRef.current.forEach(drawNode);

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initializeNodes();
    };

    resizeCanvas();
    initializeNodes();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none skill-network-canvas"
    />
  );
};

export default SkillNetwork; 