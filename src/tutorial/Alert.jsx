import React, { useEffect } from 'react'

function Alert({alertText,closeAlert}) {
    useEffect(()=>{
        setTimeout(()=>{
            closeAlert()
        },1500)
    })
  return (
    <div className='alert'>

      <p>{alertText}</p>
    </div>
  )
}

export default Alert
