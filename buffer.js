class VAO {
  constructor() {
    this.VAO = gl.createVertexArray();
    // gl.bindVertexArray(this.VAO);
    this.VBO = gl.createBuffer();
    this.IBO = gl.createBuffer();
    // gl.bindVertexArray(null);
  }
  bufferVData(gl, buffer) {
    // gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(buffer), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindVertexArray(null);
  }
  bufferVAttrib(gl, program, id, size, type, norm, stride, offset) {
    // gl.bindVertexArray(this.VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    var coord = gl.getAttribLocation(program, id);
    gl.vertexAttribPointer(coord, size, type, norm, stride, offset);
    gl.enableVertexAttribArray(coord);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    // gl.bindVertexArray(null);
  }
  bufferIData(gl, buffer) {
    // gl.bindVertexArray(this.VAO);
    this.IndLen = buffer.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(buffer),
      gl.STATIC_DRAW
    );
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    // gl.bindVertexArray(null);
  }
  vaoBind(gl) {
    gl.bindVertexArray(this.VAO);
  }
  vboBind(gl) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
  }
  iboBind(gl) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.IBO);
  }
  vaoUnbind(gl) {
    gl.bindVertexArray(null);
  }
  vboUnbind(gl) {
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }
  iboUnbind(gl) {
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }
  render(gl) {
    // this.vaoBind(gl);
    this.iboBind(gl);
    // gl.drawArrays(gl.TRIANGLES, 1, 3);
    gl.drawElements(gl.TRIANGLES, this.IndLen, gl.UNSIGNED_SHORT, 0);
    // gl.drawVertexArrays()
    this.iboUnbind(gl);
    // this.vaoUnbind(gl);
  }
}