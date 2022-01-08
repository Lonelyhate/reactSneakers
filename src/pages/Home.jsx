import React from "react";
import Card from "../components/Card/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, isLoading}) {
    const renderItems = () => {
        return (isLoading ? [...Array(8)].map((item, index) => <Card key={index} loading={isLoading}/>) 
            :
            items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    onPlus={(obj) => onAddToCart(obj)}
                    loading={isLoading}
                />
            ))
        )
    }

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
                {renderItems()}
            </div>
        </div>
    )
}

export default Home;