import React, { useState } from 'react';
import "./styles.css";
import ApiDataComponent from './fetchapi.jsx';

function CardsList() {
    let cardItems = [];
    function getData(fetched) {
      cardItems = fetched;
    }   

    return (
        <div className="main">
            <div className='arrayOfObj'>
                {cardItems.map((item) => (
                    <ApiDataComponent key={item.id} data={item} function = {getData} />
                ))}
            </div>
            <ApiDataComponent/>
        </div>
    );
}

export default CardsList;
