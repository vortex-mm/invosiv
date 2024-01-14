import DependentDrawer from "@/components/DependentDrawer"

const Testing = () => {
  return <DependentDrawer slots={{
    firstContainer: <h1>First Container</h1>,
    secondContainer: <h2>Second Container</h2>,
    thirdContainer: <h2>Third Container</h2>,
  }}/>
}

export default Testing