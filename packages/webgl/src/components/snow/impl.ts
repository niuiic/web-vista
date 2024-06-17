import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'

const canvas = document.getElementById('canvas') as unknown as HTMLCanvasElement

const camera = new PerspectiveCamera(75, 1, 0.1, 2000)
camera.position.set(0, 0, -400)
const renderer = new WebGLRenderer({ canvas })
const scene = new Scene()
