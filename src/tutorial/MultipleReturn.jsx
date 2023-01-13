import React, { useState } from 'react'

function MultipleReturn() {
    const [loading,setLoading] = useState(true);
    if(loading === true){
        return(
            <>
             <h1>Loading ...</h1>
            </>
        )
    }
  return (
    <div>
      <h1>Multiple Return</h1>
    </div>
  )
}

export default MultipleReturn
