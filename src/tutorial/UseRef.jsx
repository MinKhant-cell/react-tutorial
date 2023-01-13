import React, { useRef } from 'react'

function UseRef() {
    const refContent = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContent.current.value)
    }
  return (
    <div>
      <h1>Use Ref</h1>
      <div>
          <input ref={refContent} type="text" />
          <button onClick={handleSubmit} type='button'>Submit</button>
      </div>
    </div>
  )
}

export default UseRef
