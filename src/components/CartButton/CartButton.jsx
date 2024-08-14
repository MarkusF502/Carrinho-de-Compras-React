import React, { useContext } from 'react'
import { BsCart3 } from "react-icons/bs";
import './CartButton.css'
import ShopContext from '../../context/ShopContext/ShopContext';

function CartButton(){
  const { cartItems, isCartOn, setIsCartOn } =  useContext(ShopContext)
  return (<button type='button' className='cart_button' onClick={() => {setIsCartOn(!isCartOn)}}><BsCart3 className='icon'/>
 {cartItems.length > 0 ?  <span className='cart-status'>{cartItems.length}</span>: ''}</button>)
}

export default CartButton