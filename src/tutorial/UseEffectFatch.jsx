import React, { useEffect, useState } from 'react'

const UseEffectFatch = () => {
    const url = 'https://api.github.com/users';
    const [users,setUsers] = useState([]);
    const getUsers = async () =>{
        const res = await fetch(url);
        const users = await res.json();
          console.log(users)
        setUsers(users)
    } 
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div>
      <h1>GitHub Users</h1>
      <ol>
      { users.map(user => {
        return( 
          <li style={{marginBottom : '10px'}} key={user.id}>{user.login}</li>
        )
      })}
      </ol>
      
    </div>
  )
}

export default UseEffectFatch
