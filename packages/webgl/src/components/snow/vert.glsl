precision mediump float;

uniform float size;
uniform float time;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
in vec3 position;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y - 100. * mod(abs(time / position.z), 1.), position.z, 1.0);
    gl_PointSize = size / gl_Position.z;
}
