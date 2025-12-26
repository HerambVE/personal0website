import styles from "./page.module.css";
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  kalam,
  gabarito,
} from "../../../../styles/fonts";

export default function Page() {
  return (
    <div className="min-h-[98vh]">
      <div className={styles.parent}>
        <img src="/3.jpg" alt="Grid image" className={styles.div1}/>
        <div className={styles.div2}></div>
        <div className={styles.div3}></div>
        <div className={styles.div4}></div>
        <div className={styles.div5}></div>
        <div className={styles.div6}></div>
      </div>
    </div>
  );
}
