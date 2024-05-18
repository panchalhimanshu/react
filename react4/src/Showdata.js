import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { data, maindata } from './Stordata';
import Viewdata from './Viewdata';

function Showdata() {

const [mapdata,showmapdata] =	useState([])
const [name,setname]=	useState('')
const [id,setid]=	useState('')


const [viewname,setviewname]=	useState('')

	useEffect(()=>{
         
		onSnapshot(maindata,snapchat => {
			showmapdata( snapchat.docs.map((docss)=> ({data: docss.data(),id : docss.id})) )
		})

	})

	const Editdatas = (v)=>{
		setid(v.id)
		setname(v.data.name)
	}


	const handlesubmit = (e)=>{
		e.preventDefault();

		const editdata = doc(data , "firestore" , id)

		updateDoc(editdata,{name : name}).then((res)=> res.json()).catch((err)=>console.log(err.message))
		setname('')
		setid('')
	      
	 }

	 const deletedatas = (v)=>{

		const editdata = doc(data , "firestore" , v)
		deleteDoc(editdata,{v}).then((res)=> res.json()).catch((err)=>console.log(err.message))
	}

	const viewdatas = (v)=>{
		setviewname(v)
	}



  return (
	<div>
         
		 <form action="" onSubmit={handlesubmit} className='w-75 mx-auto my-5 border p-3 rounded-3'>
			<h3 className='text-center py-2'>Edit User</h3>
			<div>
				<label htmlFor="form-label">ID</label>
				<input type="text" className='form-control' value={id}   />
			</div>
			<div>
				<label htmlFor="form-label">Name</label>
				<input type="text" className='form-control' value={name} onChange={(e)=>setname(e.target.value)}  />
			</div>
			<div>
				<input type="submit" value={'Update'} className='btn btn-success my-3'/>
			</div>
		 </form>

	    {mapdata && mapdata.map((v)=>(
			<div className='border pt-2 border-2 border-black w-75 m-auto my-2 text-center'>
				ID :{v.id} <br /> Name : {v.data.name} <br /> <button className='btn btn-primary' onClick={()=>viewdatas(v)}>View</button> <button className='btn btn-success mx-3' onClick={()=>Editdatas(v)}>Edit</button>  <button className='btn btn-danger' onClick={()=>deletedatas(v.id)}>Delete</button> <br /> <br /> 
			</div>
		))}

      { viewname && <Viewdata data={viewname}/> }

	</div>
  );
}

export default Showdata;
