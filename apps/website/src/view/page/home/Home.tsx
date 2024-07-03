import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './home.module.scss'

export const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/showcase')
  }, [])

  const homeRef = useRef<HTMLDivElement>()
  const canvasRef = useRef<HTMLCanvasElement>()
  const [canvasSize, setCanvasSize] = useState({
    width: 1920,
    height: 980
  })
  useEffect(() => {
    const updateCanvasSize = () => {
      const size = homeRef.current?.getBoundingClientRect()
      size && setCanvasSize(size)
    }
    updateCanvasSize()
    const observer = new ResizeObserver(updateCanvasSize)
    if (homeRef.current) {
      observer.observe(homeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={homeRef} className={cls.home}>
      <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} />
    </div>
  )
}
