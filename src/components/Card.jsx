const Card = () => {
    return (
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
    )
}

export default Card