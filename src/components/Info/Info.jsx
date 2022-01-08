import React from 'react'
import AppContext from '../../context'
import classes from './Info.module.scss'

const Info = ({title, description, imgSrc }) => {

    const {onClickClose} = React.useContext(AppContext)

    return (
        <div className={classes.emptines}>
            <div className={classes.emptinesContent}>
                <img width={120} src={imgSrc}/>
                <h3>{title}</h3>
                <p>{description}</p>
                <button onClick={onClickClose} className='greenButton'><img src='img/arrow-left.svg' alt="arrow"/>Вернуться назад</button>
            </div>
        </div>
    )
}

export default Info