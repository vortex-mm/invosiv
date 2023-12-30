import { createMachine } from 'xstate'

const drawerMachine = createMachine({
  id: 'drawer',
  initial: 'First',
  states: {
    First: {
      on: {
        prev: 'First',
        next: 'Second'
      }
    },
    Second: {
      on: {
        prev: 'First',
        next: 'Third'
      }
    },
    Third: {
      on: {
        prev: 'Second',
        next: 'Third'
      }
    },
    Decouple: {
      on: { toggle: '' }
    }
  }
})

export default drawerMachine
