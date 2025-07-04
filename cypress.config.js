const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Log terminal output during CI runs
      on('task', {
        log(message) {
          console.log('CYPRESS LOG:', message)
          return null
        }
      })
    },
    video: true,
    screenshotOnRunFailure: true
  }
})