import styles from "./hero.module.css";
import hero from "../../assets/hero.png"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <img src={hero} alt="" />
        </div>        
    );
}
