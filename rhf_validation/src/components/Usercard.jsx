import React from 'react'

const Usercard = () => {
  return (
    <div className="w-50 bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-4">

      <img
        className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
        src="https://images.unsplash.com/photo-1644833384541-b273dbb40caa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User"
      />

      <div className="text-center">
        <h1 className="text-xl font-bold">Rahmat Alam</h1>
        <p className="text-gray-500 text-sm">
          Frontend Developer
        </p>
           <p className="text-gray-500 text-sm">
          +91-9876543210
        </p>
      </div>

<div className="flex gap-2">
   <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-lg cursor-pointer">
        Delete
      </button>

         <button className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-lg cursor-pointer">
        Update
      </button>

</div>
   

    </div>
  )
}

export default Usercard