import React from "react";
import { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import  axios from 'axios'
import {User} from './User'

export function Users(){
    const [search,setSearch] = useState("");
    const [userData,setUserData] = useState([]);
    let navigate = useNavigate(); 
    const routeChange = (id,name) =>{ 
        let path = `../sendMoney?id=${id}&name=${name}`; 
        navigate(path);
    }
    const listUsers = userData.map((data)=>{
        return (
        <div className = "m-16  h-4 p-16 flex-1 flex-row" key={data.id}>
            <h2 className=" text-black   ">{data.name}</h2>
            <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-blue-300 to-green-200 hover:bgx-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={(e)=>{
                console.log(data.id);
                routeChange(data.id,data.name);
              }}    
            >Send Money</button>
        </div>)
    });
    
    console.log(userData);
                return (  
         <div>
            <form class="flex items-center max-w-sm mx-auto">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                        </svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." onChange={ async (e)=>{
                        setSearch(e.target.value)
                        const resp = await axios.get("http://localhost:3000/api/v1/user/bulk",{
                            'params': {'filter': search },'headers' : {'authorization': `Bearer ${localStorage.getItem('token')}`}
                        
                        });
                        console.log(resp);
                        setUserData([]);
                        resp.data.user.map((user)=>{
                            let name = user.firstName + " " + user.lastName;
                            let id = user._id;
                            const obj = {name: name,id: id}
                            
                            setUserData(arr => [...arr,obj]);

                        });

                    }} required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                
            </form>
            <User listUsers={listUsers}></User>
            </div>
       
    )
}