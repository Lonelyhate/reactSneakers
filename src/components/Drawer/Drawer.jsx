import CartItem from '../CartItem/CartItem'
import Emptiness from '../Emptiness/Emptiness'
import styles from './Drawer.module.scss'

const Drawer = ({ onClose, items = [], onRemove}) => {

    const onClickClose = () => {
        onClose()

        document.body.style.overflow = ''
    }

    return (
        <div className={styles.overlay} onClick={onClickClose}>
            <div onClick={(e) => e.stopPropagation()} className={styles.drawer}>
                <h2>Корзина <img onClick={onClickClose} src="img/btn-remove.svg" alt="remove" /></h2>
                {
                    items.length > 0 ? (
                    <div>
                        <div className={styles.items}>
                            {items.map((obj) => (
                                <CartItem
                                    key={obj.id}
                                    id={obj.id}
                                    title={obj.title}
                                    price={obj.price}
                                    imageUrl={obj.imageUrl}
                                    onRemove={onRemove}
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
                    ) : <Emptiness clickClose={onClickClose}/>
                }
            </div>
        </div>
    )
}

export default Drawer