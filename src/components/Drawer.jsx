const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2>Корзина <img src="img/btn-remove.svg" alt="remove" /></h2>
                <div className="items">
                    <div className="cartItem">
                        <div 
                            style={{backgroundImage: 'url(img/sneakers/1.jpg)'}} 
                            className="cartItemImg">
                        </div>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button><img src="img/btn-remove.svg" alt="remove" /></button>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Оформить заказ
                        <img src="img/arrow-right.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer