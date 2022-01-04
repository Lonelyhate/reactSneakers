
function App() {
  return (
    <div className="wrapper">
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
            <h1>Все кроссовки</h1>
            <div className="sneakers">
                <div className="card">
                    <img width={133} height={112} src="img/sneakers/1.jpg" alt=""></img>
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
            </div>
        </div>
    </div>
  );
}

export default App;
