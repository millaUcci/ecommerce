import styles from "./sectionBar.module.css";
import seta from "../../assets/seta.png";
import Subtitle from '../Subtitle/subtitle'

const sub = "Today's";

export default function SectionBar({ title }) {
    return (
        <div>
            <Subtitle sub={sub}/>

            <div className={styles.sectionBar}>
                <h2>{title}</h2>
                <div></div>
                <div className={styles.setas}>
                    <img src={seta} alt="" />
                    <img className={styles.rotate} src={seta} alt="" />
                </div>
            </div>
        </div>
    );
}
