import React, { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import './CartItem.css'
import FormatCurrency from "../../utils/FormatCurrency";
import propTypes from 'prop-types'
import ShopContext from "../../context/ShopContext/ShopContext";

function CartItem({ data }){
  const { cartItems, setCartItems } = useContext(ShopContext)
  const {id, thumbnail, title, price} = data
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  }
  return (
    <section className="cart_item">
      <img src={thumbnail} alt="imagem do produto" className="cart_item_img" />
      <div className="cart_item_content">
        <h3 className="cart_item_title">{title} </h3>
        <h3 className="cart_item_price">{FormatCurrency(price, 'BRL')}</h3>
        <button type="button" className="button_cart_item" onClick={handleRemoveItem}><BsCartX className="svgIcon"/></button>
      </div>
     
    </section>
  )

}

export default CartItem
CartItem.propTypes = {
  data: propTypes.object
}.isRequired