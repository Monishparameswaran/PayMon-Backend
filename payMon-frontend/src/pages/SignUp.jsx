import {React} from 'react';
import { HeadingComponent } from '../components/HeadingComponent';
import { SubHeadingComponent } from '../components/SubHeadingComponent';
import { InputBoxComponent } from '../components/InputBoxComponent';
import { BottomWarning } from '../components/BottomWarningComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { useState } from "react";
import  axios  from "axios";
export default function SignUp(){

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    return (
        <>
        <div className='bg-slate-300 h-screen flex justify-center'>
            <div className='flex flex-col justify-center'>
                <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                    <div className=' rounded-lg bg-white w-88 text-center p-2 h-max px-4'>
                        <HeadingComponent content={"Sign Up"}></HeadingComponent>
                        <SubHeadingComponent content = {"Enter your information to create an Account "}></SubHeadingComponent>
                        
                        <InputBoxComponent type = "text" label = "First Name" value="Monish" isRequired={true} onEnteringData = {(e)=>{
                            setFirstName(e.target.value);
                        }} />

                        <InputBoxComponent type = "text" label = "Last Name" value="Parameswara" isRequired={true} onEnteringData = { (e)=>{
                            setLastName(e.target.value);
                        }}></InputBoxComponent>

                        <InputBoxComponent type = "email" label = "Email" value="abc@gmail.com" isRequired={true} onEnteringData = { (e)=>{setEmail(e.target.value);} }></InputBoxComponent>

                        <InputBoxComponent type = "password" label = "Password" value="123456" isRequired={true} onEnteringData = { (e)=>{setPassword(e.target.value);}} ></InputBoxComponent>

                        <ButtonComponent label = "SignUp"  onClickingButton = { async (e)=>{
                            const resp = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                firstName: firstName,
                                lastName: lastName,
                                username: email,
                                password: password
                            });
                            console.log(resp.data.token);
                            localStorage.setItem("token",resp.data.token);
                            localStorage.setItem("userId",resp.data.userId);
                        }}></ButtonComponent>
                        <BottomWarning  content = {"Already have an Account ?"}to = {"/signin"}></BottomWarning>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}