const testFolder = '0_mail'

module.exports = {
  gridUrl: 'http://localhost:4444/wd/hub',
  // retry: 2,
  sets: {
    desktop: {
      files: `tests/${testFolder}` //запускаем тесты из папки
    }
  },
  browsers: {
      chrome: {
        sessionsPerBrowser: 1,
        desiredCapabilities: {
            browserName: 'chrome'
        }
      }
  },
  plugins: {
    'html-reporter/hermione': {
      enabled: true,
      path: './hermione-reports',
      defaultView: 'failed',
      errorPatterns: [
          'Parameter .* must be a string',
          {
              name: 'Cannot read property of undefined',
              pattern: 'Cannot read property .* of undefined'
          }
      ]
    },
    'stat-reporter/hermione': {
      enabled: true
    }
  },
  testTimeout: 500000
}
