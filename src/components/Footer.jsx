import React from 'react'

const Footer = () => {
  const handlClick = (first) => {
    console.log(first)
  }
  return (
    <button onClick={() => handlClick("name")}>click</button>
  )
}

export default Footer