import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { maindata } from './Stordata';

function Adddata() {
 const [name,setname]=	useState('')


 const handlesubmit = (e)=>{
	e.preventDefault();
	 
	addDoc(maindata,{name : name}).then((res)=> res.json()).catch((err)=>console.log(err.message))
   setname('')

 }

  return (
	<div>
         
		 <form action="" onSubmit={handlesubmit} className='w-75 mx-auto my-5 border p-3 rounded-3'>
			<h3 className='text-center py-2'>Add User</h3>
			<div>
				<label htmlFor="form-label">Name</label>
				<input type="text" className='form-control' value={name} onChange={(e)=>setname(e.target.value)}  />
			</div>
			<div>
				<input type="submit" className='btn btn-success my-3'/>
			</div>
		 </form>

	  
	</div>
  );
}

export default Adddata;
