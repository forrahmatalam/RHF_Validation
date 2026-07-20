import React from 'react'
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';
import { useState } from 'react';

function App( ) {

   const [users, setUsers] = useState([]);
const [toggle, setToggle] = useState(false);
  
console.log(users);
  return (
    <div>
         <Navbar setToggle={setToggle}/>
<div className="h-[calc(100vh-64px)] flex justify-center items-center">
  
{
  toggle
    ? users.map((elem , index) => {
        return <Usercard key={index} user={elem} setToggle={setToggle} />;
      })
    : <Form setUsers={setUsers} setToggle={setToggle}/>
}

</div>
    </div>
    
   
  )
}

export default App