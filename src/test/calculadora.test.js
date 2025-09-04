const {  somarDoisNumeros } = require('../operacoes-matematicas/calculadora')
const { expect } = require('chai')


describe('Testes da função somarDoisNumeros', () => {
  it('Função deve somar dois números positivos', () => {
    const resultado = somarDoisNumeros(99, 2)

    expect(resultado).to.equal(101)
  })

  it('Função deve somar um número positivo e um negativo', () => {
    const resultado = somarDoisNumeros(109, -9)
    
    expect(resultado).to.equal(100)
  })

  it('Função deve somar dois números zerados', () => {
    const resultado = somarDoisNumeros(0, 0)
    
    expect(resultado).to.equal(0)
  })

  it('Função deve somar dois números negativos', () => {
    const resultado = somarDoisNumeros(-500, -500)
    
    expect(resultado).to.equal(-1000)
  })

  it('Função deve somar dois números com casa decimal', () => {
    const resultado = somarDoisNumeros(49.50, 950.50)
    
    expect(resultado).to.equal(1000.00)
  })

  it('Função deve somar um número positivo com um número com casa decimal', () => {
    const resultado = somarDoisNumeros(49, 51.50)
    
    expect(resultado).to.equal(100.50)
  })

  it('Função deve somar um número negativo com um número com casa decimal', () => {
    const resultado = somarDoisNumeros(-49, -51.50)
    
    expect(resultado).to.equal(-100.50)
  })
})


