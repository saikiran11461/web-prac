import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItems from '../Components/ProductItems';

const Products = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false)

  //get

  const getData =()=>{
      axios.get("http://localhost:8080/todos")
      .then(res=>{
        setLoading(true)
        setData(res.data)
        setLoading(false)
        setError(false)
      })
      .catch(err=>{
        console.log(err)
        setError(true)
      })
  }

  console.log("data here", data);

  useEffect(()=>{
    getData()
  },[])


  return (
    <div>
       {
        loading && <h1>Loading ......</h1>
       }
      {
        data?.map((item)=>(
          <ProductItems key={item.id} id={item.id} title={item.title} />
        ))
      }
    </div>
  )
}

export default Products