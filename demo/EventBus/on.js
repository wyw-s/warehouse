const EventBus = require('./eventBus')

EventBus.$on('event', (val) => {
  console.log(val)
})