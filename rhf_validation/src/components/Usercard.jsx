import React from 'react'

const Usercard = ({user,setToggle}) => {
  return (
    <div className="w-50 bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-4">

      <img
        className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        src={user.url}
        alt="User"
      />

      <div className="text-center">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-gray-500 text-sm">
          {user.email}
        </p>
           <p className="text-gray-500 text-sm">
         {user.mobile}
        </p>
      </div>

<div className="flex gap-2">
   <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer">
        Delete
      </button>

         <button onClick={() => setToggle((prev) => !prev)} className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-lg cursor-pointer">
        Update
      </button>

</div>
   

    </div>
  )
}

export default Usercard