import '@/css/global.module.css'
import { useMachine } from '@xstate/react'
import DependentDrawer from './components/DependentDrawer'
import InvoCard from './elements/InvoCard'
import drawerMachine from './hooks/machines/drawer'

const FirstContainer = () => {
  return (
    <>
      <InvoCard />
      <InvoCard />
      <InvoCard />
      <InvoCard />
    </>
  )
}

function App() {
  const [state] = useMachine(drawerMachine);
  console.log({state: state.value})
  return (
    <>
      <DependentDrawer
        slots={{
          firstContainer: <FirstContainer />,
          secondContainer: <FirstContainer />,
          thirdContainer: <FirstContainer />
        }}
      />
    </>
  )
}

export default App

