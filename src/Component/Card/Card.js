import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {action, bullet, capacity, category, img, name, price, id } = props.guns;
    const { handleAddToCart } = props;
    // console.log(props);

    return (
        <div className='guns'>
            <img src={img} alt="" />
            <div className='gun-info'>
                <h3>{name}</h3>
                <p>Bullet type: {bullet}</p>
                <p>Action: {action}</p>
                <p>Price: ${price}</p>
                <h5>Capacity: {capacity}</h5>
            </div>
            <button className='btn' onClick={()=> handleAddToCart(props.guns)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Card;