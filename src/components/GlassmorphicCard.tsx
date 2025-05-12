'use client'

import { ReactNode } from 'react'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
  color?: 'blue' | 'gray' | 'white'
  hoverEffect?: boolean
}

const GlassmorphicCard = ({
  children,
  className = '',
  intensity = 'medium',
  color = 'white',
  hoverEffect = true
}: GlassmorphicCardProps) => {
  // Configure intensity levels
  const blurIntensity = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-lg'
  }
  
  // Configure background colors with transparency
  const bgColor = {
    blue: 'bg-blue-500/20',
    gray: 'bg-gray-500/20',
    white: 'bg-white/40'
  }
  
  // Border and shadow config
  const border = 'border border-white/30'
  const shadow = 'shadow-lg'
  
  // Hover effect
  const hover = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-xl hover:bg-white/50 hover:translate-y-[-2px]' 
    : ''
  
  return (
    <div 
      className={`
        ${blurIntensity[intensity]} 
        ${bgColor[color]} 
        ${border} 
        ${shadow} 
        ${hover} 
        rounded-xl 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassmorphicCard 