import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import styles from './Header.module.scss'

const Header = (props) => {

    const { totalPrice } = useCart()

    const cartOpenClick = (e) => {
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
                    <span>{totalPrice}</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img width={18} height={18} src="img/favorites-page.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="img/user.svg" />
                    </Link>
                </li>

            </ul>
        </header>
    )
}

export default Header