import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import { mergeClassNames } from '@/helper/string'

import DashboardProps from './type'
import Nav from '@/components/dashboard/Nav'
import Header from '@/components/dashboard/Header'

const Layout = ({ children }: DashboardProps) => {
  const { active } = useSelector((state: RootState) => state.dashboard.aside)
  return (
    <div className={styles.container}>
      {/* <Toast /> */}
      <Header />
      <Nav />

      <main className={mergeClassNames([styles.content, active ? styles.active : ''])}>{children}</main>
    </div>
  )
}

export default Layout
