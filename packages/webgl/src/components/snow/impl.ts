import type { Texture } from 'three'
import { MeshBasicMaterial, PerspectiveCamera, Scene, TextureLoader, WebGLRenderer } from 'three'

declare const snowflakeUrl: string

const canvas = document.getElementById('canvas') as unknown as HTMLCanvasElement

const renderer = new WebGLRenderer({ canvas })
const camera = new PerspectiveCamera(75, 1, 0.1, 2000)
camera.position.set(0, 0, -400)
const scene = new Scene()

const texture = await new Promise<Texture>((resolve) => {
  new TextureLoader().load(snowflakeUrl, (texture) => {
    resolve(texture)
  })
})
const material = new MeshBasicMaterial({
  alphaTest: 0.1,
  map: texture
})
console.log(`DEBUGPRINT[2]: impl.ts:18: material=`, material)

renderer.render(scene, camera)
