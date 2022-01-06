import classes from './Emptiness.module.scss'

const Emptiness = ({ clickClose }) => {
    return (
        <div className={classes.emptines}>
            <div className={classes.emptinesContent}>
                <img src='img/emptiness.png'/>
                <h3>Корзина пустая</h3>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={clickClose} className='greenButton'><img src="img/arrow-left.svg" alt="arrow"/>Вернуться назад</button>
            </div>
        </div>
    )
}

export default Emptiness