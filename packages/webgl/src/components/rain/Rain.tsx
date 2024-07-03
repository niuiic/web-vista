import { useEffect, useRef } from 'react'
import { useRain } from './impl'

export const Rain = () => {
  const canvasRef = useRef<HTMLCanvasElement>()
  const canvasStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000'
  }

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const { render, dispose } = useRain(() => canvasRef.current)
    render({})
    return dispose
  }, [])

  return <canvas ref={canvasRef} style={canvasStyle} />
}
