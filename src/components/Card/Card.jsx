import React from 'react'
import styles from './Card.module.scss' 

const Card = ({onPlus, onFavorite, ...props}) => {

    const [isAdded, setIsAdded] = React.useState(false)


    const onClickPlus = () => {
        onPlus({...props})
        setIsAdded(!isAdded)
    }

    return (
            <div className={styles.card}>
                <div className={styles.favorite} onClick={onFavorite}>
                    <img src="img/heart-unliked.svg"></img>
                </div>
                <img width={133} height={112} src={props.imageUrl} alt="Кроссовки"></img>
                <h5>{props.title}</h5>
                <div className={styles.cardBottom}>
                    <div>
                        <span>Цена:</span>
                        <b>{props.price} руб.</b>
                    </div>
                    <img 
                        onClick={onClickPlus} 
                        width={32} 
                        height={32} 
                        src={isAdded ? 'img/btn-checked.svg' : 'img/plus.svg'}
                        alt='plus'
                    />
                </div>
            </div>
    )
}

export default Card