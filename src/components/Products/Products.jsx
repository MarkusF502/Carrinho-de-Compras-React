import React, { useContext } from 'react'
import './Products.css'
import { useEffect } from 'react'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import ShopContext from '../../context/ShopContext/ShopContext'

function Products(){
  const {products, setProducts, loading, setLoading} = useContext(ShopContext)
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false)
    });
  }, []);
  return (
   (loading && <Loading />) || (
   <section className='products container'>
    {products.map((product) => <ProductCard key={product.id} data={product}/>)}
   </section>
  ))
}

export default Products