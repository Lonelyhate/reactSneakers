import Card from "../components/Card/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content">
            <div className="sheakersHeader">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Кроссовки'}</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="Search"></img>
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
                    {searchValue && <img onClick={() => setSearchValue('')} width={14} height={14} src="img/btn-remove.svg" alt="remove" />}
                </div>
            </div>
            <div className="sneakers">
                {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                    <Card 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;