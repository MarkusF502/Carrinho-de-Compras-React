import React, { useState } from "react";
import propTypes from 'prop-types'
import ShopContext from "./ShopContext";

function Provider({ children }){

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCartOn, setIsCartOn] = useState(false)
  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItems,
    setCartItems,
    isCartOn,
    setIsCartOn
  }
  return (

    <ShopContext.Provider value={value}>
     {children}
    </ShopContext.Provider>
  )

}

export default Provider

Provider.propTypes = {
  children: propTypes.any
}