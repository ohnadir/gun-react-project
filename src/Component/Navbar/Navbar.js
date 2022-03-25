import React from 'react';
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({ openModal, cart }) => {
    return (
        <div className='navbar'>
            <h1>Kupa Samsu Store</h1> 
    
            <button className='add-btn' onClick={openModal}>
                <FontAwesomeIcon icon={faCartShopping} />
                <span className='notifying'>{cart.length}</span>
            </button>
        </div>
    );
};
export const NavbarIcon = (props) => {
    const { name, img, price} = props.item;
    console.log(name)
    return (
        <div className='modal-info'>
            <img src={img} alt="" />
            <div className='gun-info'>
                <h1>{name}</h1>
                <p>Price: {price}</p>
            </div>
            
        </div>
    )
}
export default Navbar;