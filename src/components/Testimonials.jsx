import React, {useState} from 'react'

const Testimonials = () => {
  const [move, setMove]=useState(true)
  return (
    <>
      <button onClick={() => setMove(!move)}>click</button>
      <p>{move ? "hello" : "world"}</p>
    </>
  )
}

export default Testimonials