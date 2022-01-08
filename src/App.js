import React from "react";
import AppContext from "./context";
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
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
       async function fetchData() {
            setIsLoading(true)
            const cartResponse = await axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setItems(itemsResponse.data)
            setFavorites(favoritesResponse.data)
       }

       fetchData()
    }, [])

    const onAddToCart = (obj) => {
        try {
            if(cartItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://61d5ce4a2b4f730017a82a71.mockapi.io/cart/${obj.id}`)
                setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
            } else {
                axios.post('https://61d5ce4a2b4f730017a82a71.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, obj])
            }
        } catch (error) { alert('ошибка') }
    }

    const onClickClose = () => {
        setCartOpened(false)
        document.body.style.overflow = ''
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://61d5ce4a2b4f730017a82a71.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }
    
    const onAddToFavorite = async (obj) => {
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

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

  return (
    <AppContext.Provider value={{cartItems, favorites, items, onAddToFavorite, onClickClose, setCartItems}}>
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)} />
            
            <Routes>
                <Route 
                    path='/' 
                    element={<Home 
                        items={items} 
                        cartItems={cartItems}
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue} 
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToFavorite={onAddToFavorite}
                        onAddToCart={onAddToCart}
                        isLoading={isLoading}
                    />}
                />
                <Route
                    path='favorites'
                    element={
                        <Favorites 
                            onAddToCart={onAddToCart}
                        />
                    }
                />
                    
            </Routes>
        </div>
    </AppContext.Provider>
  );
}

export default App;
