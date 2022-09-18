const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy.restore();
  });

  it("1. La variable contador existe", () => {
    expect(contador).to.exist;
  });

  it("2. La funcion incrementaContador existe", () => {
    expect(incrementarContador).to.be.a("function");
  });

  it("3. La funcion decrementarContador existe", () => {
    expect(decrementarContador).to.be.a("function");
  });

  it("4. La funcion imprimirContador existe", () => {
    expect(imprimirContador).to.be.a("function");
  });

  it("5. Llama tres veces a incrementarContador", () => {
    expect(contador).to.eql(7);
  });

  it("6. Llama una vez a imprimirContador", () => {
    imprimirContador();
    expect(spy.callCount, "imprimirContador() imprime el contador en la consola").to.eq(1);
  });
});
