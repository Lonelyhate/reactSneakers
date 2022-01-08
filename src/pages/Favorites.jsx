import React from "react"
import Card from "../components/Card/Card"
import AppContext from "../context"

const Favorites = ({onAddToCart}) => {
    const {favorites, onAddToFavorite} = React.useContext(AppContext)

    return (
        <div className="content">
            <h1 style={{marginBottom: "20px"}}>Мои закладки</h1>
            <div className="sheakersHeader">
                <div className="sneakers">
                {favorites.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        favorited={true}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Favorites