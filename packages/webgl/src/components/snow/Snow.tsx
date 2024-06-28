import { useEffect, useRef } from 'react'
import { useSnow } from './impl'

export const Snow = () => {
  const containerRef = useRef<HTMLDivElement>()
  const containerStyle = {
    width: '100%',
    height: '100%'
  }

  useEffect(() => {
    if (!containerRef.current) {
      return
    }
    const [render, dispose] = useSnow(containerRef.current)
    render()
    return dispose
  }, [])

  return <div ref={containerRef} style={containerStyle} />
}
