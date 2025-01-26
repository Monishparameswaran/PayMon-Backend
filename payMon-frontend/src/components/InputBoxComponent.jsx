import React from "react";

export function InputBoxComponent({type,label,value,isRequired,onEnteringData}){
    
    return (
        <>
         <div className="m-2">
            <label htmlFor="first_name" className="block mb-2 font-semibold text-left text-gray-900 ">{label}</label>
            <input type={type} id={label} className="bg-gray-50 border border-gray-300 text-black  text-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={value} required = {isRequired} onChange={onEnteringData}/> 
        </div>
        </>
    )
}