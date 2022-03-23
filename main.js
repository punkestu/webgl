var canvas = document.getElementById("mainC");
var gl = canvas.getContext("webgl2");

var shaderProgram = createShProgram(gl, vertCode, fragCode);
gl.useProgram(shaderProgram);

var vertices = [-0.5, 0.5, -0.5, -0.5, 0.0, -0.5, 0.0, 0.5];
var vertices2 = [-0.0, 0.5, -0.0, -0.5, 0.5, -0.5, 0.5, 0.5];
var indices = [0, 1, 2, 0, 3, 2];

var ichi = new VAO();
ichi.bufferVData(gl, vertices);
ichi.bufferVAttrib(gl, shaderProgram, "coordinates", 2, gl.FLOAT, false, 0, 0);
ichi.bufferIData(gl, indices);
// var ni = new VAO();
// ni.bufferVData(gl, vertices2);
// ni.bufferVAttrib(gl, shaderProgram, "coordinates", 2, gl.FLOAT, false, 0, 0);
// ni.bufferIData(gl, indices);

render(gl, (gl) => {
  ichi.render(gl);
//   ni.render(gl);
});
