import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";

function App() {

    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        fetch('https://61d5ce4a2b4f730017a82a71.mockapi.io/items')
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems((prev => [...prev, obj]))
    }

    console.log(cartItems)

  return (
    <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content">
            <div className="sheakersHeader">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="Search"></img>
                    <input placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="sneakers">
                {items.map((item) => (
                    <Card 
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log('нажали на закладки')}
                        onPlus={(obj) => onAddToCart(obj)}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
