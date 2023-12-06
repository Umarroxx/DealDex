import React from 'react';
import "./styles.css";

function Cards(props) {
    return (
        <div className='card' key={props.data.id} id = {props.data.id}>
            <div>
                <img className='img' src={props.data.img} alt="" />
            </div>
            <div>
                <p className='name'>{props.data.Name}</p>
                <button className='button'>SEE MORE</button>
            </div>
        </div>
    );
}
export default Cards;
