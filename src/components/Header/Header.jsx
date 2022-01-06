import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = (props) => {

    const cartOpenClick = () => {
        props.onClickCart()
        
        document.body.style.overflow = 'hidden'
    }

    return (
        <header>
            <Link to="/">
                <div className={styles.headerLeft}>
                    <img width={40} height={40} src="img/logo.png" />
                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className={styles.headerRight}>
                <li onClick={cartOpenClick}>
                    <img width={18} height={18} src="img/cart.svg" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="img/favorites-page.svg" />
                    </Link>
                </li>
                <li>
                    <img width={18} height={18} src="img/user.svg" />
                </li>

            </ul>
        </header>
    )
}

export default Header