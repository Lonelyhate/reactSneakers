import React from 'react'
import styles from './Card.module.scss' 

const Card = ({favorited = false, onPlus, onFavorite, ...props}) => {

    const [isAdded, setIsAdded] = React.useState(false)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({...props})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onFavorite({...props})
        setIsFavorite(!isFavorite)
    }

    return (
            <div className={styles.card}>
                <div className={styles.favorite} onClick={onClickFavorite}>
                    <img src={isFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'}></img>
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