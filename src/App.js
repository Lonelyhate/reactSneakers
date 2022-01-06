import React from "react";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import {Route,
        Routes
        } from "react-router-dom";
import axios from "axios";
import Favorites from "./pages/Favorites";

function App() {

    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false)

    React.useEffect(() => {
        axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/items')
        .then(res => {
            setItems(res.data)
        })
        
        axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/cart')
        .then(res => {
            setCartItems(res.data)
        })

        axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/favorites')
        .then(res => {
            setFavorites(res.data)
        })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://61d5ce4a2b4f730017a82a71.mockapi.io/cart', obj)
        setCartItems((prev => [...prev, obj]))
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61d5ce4a2b4f730017a82a71.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }
    
    const onAddToFavorite = async (obj) => {
        console.log(obj)
       try {
        if(favorites.find((item) => item.id === obj.id)){
            axios.delete(`https://61d5ce4a2b4f730017a82a71.mockapi.io/favorites/${obj.id}`)
            setFavorites((prev) => prev.filter((fav) => fav.id !== obj.id))
            
        } else {
            const { data } = await axios.post('https://61d5ce4a2b4f730017a82a71.mockapi.io/favorites', obj)
            setFavorites((prev) => [...prev, data])
        }
       } catch(error){ console.log('ошибка') }
    }

    console.log(favorites)
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

  return (
    <div className="wrapper">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCartOpened(true)} />
        
        <Routes>
            <Route 
                path='/' 
                element={<Home 
                    items={items} 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                />}
            />
            <Route
                path='favorites'
                element={
                    <Favorites 
                        items={favorites}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                    />
                }
            />
                
        </Routes>
    </div>
  );
}

export default App;
