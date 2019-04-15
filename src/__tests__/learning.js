const sum = require('../routes/logic/sum')

describe('learning', () => {
  
  test('adds 1 + 2 to equal 3', () => {
    expect(sum).not.toThrow() // garante que a função não dispara erro
    expect(sum(1, 2)).toBe(3)
  })
  
  test('object assignment', () => {
    let x = {
      value: 1
    }
    let y = {
      value: 2
    }
    let z = {
      ...x,
      ...y
    }
    expect(z).toEqual({
      value: 2
    })
  })
  
  test('var must not be null or undefined', () => {
    let x = parseInt(Math.random() * 10) + 1
    expect(x).toBeTruthy()
  })
  
  test('zero', () => {
    const z = 0;
    expect(z).toBeFalsy();
  });
  
  test('var deve ter valor maior ou igual a 3', () => {
    const x = parseInt(Math.random() * 10) + 3
    expect(x).toBeGreaterThanOrEqual(3)
  })
  
  test('var string deve conter palavra "teste" pelo menos duas vezes', () => {
    const str = 'Essa string tem a palavra texto duas vezes. texto.'
    const times = (str.match(/texto/g) || []).length
    // expect(str).toMatch(/texto/)
    expect(times).toBeGreaterThanOrEqual(2)
  })
  
  test('a array de jogadores deve incluir joão', () => {
    const jogadores = [{
        _id: 1,
        nome: 'augusto'
      },
      {
        _id: 2,
        nome: 'manuel'
      },
      {
        _id: 3,
        nome: 'joão'
      }
    ]
    // const found = jogadores.findIndex(j => j.nome === 'joão')
    // expect(found).not.toBe(-1)
    expect(jogadores).toContainEqual({
      _id: 3,
      nome: 'joão'
    })
  })
})