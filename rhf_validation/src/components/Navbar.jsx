import React from 'react'

function Navbar({setToggle}) {
  return (
    <div className="flex justify-between items-center ml-3 mr-3 p-4 gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg">
<h1 ><i  className="text-3xl ri-scan-fill text-blue-600 flex items-center"></i></h1>
<div className ="flex items-center gap-5 justify-center">
    <p className="curs  or-pointer text-[14px]">Home</p>
    <p className=" cursor-pointer text-[14px]">About</p>
    <p className=" cursor-pointer text-[14px]">Contact</p>
</div>
<button onClick={() => setToggle((prev)=>!prev)} className="bg-blue-600 cursor-pointer px-2 py-[6px] text-[13px] text-white rounded-full hover:bg-blue-800">Create User</button>
    </div>
  ) 
}

export default Navbar