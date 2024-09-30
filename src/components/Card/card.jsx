import styles from "./card.module.css";
 
export default function Card({img, title, price, oldPrice, stars}) {
 
    return (
        <article className={styles.article}>
            <div className={styles.div}>
            <p className={styles.p}>{text}</p>
 
            <a href={linkAddress} target='_blank' className={styles.a}>{linkText}</a>
            </div>
 
            <select name='languages' id='languages' className={styles.select}>
                {languages.map( language =>
                    <option value={language} className={styles.option}>{language}</option>
                )}
            </select>
        </article>
    );
}
