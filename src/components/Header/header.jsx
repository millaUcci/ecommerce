import styles from "./header.module.css";
import busca from "../../assets/search.png"
import wishlist from "../../assets/wishlist.png"
import cart from "../../assets/cart.png"


 
export default function Header() {
 
    return (
        <header className={styles.fundo}>
            <nav className={styles.menu}>
                <h2>Exclusive</h2>
                <p className={styles.p}>Home</p>
                <p className={styles.p}>Contact</p>
                <p className={styles.p}>About</p>
                <p className={styles.p}>Sign up</p>
            </nav> 
            <div className={styles.pesquisa}>
                <div className={styles.input}>
                    <input type="text" 
                    name=""
                    id=""
                    placeholder="What are you looking for?"
                    className={styles.inputBox}/>
                    <img src={busca} alt="" className={styles.lupa}/>
                </div>
                <img src={wishlist} alt="" className={styles.coracao}/>
                <img src={cart} alt="" className={styles.carrinho}/>
            </div>
        </header>

        
    );
}
