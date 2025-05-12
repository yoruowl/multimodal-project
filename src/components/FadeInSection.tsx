'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // When the element enters the viewport
      if (entries[0].isIntersecting) {
        // Add a delay if specified
        setTimeout(() => {
          setIsVisible(true)
        }, delay)
        
        // Once we've shown this element, no need to observe it anymore
        if (domRef.current) {
          observer.unobserve(domRef.current)
        }
      }
    })
    
    if (domRef.current) {
      observer.observe(domRef.current)
    }
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current)
      }
    }
  }, [delay])

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transform transition-transform duration-700`}
    >
      {children}
    </div>
  )
}

export default FadeInSection 