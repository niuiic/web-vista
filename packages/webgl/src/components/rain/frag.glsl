#version 300 es

precision mediump float;

flat in float speedX;
flat in float speedY;
flat in float reverse;
uniform float uPi;
uniform vec2 uResolution;
uniform sampler2D uTexture;
out vec4 color;

mat3 rotate(float angle) {
    return transpose(mat3(
            cos(angle), -sin(angle), 0.,
            sin(angle), cos(angle), 0.,
            0., 0., 1.
        ));
}

const mat3 transCenter = transpose(mat3(
            1., 0., -.5,
            0., 1., -.5,
            0., 0., 1.
        ));

const mat3 transBack = transpose(mat3(
            1., 0., .5,
            0., 1., .5,
            0., 0., 1.
        ));

void main() {
    vec3 texCoord;

    float rad;
    if (speedX < 0.) {
        rad = uPi * reverse - (reverse - .5) * 2. * atan(speedX * uResolution.x / speedY / uResolution.y);
    } else if (speedX > 0.) {
        rad = uPi / 2. + (reverse - .5) * 2. * atan(speedY * uResolution.y / abs(speedX) / uResolution.x);
    } else {
        rad = uPi * reverse;
    }
    texCoord = transBack * rotate(rad) * transCenter * vec3(gl_PointCoord, 1.);

    if (texCoord.x > 1. || texCoord.x < 0. || texCoord.y > 1. || texCoord.y < 0.) {
        discard;
    }

    color = texture(uTexture, texCoord.xy);
}
