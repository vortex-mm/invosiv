import '@/css/global.module.css'
import { Providers } from '@/redux/provider'
import Layout from '@/components/dashboard/Layout'

function App() {
  return (
    <Providers>
      <Layout>
        <h1>Hello App</h1>
      </Layout>
    </Providers>
  )
}

export default App
