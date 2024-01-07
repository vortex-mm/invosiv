import { useSelector } from 'react-redux'
// import { container, item } from "./style";
import { RootState } from '@/redux/store'
import { MatchIcon } from '@/elements/Icon'
// import { usePathname } from "next/navigation";
import styles from './styles.module.css'
import { mergeClassNames } from '@/helper/string'

const Nav = () => {
  const { active } = useSelector((state: RootState) => state.dashboard.aside)
  // const pathname = usePathname();
  const menus = [
    {
      label: 'Home',
      route: '/',
      icon: <MatchIcon width={28} height={28} />,
      active: true
    },
    {
      label: 'Matches',
      route: '/matches',
      icon: <MatchIcon width={28} height={28} />,
      active: false
    }
  ]
  return (
    <aside className={mergeClassNames([styles.container, active ? styles.active : ''])}>
      <nav>
        <ul>
          {menus.map(({ active, label, icon, route }, index) => (
            <li key={`menu-${index}`} className={mergeClassNames([styles.item, active ? styles.active : ''])}>
              <a href={route}>
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav
