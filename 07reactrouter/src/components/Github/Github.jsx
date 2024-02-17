import React, { useEffect, useState } from 'react'
import { json, useLoaderData } from 'react-router-dom'
import Contact from '../Contact/Contact';

 function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/tinku06071999')
    //   .then(res =>res.json())
    //   .then(data => {
    //     setData(data);
    //   })
    // },[])
  return (

    <div className='bg-gray-600 text-center m-4 text-white p-4 text-3xl'>
    Github Folloers : {data.followers}
    <img src={data.avatar_url} width={300}/>
   </div>
  )
}

export default Github;

export const githibLoader = async () =>{
    const res = await fetch('https://api.github.com/users/tinku06071999')
   return res.json();
}