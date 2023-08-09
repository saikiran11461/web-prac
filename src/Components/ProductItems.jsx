import React from 'react'

const ProductItems = ({id,title}) => {
  return (
    <div style={{border:"2px solid lightgray", width:"20%", padding:"40px" , margin:"auto", marginBottom:"20px"}}>
        <div><span>{id}.</span>{title}</div>
        <button>Delete</button>
        <button>Edit</button>
       
    </div>
  )
}

export default ProductItems