import React from 'react'
import styles from './Card.module.scss' 
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'

const Card = ({favorited = false, added, loading = false, onPlus, onFavorite, ...props}) => {
    const {cartItems} = React.useContext(AppContext)

    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus({...props})
    }

    const onClickFavorite = () => {
        onFavorite({...props})
        setIsFavorite(!isFavorite)
    }

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id))
    }

    return (
            <div className={styles.card}>
                {loading ?
                (
                    <ContentLoader 
                        speed={2}
                        width={150}
                        height={206}
                        viewBox="0 0 150 206"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        {...props}
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="112" /> 
                        <rect x="0" y="126" rx="5" ry="5" width="150" height="15" /> 
                        <rect x="0" y="145" rx="5" ry="5" width="93" height="15" /> 
                        <rect x="0" y="174" rx="8" ry="8" width="80" height="24" /> 
                        <rect x="119" y="170" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>
                ) 
                :
                (   <>
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
                            src={isItemAdded(props.id) ? 'img/btn-checked.svg' : 'img/plus.svg'}
                            alt='plus'
                        />
                    </div>
                    </>
                )
                }
                
            </div>
    )
}

export default Card