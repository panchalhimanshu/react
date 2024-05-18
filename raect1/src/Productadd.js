import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addData } from './UseReducer'

function Productadd() {

    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const Dispatch = useDispatch()


    const handlerSubmit = (e)=>{
        e.preventDefault();
        Dispatch(addData({id:setId,name,price,category}));
        navigate("/");
        window.location.reload();
    }
  return (
    <div>
    <div className='row text-start justify-content-center'>
        <div className='col-6'>
            <h3 className='m-3 '>Add Product</h3>
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

export default Productadd;
