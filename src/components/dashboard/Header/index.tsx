import { useDispatch } from "react-redux";
import { toggleAside } from "@/redux/ui/dashboard";
import { ActivityIcon } from "@/elements/Icon";
import styles from './styles.module.css'

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.leftItem}>
        <div className={styles.iconWrapper} onClick={() => dispatch(toggleAside())}>
          <ActivityIcon width={24} height={24} />
        </div>
        <h1 className={styles.logoWrapper}>Invosiv POS</h1>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
