import styles from "./footer.module.css";
 
export default function footer() {
 
    return (
        <div className={styles.footer}>
            <div className={styles.div}>
                <h1 className={styles.title}>Exclusive</h1>
                <p className={styles.subtitle}>Subscribe</p>
                <p className={styles.p}>Get 10% yout first order</p>
            </div>
            <div className={styles.div}>
                <p className={styles.subtitle}>Support</p>
                <p className={styles.p}>11 Bijoy sarani, Dhaka,Dh 1515, Bangladesh.</p>
                <p className={styles.p}>exclusive@gmail.com</p>
                <p className={styles.p}>+88015-88888-9999</p>
            </div>
            <div className={styles.div}>
                <p className={styles.p}>Account</p>
                <p className={styles.p}>My account</p>
                <p className={styles.p}>Login / Register</p>
                <p className={styles.p}>Cart</p>
                <p className={styles.p}>Wishlist</p>
                <p className={styles.p}>Shop</p>
            </div>
            <div className={styles.div}>
                <p className={styles.p}>Quick Link</p>
                <p className={styles.p}>Privacy Policy</p>
                <p className={styles.p}>Term Of Use</p>
                <p className={styles.p}>FAQ</p>
                <p className={styles.p}>Contact</p>
            </div>
            <div className={styles.div}>
                <p className={styles.p}>Download App</p>
                {/* <img src={codigobarras}></img> */}
            </div>
        </div>
    );
}
