import { useState, useEffect } from 'react'

export const useLossCounter = () => {
  const [lossCounter, setLossCounter] = useState(384950)

  useEffect(() => {
    const interval = setInterval(() => {
      setLossCounter(prev => prev + 127)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return lossCounter
} 