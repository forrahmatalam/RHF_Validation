import React from 'react'
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';
import { useState } from 'react';

function App( ) {



   const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("user")) || [];
   });

const [toggle, setToggle] = useState(false);
  

let deleteUser = (id)=>{
 let filtered = users.filter((elem )=>{
    return elem.id !== id;

  });
  setUsers(filtered);
  localStorage.setItem("user" , JSON.stringify(filtered));
}

const [updatedData, setUpdatedData] = useState(null)


  return (
    <div>
         <Navbar setToggle={setToggle}/>
<div className="h-[calc(100vh-64px)] flex justify-center items-center">
  
{
  toggle
    ? users.map((elem) => {
        return <Usercard setUpdatedData={setUpdatedData}  deleteUser={deleteUser} key={elem.id} user={elem} setToggle={setToggle}/>;
      })
    : <Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle} setUpdatedData={setUpdatedData}/>
}

</div>
    </div>
    
   
  )
}

export default App