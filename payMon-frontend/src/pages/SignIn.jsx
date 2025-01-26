import React from 'react'
import { HeadingComponent } from '../components/HeadingComponent';
import { SubHeadingComponent } from '../components/SubHeadingComponent';
import { InputBoxComponent } from '../components/InputBoxComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { BottomWarning } from '../components/BottomWarningComponent';
import {useState} from 'react';
import axios from 'axios'; 
export function SignIn(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <>
            <div className='bg-slate-300 h-screen flex justify-center'>
              <div className='flex flex-col justify-center'>
                    <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                        <HeadingComponent content = {"SignIn"}></HeadingComponent>
                        <SubHeadingComponent content = {"Enter the details to signIn to your account "}> </SubHeadingComponent>

                       <InputBoxComponent label={"Email"} value={"abc@gmail.com"} isRequired={true} 
                         onEnteringData = {(e)=>{setEmail(e.target.value);}}
                        ></InputBoxComponent>

                       <InputBoxComponent label={"Password"} type={"password"} isRequired={true} value={"12345678"} onEnteringData = {(e)=>{setPassword(e.target.value);}} ></InputBoxComponent>

                      <ButtonComponent label={"signIn"} onClickingButton={ async (e)=>{
                        const resp = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username: email,
                            password: password
                        });
                        console.log(resp.data.token);
                        localStorage.setItem("token",resp.data.token);
                        localStorage.setItem("userId",resp.data.userId);

                      }} ></ButtonComponent>
                      <BottomWarning content={"Don't have an Account? create one"} to = {"/signUp"}></BottomWarning>
                    </div>
               </div>
            </div>
        </>
    );
}