import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
    const [size,setSize] = useState(window.innerWidth)
    const widthSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',widthSize)
    })
  return (
    <div style={{padding: '50px'}}>
      <h1>Window</h1>
      <h3>{size} PX</h3>
    </div>
  )
}

export default UseEffectCleanUp
