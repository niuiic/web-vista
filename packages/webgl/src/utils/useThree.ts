import { PerspectiveCamera, WebGLRenderer } from 'three'

export const useThree = (container: HTMLElement) => {
  // # container
  const observer = new ResizeObserver(() => resetView())
  observer.observe(container)

  // # canvas
  const renderer = new WebGLRenderer()
  container.appendChild(renderer.domElement)
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
  const resetView = () => {
    const size = container.getBoundingClientRect()
    renderer.setSize(size.width, size.height)
    camera.aspect = size.width / size.height
  }
  resetView()

  // # dispose
  const dispose = () => {
    observer.disconnect()
    renderer.dispose()
    container.removeChild(renderer.domElement)
  }

  return {
    renderer,
    camera,
    dispose
  }
}
