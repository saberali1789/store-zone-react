import React from 'react'


const Product = (props) => {
  console.log(props);
  const product = props.product
  return (
    <div className="card p-1 mb-5" >
    <img src={product.image} className="card-img-top p-3 img-card" alt='00' />
    <div className="card-body">
      <h5 className="card-title">{product.title.slice(0, 20)}</h5>
      <p className="card-text">{product.description.slice(0, 70)}...</p>
      <a href="/#" className="btn btn-primary">Details</a>
    </div>
  </div>
  )
}

export default Product