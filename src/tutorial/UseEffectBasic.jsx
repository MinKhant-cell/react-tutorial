import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {
    const [value,setValue] = useState(0);
    const plusValue = () => {
        setValue(value + 1)
    }
    useEffect(()=>{
        document.title = 'New Message '+value;
    })
  return (
    <div style={{padding: '35px'}}>
      <h3>Use Effect Basic</h3>
      <div>
          <p>{value}</p>
          <button type='button' onClick={plusValue}>Plus +</button>
      </div>

    </div>
  )
}

export default UseEffectBasic
