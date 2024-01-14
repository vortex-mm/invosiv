import '@/css/global.module.css'

import { Providers } from '@/redux/provider'
import Layout from '@/components/dashboard/Layout'
import { Route } from 'wouter'
import routes from '@/routes'

function App() {
  return (
    <Providers>
      <Layout>
        {routes.map(({ path, component }, index) => (
          <Route key={`main-route-${index}`} path={path} component={component} />
        ))}
      </Layout>
    </Providers>
  )
}

export default App
