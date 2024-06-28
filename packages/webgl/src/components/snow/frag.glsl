precision mediump float;

uniform sampler2D snowflake;
out vec4 color;

void main() {
    color = texture(snowflake, gl_PointCoord);
    if (color.a < 0.1) {
        discard;
    }
}
