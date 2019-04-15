const sum = require('../routes/logic/sum')

// matcher personalizado
function matchCount(received, regex, times = 1) {
  const pass = received.match(regex) || []
  if (pass.length === times) {
    return {
      message: () => `expected ${received} to match with ${regex}`,
      pass: true
    }
  } else {
    return {
      message: () => `expected ${received} to match with ${regex}`,
      pass: false
    }
  }
}

expect.extend({
  matchCount
})

describe('extension function matchCount', () => {

  test('must not throw', () => {
    const matchCountCall = () => matchCount('string de teste', /teste/)
    expect(matchCountCall).not.toThrow()
  })
  test('must return true for these arguments', () => {
    const returned = matchCount('string de teste', /teste/)

    expect(returned).toBeDefined()
    expect(returned).toHaveProperty('pass', true)
  })
  test('must return false for these arguments', () => {
    const returned = matchCount('string de teste.', /banana/, 2)

    expect(returned).toBeDefined()
    expect(returned).toHaveProperty('pass', false)
  })
})