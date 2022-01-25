import { ReactNode } from "react";
import styles from "./styles/paddedContainer.module.css";

type PropsOnlyChildren = {
  children: ReactNode;
};

const PaddedContainer = ({ children }: PropsOnlyChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.paddedContainer}>{children}</div>
    </div>
  );
};

export default PaddedContainer;
