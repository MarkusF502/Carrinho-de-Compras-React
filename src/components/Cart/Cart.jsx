import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'
import ShopContext from '../../context/ShopContext/ShopContext'
import FormatCurrency from '../../utils/FormatCurrency';

function Cart(){
  const {cartItems, isCartOn} = useContext(ShopContext);
  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0)
  
 return (<section className={`cart ${isCartOn ? 'cart_on' : ''}`}>
  <div className='cart_items'>
    {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
    </div>
  <div className='cart_resume'>Resumo do Carrinho: {FormatCurrency(totalPrice, 'BRL')}</div>
 </section>)
}

export default Cart