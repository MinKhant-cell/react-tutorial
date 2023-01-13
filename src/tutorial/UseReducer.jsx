import React, { useReducer, useState } from 'react'
import Alert from './Alert';
function UseReducer() {
    const reducer = (state,action) => {
        if(action.type === 'AddName'){
            const newName = [...state.people,action.value]
            return {
                ...state,
                isAlert: true,
                people: newName,
            }
        }
        if(action.type === 'CloseAlert'){
            return {...state,isAlert: false}
        }
    }
    const defaultState = {
        isAlert: false,
        alertText: 'Success!',
        people: [],
    } 
  const [name,setName] = useState(['']);
  const [state,dispatch] = useReducer(reducer,defaultState)
  const changeHandler = (e) => {
      setName(e.target.value)
  }
  const clickHandler = (e) => {
    e.preventDefault();
    if(name){
        const value = {name};
        dispatch({type: 'AddName', value})
        setName('')
    }
  }
  const closeAlert = () => {
      dispatch({type: 'CloseAlert'})
  }
  const remove= () =>{
      dispatch({type: 'Remove'})
  }
  return (
    <>
      {
         state.isAlert && <Alert closeAlert={closeAlert} alertText={state.alertText}/>
      }
      <h1 className='title'>Use Reducer</h1>
      <div>
          <input type="text" onChange={changeHandler} value={name}/>
          <button onClick={clickHandler} type='button'>Add</button>
      </div>
      <div>
          <h3>People</h3>
          {state.people.map(person =>{
              return(
                  <div>
                      <h5 key={person.name}>{person.name}</h5>
                      <button onClick={remove} >Remove</button>
                  </div>
              )
          })}
      </div>
    </>
  )
}

export default UseReducer
