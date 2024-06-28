import { useThree } from '@/utils/useThree'
import { BufferAttribute, BufferGeometry, Points, RawShaderMaterial, Scene, TextureLoader } from 'three'
import fragmentShader from './frag.glsl?raw'
import snowflakeUrl from './snowflake.png'
import vertexShader from './vert.glsl?raw'

export const useSnow = (container: HTMLElement) => {
  const { renderer, camera, dispose } = useThree(container)
  const scene = new Scene()
  const geometry = new BufferGeometry()
  const textureLoader = new TextureLoader()
  const texture = textureLoader.load(snowflakeUrl)
  const material = new RawShaderMaterial({
    glslVersion: '300 es',
    uniforms: {
      time: {
        value: 0
      },
      snowflake: {
        value: texture
      },
      size: {
        value: 1000
      }
    },
    vertexShader,
    fragmentShader,
    transparent: true
  })
  let raf: number

  // # render
  const render = () => {
    camera.position.set(0, 0, -30)

    const count = 100000
    const positions = new Float32Array(count * 3).map((_, i) =>
      i % 3 === 2 ? Math.random() * 100 : Math.random() * 200 - 100
    )
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    const snowflakes = new Points(geometry, material)
    snowflakes.position.set(0, 0, 0)
    camera.lookAt(snowflakes.position)

    scene.add(snowflakes)
    renderer.render(scene, camera)

    const animate = () => {
      material.uniforms.time.value += 0.01
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
