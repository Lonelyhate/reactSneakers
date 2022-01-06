import Card from "../components/Card/Card"

const Favorites = ({items, onAddToFavorite, onAddToCart}) => {

    return (
        <div className="content">
            <h1 style={{marginBottom: "20px"}}>Мои закладки</h1>
            <div className="sheakersHeader">
                <div className="sneakers">
                {items.map((item) => (
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