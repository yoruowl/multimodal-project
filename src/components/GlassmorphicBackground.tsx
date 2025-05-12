'use client'

import { useEffect, useRef } from 'react'

interface GlassmorphicBackgroundProps {
  className?: string
}

const GlassmorphicBackground = ({ className = '' }: GlassmorphicBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    // Initialize dots with random positions and sizes
    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: [
        'rgba(59, 130, 246, 0.4)', // Blue
        'rgba(96, 165, 250, 0.3)', // Light blue
        'rgba(37, 99, 235, 0.2)'   // Darker blue
      ][Math.floor(Math.random() * 3)]
    }))
    
    // Create connections between dots
    const connections: { source: number; target: number; }[] = []
    dots.forEach((_, i) => {
      // Connect each dot to 1-3 others
      const connectionCount = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * dots.length)
        if (target !== i) {
          connections.push({ source: i, target })
        }
      }
    })
    
    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return
      
      // Clear canvas with transparent fill for subtle trails
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
      ctx.lineWidth = 0.5
      
      connections.forEach(connection => {
        const source = dots[connection.source]
        const target = dots[connection.target]
        
        // Calculate distance
        const dx = target.x - source.x
        const dy = target.y - source.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Only draw if they're within a certain distance
        if (distance < 150) {
          // Fade line based on distance
          ctx.globalAlpha = 1 - distance / 150
          
          ctx.beginPath()
          ctx.moveTo(source.x, source.y)
          ctx.lineTo(target.x, target.y)
          ctx.stroke()
        }
      })
      
      ctx.globalAlpha = 1
      
      // Update and draw dots
      dots.forEach(dot => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy
        
        // Bounce off edges
        if (dot.x <= dot.radius || dot.x >= canvas.width - dot.radius) {
          dot.vx *= -1
        }
        if (dot.y <= dot.radius || dot.y >= canvas.height - dot.radius) {
          dot.vy *= -1
        }
        
        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`}
    />
  )
}

export default GlassmorphicBackground 