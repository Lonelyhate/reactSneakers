import styles from './Drawer.module.scss'

const Drawer = () => {
    return (
        <div style={{}} className={styles.overlay}>
            <div className={styles.drawer}>
                <h2>Корзина <img src="img/btn-remove.svg" alt="remove" /></h2>
                <div className={styles.items}>
                    <div className={styles.cartItem}>
                        <div 
                            style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} 
                            className={styles.cartItemImg}>
                        </div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button><img src="img/btn-remove.svg" alt="remove" /></button>
                    </div>
                </div>

                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>
                        Оформить заказ
                        <img src="img/arrow-right.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer