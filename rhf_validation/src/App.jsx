import React from 'react'
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  
const [toggle, setToggle] = useState(false);
  

  return (
    <div>
         <Navbar setToggle={setToggle}/>
<div className="h-[calc(100vh-64px)] flex justify-center items-center">
  
{ toggle?<Usercard/>:<Form/>}
</div>
    </div>
    
   
  )
}

export default App