function doSomeAsyncWork(str, cb) {
  str = str.concat(' : appended text')
  cb(str)
}

function doSomeAsyncWorkAsPromise(str) {
  return new Promise((resolve, reject) => {
    try {
      str = str.concat(' : appended text')
      // str = str.append(' : appended text') para disparar um erro
      resolve(str)
    } catch (error) {
      reject('error')
    }
  })
}

async function doSomeAsyncWorkAsAsyncFunc(str) {
  return str.concat(' : appended text')
}

describe('doSomeAsyncWork function tests', () => {

  test('returned string must have "appended" added to it', done => {
    function callback(str) {
      expect(str).toMatch('appended')
      done()
    }

    doSomeAsyncWork('my string', callback)
  })

  test('returned string must have "appended" added to it (using resolves)', () => {
    return expect(doSomeAsyncWorkAsPromise('my string')).resolves.toMatch('appended')
  })

  /*
  test('returned string must have "appended" added to it (traditional way)', () => {
    return doSomeAsyncWorkAsPromise('my string')
      .then(newStr => expect(newStr).toMatch('appended'))
  })
  */

  /* PROMISE FAIL TEST METHODS
  
  test('the promise fails with an error (using rejects)', () => {
    return expect(doSomeAsyncWorkAsPromise('my string')).rejects.toMatch('error')
  });

  test('the promise fails with an error (tradicional way)', () => {
    expect.assertions(1);

    return doSomeAsyncWorkAsPromise('my string')
      .catch(e => expect(e).toMatch('error'));
  });
  
  */
})