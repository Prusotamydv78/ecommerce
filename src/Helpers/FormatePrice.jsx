import React from 'react'

function FormatePrice({price}) {
  return new Intl.NumberFormat('en-IN',{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2,
  }).format(price/100)
}

export default FormatePrice
