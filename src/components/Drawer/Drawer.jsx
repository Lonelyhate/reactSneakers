import CartItem from '../CartItem/CartItem'
import styles from './Drawer.module.scss'

const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} className={styles.drawer}>
                <h2>Корзина <img onClick={onClose} src="img/btn-remove.svg" alt="remove" /></h2>
                <div className={styles.items}>
                    {items.map((obj) => (
                        <CartItem
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                        />                      
                    ))}
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
                    <button className={[styles.greenButton, 'greenButton'].join(' ')}>
                        Оформить заказ
                        <img src="img/arrow-right.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer