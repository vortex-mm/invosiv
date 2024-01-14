import { useSelector } from 'react-redux'
// import { container, item } from "./style";
import { RootState } from '@/redux/store'
import { MatchIcon } from '@/elements/Icon'
// import { usePathname } from "next/navigation";
import styles from './styles.module.css'
import { mergeClassNames } from '@/helper/string'
import { useLocation } from "wouter";

import { Link } from 'wouter'

const Nav = () => {
  const { active } = useSelector((state: RootState) => state.dashboard.aside)
  const [location] = useLocation();
  const menus = [
    {
      label: 'Home',
      route: '/',
      icon: <MatchIcon width={28} height={28} />,
      active: location === '/'
    },
    {
      label: 'About',
      route: '/about',
      icon: <MatchIcon width={28} height={28} />,
      active: location === '/about'
    },
    {
      label: 'Testing',
      route: '/testing',
      icon: <MatchIcon width={28} height={28} />,
      active: location === '/testing'
    },
  ]
  return (
    <aside className={mergeClassNames([styles.container, active ? styles.active : ''])}>
      <nav>
        <ul>
          {menus.map(({ active, label, icon, route }, index) => (
            <li key={`menu-${index}`} className={mergeClassNames([styles.item, active ? styles.active : ''])}>
              <Link href={route}>
                <a>
                  {icon}
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav
