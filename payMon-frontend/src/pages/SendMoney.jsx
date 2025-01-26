import React from "react";
import { useSearchParams } from 'react-router-dom';
import { HeadingComponent } from "../components/HeadingComponent";
import { OuterGray } from "../components/OuterGray";
import { SubHeadingComponent } from "../components/SubHeadingComponent";
import { InputBoxComponent } from "../components/InputBoxComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import {useState} from "react"
import axios from "axios"
export function SendMoney(){

  const [amount,setAmount] = useState(0);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('id'));
   const name = searchParams.get('name');
   const id = searchParams.get('id');
    return (
        <>
          
        <div className='bg-slate-300 h-screen flex justify-center'>
          <div className='flex flex-col justify-center'>
              <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
              <HeadingComponent content = {"Send Money"}></HeadingComponent>

              <SubHeadingComponent content = {"To : " + name}></SubHeadingComponent>

              <InputBoxComponent label = {"Amount ( in Rs )"} type={Number} onEnteringData={(e)=>{setAmount(e.target.value)}} ></InputBoxComponent>
              <ButtonComponent label = {"Initiate Transfer"} onClickingButton={ async (e)=>{
                 const resp =   await axios.post("http://localhost:3000/api/v1/account/transfer",{
                  to: id,
                  amount: amount
               },{
                   headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                   }
                 });
                 console.log(resp);
              }}></ButtonComponent>
            </div>
            </div>
            </div>
        </>
    );
}