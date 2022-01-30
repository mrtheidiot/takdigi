import "./price.css";
const Price = (props) => {
    
    return (
        <div className="price-main">
           <div className="price-cena">
                Cena:
                <div className="price-kwoty">
                <div>1H - 100zl</div>
                <div>30min - 50zl</div>
                </div>
           </div>
           <div className="price-linki">
                <div>Zapisy:</div>
           </div>
        </div>
    )
}

export default Price