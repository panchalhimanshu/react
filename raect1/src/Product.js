import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData } from "./UseReducer";

function Product() {
 
  const [inp,setinp] = useState(null)
  const [inpdata,setinpdata] = useState(null) 
  // const [Userproductdo] = useSelector((state) => state.Product)
 const Dispatch = useDispatch()
  const [Userproduct] = useSelector(state => state.products)

  const onDelete = (id)=>{
     if(window.confirm("Are You Sure?"))
     {
      Dispatch(deleteData(id));
      window.location.reload()
     }
  }
 
  const onserch = ()=>{
     
    const Sercharr = Userproduct.filter((item)=>(
      item.name.toLowerCase().includes(inp.toLowerCase())+
      item.price.toLowerCase().includes(inp.toLowerCase())+
      item.category.toLowerCase().includes(inp.toLowerCase())
    )) ; 
    // console.log(Sercharr);
    setinpdata(Sercharr)
  }

  const onreset = ()=>{
    window.location.reload()
  }
  // console.log(inpdata);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="container">
              <div className="row" style={{ marginTop: 70 }}>
                <div className="col-12">
                  <h2>Search products: </h2>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6 d-flex">
                <input type="text" onChange={(e)=>{setinp(e.target.value)}} />
                <button className="btn btn-dark ms-2" onClick={()=>{onserch()}}>Serch</button>
                <button className="btn btn-success ms-2" onClick={()=>{onreset()}}>Reset</button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <Link to="/products/addproducts" className="btn btn-primary">
                    + Create Product
                  </Link>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">
                  <table className="table table-bordered text-center">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th style={{ width: 300 }}>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        (inpdata === null) ? 

                        Userproduct &&
                        Userproduct.map((data) => (
                          <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.price}</td>
                            <td>{data.category}</td>
                            <td>
                              <Link
                                to={`/products/editproducts/${data.id}`}
                                className="btn btn-info me-2"
                              >
                                Edit
                              </Link>
                              <button className='btn btn-danger' onClick={() => { onDelete(data.id) }} >Delete</button>
                            </td>
                          </tr>
                        ))

                        :

                        
 
                       (inpdata.length !== 0) ?

                       inpdata &&
                       inpdata.map((data) => (
                         <tr key={data.id}>
                           <td>{data.id}</td>
                           <td>{data.name}</td>
                           <td>{data.price}</td>
                           <td>{data.category}</td>
                           <td>
                             <Link
                               to={`/products/editproducts/${data.id}`}
                               className="btn btn-info me-2"
                             >
                               Edit
                             </Link>
                             <button className='btn btn-danger' onClick={() => { onDelete(data.id) }} >Delete</button>
                           </td>
                         </tr>
                       ))

                       :

                         <tr>
                           <td colSpan={5}> No data</td>
                         </tr>



                        }


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
