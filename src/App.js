
function App() {
  return (
    <div className="wrapper">
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

        <header>
            <div className="headerLeft">
                <img width={40} height={40} src="img/logo.png" />
                <div className="headerInfo">
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <img width={18} height={18} src="img/cart.svg" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="img/user.svg" />
                </li>
            </ul>
        </header>
        <div className="content">
            <div className="sheakersHeader">
                <h1>Все кроссовки</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="Search"></img>
                    <input placeholder="Поиск..."></input>
                </div>
            </div>
            <div className="sneakers">
                <div className="card">
                    <div className="favorite">
                        <img src="img/heart-unliked.svg"></img>
                    </div>
                    <img width={133} height={112} src="img/sneakers/1.jpg" alt="Кроссовки"></img>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div>
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="img/plus.svg"></img>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="img/sneakers/2.jpg" alt=""></img>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div>
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="img/plus.svg"></img>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="img/sneakers/3.jpg" alt=""></img>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div>
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="img/plus.svg"></img>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="img/sneakers/4.jpg" alt=""></img>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="cardBottom">
                        <div>
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="img/plus.svg"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
