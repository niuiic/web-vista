import snowflakeUrl from '@/assets/images/snowflake.png'
import { useThree } from '@/utils/useThree'
import { BufferAttribute, BufferGeometry, Points, PointsMaterial, Scene, TextureLoader } from 'three'

export const useSnow = (container: HTMLElement) => {
  const { renderer, camera, dispose } = useThree(container)
  const scene = new Scene()
  const geometry = new BufferGeometry()
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load(snowflakeUrl)
  const material = new PointsMaterial({
    size: 5,
    transparent: true,
    alphaTest: 0.1,
    map: texture
  })
  let raf: number

  // # render
  const render = () => {
    camera.position.set(0, 0, 100)

    const count = 200
    const positions = new Float32Array(count * 3).map(() => Math.random() * 200 - 100)
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    const snowflakes = new Points(geometry, material)
    snowflakes.position.set(0, 0, 0)
    camera.lookAt(snowflakes.position)

    scene.add(snowflakes)
    renderer.render(scene, camera)

    const animate = () => {
      for (let i = 0; i <= positions.length - 3; i += 3) {
        if (positions[i + 1] < -100) {
          positions[i] = Math.random() * 200 - 100
          positions[i + 1] = 100
          positions[i + 2] = Math.random() * 200 - 100
          continue
        }
        positions[i + 1] -= 1
      }
      geometry.setAttribute('position', new BufferAttribute(positions, 3))
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
  }

  // # dispose
  const disposeSnow = () => {
    dispose()
    geometry.dispose()
    material.dispose()
    material.dispose()
    raf && cancelAnimationFrame(raf)
  }

  return [render, disposeSnow]
}
