import classes from './CartItem.module.scss'

const CartItem = (props) => {
    return (
        <div className={classes.cartItem}>
            <div 
                style={{backgroundImage: `url(${props.imageUrl})`}} 
                className={classes.cartItemImg}>
            </div>
            <div>
                <p>{props.title}</p>
                <b>{props.price}</b>
            </div>
            <button onClick={() => props.onRemove(props.id)} ><img src="img/btn-remove.svg" alt="remove" /></button>
        </div>
    )
}

export default CartItem