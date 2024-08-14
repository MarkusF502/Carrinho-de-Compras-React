import React, { useContext } from 'react'
import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa";
import propTypes from 'prop-types'
import FormatCurrency from '../../utils/FormatCurrency';
import ShopContext from '../../context/ShopContext/ShopContext';

function ProductCard({data}){
  const {title, thumbnail, price} = data
  const { cartItems, setCartItems} = useContext(ShopContext)
  const handleAddCart = () => {
   setCartItems([ ...cartItems, data ]);
  }
  return(
<section className='product_card'>
  <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt='product' className='card_image'></img>
  <div className='card_info'><h2 className='card_price'>{FormatCurrency(price, 'BRL')}</h2>
  <h2 className='card_title'>{title}</h2></div>
  <button type='button' className='card_button' onClick={handleAddCart}><FaCartPlus/></button>
</section>
  )
}

export default ProductCard
ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired