import fsSource from './test.frag?raw'
import vsSource from './test.vert?raw'

const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'webgl')
canvas.setAttribute('width', '800')
canvas.setAttribute('height', '800')
document.getElementById('app')?.appendChild(canvas)

const gl = canvas.getContext('webgl')!

const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
gl.shaderSource(vertexShader, vsSource)
gl.compileShader(vertexShader)

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
gl.shaderSource(fragmentShader, fsSource)
gl.compileShader(fragmentShader)

const shaderProgram = gl.createProgram()!
gl.attachShader(shaderProgram, vertexShader)
gl.attachShader(shaderProgram, fragmentShader)
gl.linkProgram(shaderProgram)
gl.useProgram(shaderProgram)

const vertices = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.0, 0.5])
const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'aVertexPosition')
gl.enableVertexAttribArray(positionAttributeLocation)
gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

gl.clearColor(0.0, 0.0, 0.0, 1.0)
gl.clear(gl.COLOR_BUFFER_BIT)
gl.drawArrays(gl.TRIANGLES, 0, 3)
