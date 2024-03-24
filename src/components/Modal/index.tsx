import Portal from '@/components/Portal'
import { ReactElement } from 'react'

const Modal = ({
  open,
  onClose,
  title,
  children
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactElement
}) => {
  return (
    <Portal>
      <div className={`modal ${open ? 'active' : ''}`}>
        <div className="mask" onClick={onClose}></div>
        <div className="container">
          <div className="header">{title}</div>
          <div className="body">{children}</div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
