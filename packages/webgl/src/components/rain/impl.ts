import {
  createBufferInfoFromArrays,
  createProgramInfo,
  createTexture,
  drawBufferInfo,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setUniforms
} from 'twgl.js'
import fragmentShader from './frag.glsl?raw'
import raindropUrl from './raindrop.png'
import vertexShader from './vert.glsl?raw'

export const useRain = (getCanvas: () => HTMLCanvasElement | undefined | null) => {
  let canvas: HTMLCanvasElement
  let gl: WebGL2RenderingContext
  let animationId: number
  let resizeObserver: ResizeObserver

  // # render
  const render = (args: { count?: number; speedX?: number; speedY?: number; size?: number }) => {
    if (args.speedY && args.speedY < 0) {
      throw new Error('speedY must be positive')
    }

    // ## gl
    if (canvas) {
      dispose()
    }
    const dom = getCanvas()
    if (!dom) {
      return
    }
    canvas = dom
    const ctx = canvas.getContext('webgl2')
    if (!ctx) {
      return
    }
    gl = ctx

    // ## program
    const programInfo = createProgramInfo(gl, [vertexShader, fragmentShader])

    const count = args.count ?? 1e3
    const bufferInfo = createBufferInfoFromArrays(gl, {
      position: {
        numComponents: 2,
        data: Array.from({ length: count * 2 }).map(() => (Math.random() - 0.5) * 2)
      },
      speed: {
        numComponents: 1,
        data: Array.from({ length: count }).map(() => Math.random() + 1)
      }
    })

    const texture = createTexture(gl, {
      src: raindropUrl
    })
    const uniforms = {
      uSpeedX: args.speedX ?? 1e-4,
      uSpeedY: args.speedY ?? 1e-4,
      uTime: 0,
      uSize: args.size ?? 5,
      uResolution: [1, 1],
      uTexture: texture,
      uPi: Math.PI
    }

    gl.useProgram(programInfo.program)
    setBuffersAndAttributes(gl, programInfo, bufferInfo)
    setUniforms(programInfo, uniforms)

    // ## animate
    const animate = (time: number) => {
      uniforms.uTime = time
      setUniforms(programInfo, uniforms)
      drawBufferInfo(gl, bufferInfo, gl.POINTS)

      animationId = requestAnimationFrame(animate)
    }

    animate(new Date().getTime())

    // ## resize
    const resize = () => {
      resizeCanvasToDisplaySize(canvas)
      const size = canvas.getBoundingClientRect()
      gl.viewport(0, 0, size.width, size.height)
      uniforms.uResolution = [size.width, size.height]
    }
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()
  }

  // # dispose
  const dispose = () => {
    animationId && cancelAnimationFrame(animationId)
    resizeObserver && resizeObserver.disconnect()
  }

  return { render, dispose }
}
