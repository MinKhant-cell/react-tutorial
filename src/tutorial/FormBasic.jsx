import React, { useState } from 'react'

function FormBasic() {
    // const [name,setName] = useState('')
    // const [email,setEmail] = useState('')
    const [person,setPerson] = useState({name: '',email: '',age: ''})
    // const [people,setPeople] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // ***
        return setPerson({...person,[name]: value})
    }
    const addPeople = (e) =>{
        e.preventDefault();
        // if(name && email){
        //     const person = {id: new Date().getTime().toString(),name,email};
        //     setPeople(people => {
        //        return [...people,person]
        //     });
        //     setName('')
        //     setEmail('')
        // }
    }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Form Basic</h1>
      {/* <div>
      <h4>People</h4>
      {people.map(person => {
          const {id,name,email} = person
          return(
              <div key={id} style={{background: 'gray', marginBottom: '35px',padding: '5px'}}>
                  <h5>{name}</h5>
                  <p>{email}</p>
              </div>
          )
      })}
      </div> */}
    

      <div>
          <form>
          <div>
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              name='name' 
              id='name'
              value={person.name}
              onChange={handleChange}
              />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              name='email' 
              id='email'
              value={person.email}
              onChange={handleChange}
              />
          </div>
          <div>
              <label htmlFor="age">Age</label>
              <input 
              type="number" 
              name='age' 
              id='age'
              value={person.age}
              onChange={handleChange}
              />
          </div>
          <button type='button' onClick={addPeople}>Add People</button>
          </form>
          
      </div>
    </div>
  )
}

export default FormBasic
