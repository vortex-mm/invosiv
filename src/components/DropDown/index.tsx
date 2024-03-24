import { ReactElement, useEffect, useRef, useState } from 'react'
import { useClickOutside } from '@mantine/hooks'
import Portal from '../Portal'

export type Item = {
  label: string
  key: string
  icon: string
}

const Dropdown = ({
  onChange,
  list,
  children
}: {
  onChange: (item: Item) => void
  list: Item[]
  children: ReactElement
}) => {
  const [open, setOpen] = useState(false)
  const [selectItem, setSelectItem] = useState(list[0])

  const elementRef = useRef<HTMLDivElement>(null)
  const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setBoundingRect(rect)
    }
  }, [])

  const handleSelect = (item: Item) => {
    onChange(item)
    setSelectItem(item)
    setOpen(false)
  }

  const isActiveKey = (value: string) => selectItem.key === value

  const ref = useClickOutside(() => setOpen(false))

  const listPosition = {
    top: boundingRect ? boundingRect.top + boundingRect.height : 0,
    left: boundingRect?.left
  }
  return (
    <div className="select-box">
      <div ref={elementRef} className="click-area" onClick={() => setOpen(true)}>
        {children || <button>Select Currency</button>}
      </div>
      <Portal>
        <ul ref={ref} className={`select-list ${open ? 'active' : ''}`} style={listPosition}>
          {list.map((item, key) => (
            <li
              key={`select-list-${key}`}
              className={isActiveKey(item.key) ? 'active' : ''}
              onClick={() => handleSelect(item)}
            >
              {item.label}
              {isActiveKey(item.key) && (
                <svg width="20" height="20" color="#FC72FF" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
            </li>
          ))}
        </ul>
      </Portal>
    </div>
  )
}

export default Dropdown
