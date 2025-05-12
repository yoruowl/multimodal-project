'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

interface Edge {
  source: number
  target: number
}

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas to full width/height of container
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Create nodes
    const nodes: Node[] = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
      color: i < 5 ? '#3B82F6' : i < 15 ? '#4B5563' : '#9CA3AF'
    }))
    
    // Create edges between nodes
    const edges: Edge[] = []
    nodes.forEach((_, i) => {
      // Connect each node to 2-4 others
      const connections = Math.floor(Math.random() * 3) + 2
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * nodes.length)
        if (target !== i) {
          edges.push({ source: i, target })
        }
      }
    })
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw edges
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.2)'
      ctx.lineWidth = 0.5
      edges.forEach(edge => {
        const source = nodes[edge.source]
        const target = nodes[edge.target]
        
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
      
      // Update and draw nodes
      nodes.forEach(node => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        
        // Bounce off edges
        if (node.x <= node.radius || node.x >= canvas.width - node.radius) {
          node.vx *= -1
        }
        if (node.y <= node.radius || node.y >= canvas.height - node.radius) {
          node.vy *= -1
        }
        
        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      })
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
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
    <div className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default NetworkVisualization 