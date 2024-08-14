import { useState, useContext } from 'react';
import React from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import ShopContext from '../../context/ShopContext/ShopContext';

function SearchBar(){
  const [searchValue, setSearchValue] = useState('')
  const {setProducts, setLoading} = useContext(ShopContext)
  const handleSearch = async (event) => {
   event.preventDefault()
   setLoading(true)
   const products = await fetchProducts(searchValue)
   setProducts(products)
   setLoading(false)
   setSearchValue('')
  }


  return (
    <form className="group" onSubmit={handleSearch}>
  <button type='submit' 
  className='search_button'><BsSearch/></button>
  <input placeholder="Buscar Produtos" 
  type="search" 
  className="input"
  onChange={({target}) => setSearchValue(target.value)}
  value={searchValue}/>
</form>
  )
}

export default SearchBar