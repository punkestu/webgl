var vertCode =
  "attribute vec2 coordinates;" +
  "void main(void) {" +
  " gl_Position = vec4(coordinates.x*0.75,coordinates.y,0.0, 1.0);" +
  "}";

var fragCode =
  "void main(void) {" + "gl_FragColor = vec4(1.0, 1.0, 1.0, 1);" + "}";

const createShader = (gl, type, code) => {
  var res = gl.createShader(type);
  gl.shaderSource(res, code);
  gl.compileShader(res);
  return res;
};

const createShProgram = (gl, vCode, fCode) => {
  var res = gl.createProgram();
  gl.attachShader(res, createShader(gl, gl.VERTEX_SHADER, vCode));
  gl.attachShader(res, createShader(gl, gl.FRAGMENT_SHADER, fCode));
  gl.linkProgram(res);
  return res;
};
