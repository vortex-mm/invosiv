import '@/css/global.module.css'
import '@mantine/core/styles.css'

import routes from '@/routes'
import { Route } from 'wouter'
import { Providers } from '@/redux/provider'
import Layout from '@/components/Dashboard/Layout'
import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
})

function App() {
  return (
    <MantineProvider theme={theme}>
      <Providers>
        <Layout>
          {routes.map(({ path, component }, index) => (
            <Route key={`main-route-${index}`} path={path} component={component} />
          ))}
        </Layout>
      </Providers>
    </MantineProvider>
  )
}

export default App
