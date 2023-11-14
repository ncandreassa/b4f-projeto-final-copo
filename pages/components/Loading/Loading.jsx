import { IntroLogo } from "../IntroLogo/IntroLogo";
import Spinner from "../Spinner/Spinner";
import styles from "./Loading.module.css";

export default function Loading() {
  return (

    <div className={styles.loadingContainer}>
      <div className={styles.logoSpinner}>
        <IntroLogo />
        <Spinner />
      </div>

    </div>
  );
}
