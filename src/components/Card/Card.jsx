import styles from './Card.module.scss' 

const Card = (props) => {

    return (
            <div className={styles.card}>
                <div className={styles.favorite}>
                    <img src="img/heart-unliked.svg"></img>
                </div>
                <img width={133} height={112} src={props.imageUrl} alt="Кроссовки"></img>
                <h5>{props.title}</h5>
                <div className={styles.cardBottom}>
                    <div>
                        <span>Цена:</span>
                        <b>{props.price} руб.</b>
                    </div>
                    <button className={styles.button}>
                        <img width={32} height={32} src="img/plus.svg"></img>
                    </button>
                </div>
            </div>
    )
}

export default Card