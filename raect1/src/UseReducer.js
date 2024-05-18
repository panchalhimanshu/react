import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
   name : 'product',
   initialState: [],
   reducers : {
          userdata : (state,action)=>{
            state.push(action.payload)
          } ,
          addData : (state,action)=>{
            
             fetch("http://localhost:8000/product",
             {
               method: "post",
               headers : {"content-type" : "application/json"},
               body : JSON.stringify(action.payload)
             })
             .then((res)=>{alert("data posted")})
             .then((data)=>{console.log(data)})
             .catch((err)=>{console.log(err)})
             
          } 
          ,
          editData : (state,action)=>{
            
             fetch("http://localhost:8000/product/"+action.payload.id,
             {
               method: "PUT",
               headers : {"content-type" : "application/json"},
               body : JSON.stringify(action.payload)
             })
             .then((res)=>{alert("data edited and posted")})
             .then((data)=>{console.log(data)})
             .catch((err)=>{console.log(err)})
             
          },

          deleteData : (state,action)=>{
            fetch("http://localhost:8000/product/" + action.payload,
            {
              method: "delete",
              headers : {"content-type" : "application/json"}
            })
            .then((res)=>{
               if(res)
               {
                alert("deleted data")
               }
               
          })
            .catch((err)=>{console.log(err)})
         }
   } 
})

export const {userdata , addData , editData , deleteData} = userslice.actions
export default userslice.reducer