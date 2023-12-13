import React, { useState } from 'react';
import './styles.css';
import ApiDataComponent from './fetchapi.jsx';

function CardsList() {
    const [cardItems, setCardItems] = useState([]);
    function getData(fetched) {
        setCardItems(fetched);
    }

    return (
        <div className="main">
            <ApiDataComponent getData={getData} />
            <div className='arrayOfObj'>
                {console.log("Before", cardItems)}
                {cardItems.map((item) => (
                    <div className='card' key={item.id}>
                        <div className='name' >{item.name}</div>
                        <div className='price' >{item.price}</div>
                        <div className='address' >{item.address}</div>
                        <button className='button'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsList;
