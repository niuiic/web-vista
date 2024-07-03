#version 300 es

precision mediump float;

uniform float uSpeedX;
uniform float uSpeedY;
uniform float uTime;
uniform float uSize;
uniform float uPi;
in vec2 position;
in float speed;
flat out float speedX;
flat out float speedY;
// 1.: true, 0.: false
flat out float reverse;

void main() {
    gl_PointSize = uSize * speed / 2.;

    speedX = uSpeedX * speed;
    speedY = uSpeedY * speed;

    float x;
    if (speedX > 0.) {
        x = (mod(position.x + uTime * speedX, 1.) - .5) * 2.;
    } else if (speedX < 0.) {
        x = (.5 - mod(position.x - uTime * speedX, 1.)) * 2.;
    } else {
        x = position.x;
    }

    float y = (.5 - mod(position.y + uTime * speedY, 1.1)) * 2.;
    reverse = step(y, -1.) * step(-y, 1.1);
    if (y < -1.) {
        y = -1. - .05 * sin((y + 1.) * 5. * uPi);
    }

    gl_Position = vec4(x, y, 0., 1.);
}
