import { LoadingSpinner } from "@/elements/Icon";
import styles from "./styles.module.css";

const LoadingFallback = () => {
  return (
    <div className={styles.wrapper}>
      <LoadingSpinner width={42} height={42} />
    </div>
  );
};

export default LoadingFallback;
