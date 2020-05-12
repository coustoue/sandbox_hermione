const assert = require('assert')
const desireUrl='https://mail.ru/'
const selector = '#q'

function openPage(url) {
  it ('openPage - ' + url, function() {
    let msg = 'Wrong page: '
    return this.browser
      .url(url)
      .getUrl()
        .then((getUrl) => {
        if (url!==getUrl) assert.fail(msg + getUrl)
      })
  })
}

function setInput(selector, text) {
  it ('setInput - selector: ' + selector + (text.length > 0 ? ': ' + text : ''), function (){
    if (text===undefined) text='undefined'
    let msg = 'Text mismatch - '
    return this.browser
      .waitForVisible(selector, 5000)
      .setValue(selector, text)
      .getValue(selector)
        .then((value) => {
          if (!value===text) { assert.fail(msg + text + ':' + value) }
        })
  })
}

function randomString(length=4) {
  if (isNaN(length)) return ''
    else if (length < 0) return ''
    let rnd = ''
    while (rnd.length < length) rnd += Math.random().toString(36).substring(2)
    return rnd.substring(0, length)
  }

// hermione.skip.in('chrome', "It shouldn't work this way in Chrome")
describe('Mail.ru - const string', () => {
  openPage(desireUrl)
  let str =  'textg7l6'
  setInput(selector, str)
  console.log('typeof: ', typeof str, str)
})

// hermione.skip.in('chrome', "It shouldn't work this way in Chrome")
describe('Mail.ru - Math.random()', () => {
  openPage(desireUrl)
  let str =  Math.random()
  setInput(selector, str)
  console.log('typeof: ', typeof str, str)
})

// hermione.skip.in('chrome', "It shouldn't work this way in Chrome")
describe('Mail.ru - randomString()', () => {
  openPage(desireUrl)
  let str =  randomString()
  setInput(selector, str)
  console.log('typeof: ', typeof str, str)
})

