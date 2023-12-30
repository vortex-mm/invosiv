import { useMachine } from '@xstate/react'
import { mergeClassNames } from '@/helper/string'
import drawerMachine from '@/hooks/machines/drawer'

import styles from './styles.module.css'
import { ReactNode } from 'react'

type DependentDrawerProps = {
  slots: {
    firstContainer?: ReactNode
    secondContainer?: ReactNode
    thirdContainer?: ReactNode
  }
}

const DependentDrawer: React.FC<DependentDrawerProps> = ({ slots }) => {
  const [state, send] = useMachine(drawerMachine)

  const isCurrentState = (stateName: string) => state.matches(stateName)

  const first = isCurrentState('First')
  const second = isCurrentState('Second')
  const third = isCurrentState('Third')

  const secondOpen = isCurrentState('Second') ? styles.open : styles.hide
  const thirdOpen = isCurrentState('Third') ? styles.open : styles.hide

  return (
    <div className={styles.main}>
      <div className={mergeClassNames([styles.col, styles.first])}>
        {!!first && <button onClick={() => send({ type: 'next' })}>Open Second</button>}
        {!first && <div className={styles.prev} onClick={() => send({ type: 'prev' })}></div>}
        {slots.firstContainer}
      </div>
      <div className={mergeClassNames([styles.col, styles.second, secondOpen, thirdOpen])}>
        {!!second && <button onClick={() => send({ type: 'next' })}>Open Third</button>}
        {!second && <div className={styles.prev} onClick={() => send({ type: 'prev' })}></div>}
        {slots.secondContainer}
      </div>
      <div className={mergeClassNames([styles.col, styles.third, thirdOpen])}>
        {!!third && <button onClick={() => send({ type: 'next' })}>Still in third state</button>}
        {!third && <div className={styles.prev} onClick={() => send({ type: 'prev' })}></div>}
        {slots.thirdContainer}
      </div>
    </div>
  )
}

export default DependentDrawer
