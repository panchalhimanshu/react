import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editData } from './UseReducer'

function ProductEdit() {

       const {EID} = useParams()

const [products] = useSelector(state => state.products)
// const index = products.findIndex((data) => {return data.id === parseInt(EID)})
// // console.log(index)


// const navigate = useNavigate()
// const [id, setId] = useState(products[index].id)
// const [name, setName] = useState(products[index].name)
// const [price, setPrice] = useState(products[index].price)
// const [category, setCategory] = useState(products[index].category)
// const Dispatch = useDispatch()



const index = products.find((data) => {return data.id == EID})
// console.log(index)


const navigate = useNavigate()
const [id, setId] = useState(index.id)
const [name, setName] = useState(index.name)
const [price, setPrice] = useState(index.price)
const [category, setCategory] = useState(index.category)
const Dispatch = useDispatch()

 
    const handlerSubmit = (e)=>{
        e.preventDefault();
        Dispatch(editData({id,name,price,category}));
        navigate("/");
        window.location.reload();
    }
  return (
    <div>
    <div className='row text-start justify-content-center'>
        <div className='col-6'>
            <h3 className='m-3 '>Edit Product</h3>
            <form onSubmit={handlerSubmit} className='container d-flex flex-column gap-3'>
                <div className='col-10'>
                    <label className='form-label'>ID: </label>
                    <input value={id} onChange={(e)=>{setId(e.target.value)}} className='form-control' disabled/>
                </div>
                <div className='col-10'>
                    <label className='form-label'>Product Name: </label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' />
                </div>
                <div className='col-10'>
                    <label className='form-label'>Price: </label>
                    <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='form-control' />
                </div>
                <div className='col-10'>
                    <label className='form-label'>Category: </label>
                    <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='form-control' />
                </div>
                <div className='col-10'>
                    <button type='submit' className='btn btn-success me-2'>Save</button>
                    <Link to='/' className='btn btn-primary'>Back</Link>
                </div>
            </form>
        </div>
    </div>
</div>
  );
}

export default ProductEdit;









// const {EID} = useParams()
// console.log(EID)

// const [products] = useSelector(state => state.products)

// const index = products.findIndex((data) => {return data.id === parseInt(EID)})