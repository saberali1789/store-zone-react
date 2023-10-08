import React from 'react'


const Product = (props) => {
  console.log(props);
  const product = props.product
  return (
    <div className="card" >
    <img src={product.image} className="card-img-top img-card" alt='00' />
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="/#" className="btn btn-primary">Details</a>
    </div>
  </div>
  )
}

export default Product