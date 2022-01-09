import axios from "axios"
import React from "react"
import Card from "../components/Card/Card"

const Orders = () => {
    const [ordersItems, setOrdersItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        (async () => {
            const {data} = await axios.get('https://61d5ce4a2b4f730017a82a71.mockapi.io/orders')
            
            setOrdersItems(data)
        })()
    }, [])

    return (
        <div className="content">
            <h1>Мои заказы</h1>
            <div className="sneakersHeader">
                { ordersItems.map(order => (
                    <div key={order.id}>
                        <h3>Заказ номер {order.id}</h3>
                        <div className="sneakers">
                            {order.items.map(orderItem => (
                                <Card key={orderItem.id} btnAdded={false} btnFavorite={false} title={orderItem.title} imageUrl={orderItem.imageUrl} price={orderItem.price}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders