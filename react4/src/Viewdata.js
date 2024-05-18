import React from 'react';

function Viewdata({data}) {

  return (
	<div className='w-75 m-auto my-3 bg-success text-white rounded-3 text-center p-3 fs-4'>
     <h2>View data </h2> 
	<div>ID : {data.id} </div>
	<div>Name : {data.data.name} </div>
	</div>
  );
}

export default Viewdata;
