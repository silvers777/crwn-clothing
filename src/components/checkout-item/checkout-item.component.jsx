import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <name className='name'>{name}</name>
    <name className='quantity'>{quantity}</name>
    <name className='price'>{price}</name>
    <div className='remove-button'>&#10005;</div>
  </div>
)

export default CheckoutItem
