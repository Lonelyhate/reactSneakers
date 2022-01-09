import axios from 'axios'
import React from 'react'
import AppContext from '../../context'
import { useCart } from '../../hooks/useCart'
import CartItem from '../CartItem/CartItem'
import Emptiness from '../Info/Info'
import styles from './Drawer.module.scss'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({ items = [], onRemove, opened}) => {
    const { cartItems, setCartItems, totalPrice } = useCart()
    const {onClickClose} =  React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplate, setOrderIsComplate] = React.useState(false)
    const [isLoading, setIsLodading] = React.useState(false)

    const onClickOrder = async () => {
        try{
            setIsLodading(true)
            const { data } = await axios.post('https://61d5ce4a2b4f730017a82a71.mockapi.io/orders', {
                items: cartItems
            })
            setOrderId(data.id)
            setOrderIsComplate(true)

            for (let i = 0; i < cartItems.length; i++) {
                await axios.delete(`https://61d5ce4a2b4f730017a82a71.mockapi.io/cart/${i + 1}`)
                await delay(1000)
                
            }

            setCartItems([])

        }catch(error) {alert('не удалось создать заказ')}
        setIsLodading(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayActive : ''}`} onClick={onClickClose}>
            <div onClick={(e) => e.stopPropagation()} className={`${styles.drawer} ${opened ? styles.drawerActive : ''}`}>
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
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{Math.round(totalPrice / 100 * 5)} руб. </b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className={[styles.greenButton, 'greenButton'].join(' ')}>
                                Оформить заказ
                                <img src="img/arrow-right.svg" alt="arrow"/>
                            </button>
                        </div>
                    </div>
                    ) : <Emptiness 
                            title={!isOrderComplate ? 'Корзина пустая' : 'Заказ оформлен!'} 
                            description={!isOrderComplate ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.' : `Ваш заказ ${orderId} скоро будет передан курьерской доставке`} 
                            imgSrc={!isOrderComplate ? 'img/emptiness.png' : 'img/order.png'}
                        />
                }
            </div>
        </div>
    )
}

export default Drawer