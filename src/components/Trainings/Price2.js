import './price.css';

const Price2 = (props) => {
    
    return (
        <div className="price-main">
           <div className="price-cena">
                Cena:
                <div className="price-kwoty">
                <div>Cały kurs:</div>
                <div>500zl</div>
                </div>
           </div>
           <div className="price-linki">
                <div>Zapisy:</div>
                <div>Szkola na 6 łap - fb</div>
                <div>Piespotrafi.pl</div>
           </div>
        </div>
    )
}

export default Price2