import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux';
import { userdata } from './UseReducer';
import ProductEdit from './ProductEdit';
import Productadd from './Productadd';

function Productpath() {

//  const Product = useSelector((state)=> state.Product) 
        const Dispatch=  useDispatch()
    
     useEffect(()=>{
      fetch("http://localhost:8000/product").then((res)=>{return res.json()}).then((data)=>{Dispatch(userdata(data))})
     },[Dispatch])
      

  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/products/addproducts' element={<Productadd/>}></Route>
        <Route path='/products/editproducts/:EID' element={<ProductEdit/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default Productpath;
