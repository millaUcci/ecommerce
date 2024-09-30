import styles from "./subtitle.module.css";

export default function Subtitle({ sub }) {
    return (
        <div className={styles.container}>
            <div className={styles.ret}></div>
            <h3 className={styles.subtitle}>{sub}</h3>
        </div>
    );
}
