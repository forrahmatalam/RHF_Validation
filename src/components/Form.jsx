import React from 'react'
import { useForm } from 'react-hook-form';
import {useState} from "react"
import { nanoid } from 'nanoid';


const Form = ({setUsers,setToggle,users,updatedData ,setUpdatedData}) => {

    let {register,formState:{errors},reset, handleSubmit } = useForm({
        mode:"onChange",
        defaultValues:updatedData
        
    });
 

    
const onSubmit = (data) => {
  

   if(updatedData){
    setUsers((prev)=>{
      return prev.map((val)=>{
        return val.id ===updatedData.id ?{...data}:val
      })
    })
   }else{
let arr = [...users ,{...data ,id:nanoid()}];
      setUsers(arr);
  localStorage.setItem("user" , JSON.stringify(arr));
   }
 
  reset();
  setUpdatedData(null);
  setToggle((prev) => !prev);
  
};

  return (
    <div className="w-70 mt-5 bg-white rounded-2xl shadow-xl gap-5 p-5 flex flex-col items-center justify-between ">

        <h1 className="font-bold" >Create User</h1>
      <form onSubmit={handleSubmit(onSubmit) } className='flex flex-col gap-2' action="">
      <input {...register("name" , {required:"name is required" ,pattern:{
        value:/^\s*\S.*$/,
        message:"blank spaces are not allowed"
      }})} className='p-2 text-gray-500 rounded-full text-sm border border-gray-300' type="text" placeholder='Name'/>
      {errors.name && <p className='text-red-500 text-[12px]'>{errors.name.message}</p>}
      <input  {...register("email" ,{required:"email is required",pattern:{
        value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message:"email is not valid" 
      },})} className='p-2 text-gray-500 rounded-full text-sm border border-gray-300' type="email" placeholder='Email'/>
      {errors.email && <p className='text-red-500 text-[12px]'>{errors.email.message}</p>}
      <input  {...register("mobile" ,{required:"mobile is required" ,minLength:{
        value:10,
        message:"minimum 10 digits are required" 
      },
      
      maxLength:{
        value:10,
        message:"maximum 10 digits are required" 
      }
      
      
      
      })} className='p-2 text-gray-500 rounded-full text-sm border border-gray-300' type="number" placeholder='Mobile'/>
      {errors.mobile && <p className='text-red-500 text-[12px]'>{errors.mobile.message}</p>}
      <input  {...register("url" ,{required:"url is required" ,pattern:{
        value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/,
    message: "Enter a valid URL"

      }})} className='p-2 text-gray-500 rounded-full text-sm border border-gray-300' type="url" placeholder='Url'/>
      {errors.url && <p className='text-red-500 text-[12px]'>{errors.url.message}</p>}
      <button className="bg-blue-600 px-2 py-1 text-white rounded-full"><i className="ri-edit-circle-line"></i></button>

      </form>
    </div>
  )
}

export default Form
