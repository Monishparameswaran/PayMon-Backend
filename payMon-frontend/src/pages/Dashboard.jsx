import React  from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users"
import { useState,useEffect} from "react";
import axios from "axios";
import { use } from "react";
export function Dashboard(){
    const [balance,setBalance] = useState(0.00);
    const [isAuth,setAuth] = useState(false);
    const [userName,setUserName]= useState("");
    console.log(balance);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{ 'headers' : { 'authorization': `Bearer ${localStorage.getItem('token')}`,'userId': localStorage.getItem('userId')}})
        .then((jsonData)=>{
            console.log(jsonData);
            if( jsonData.status == "200" ){
                setAuth(true);
                console.log(jsonData.data.username);
                setUserName(jsonData.data.username);
            }
            
            
            setBalance(jsonData.data.balance);
        })

    },[]);

    return (
        <>
          <AppBar name =  {userName} isAuth = {isAuth}></AppBar>
          <div className="flex justify-center">
              <Balance amount={balance}></Balance>
          </div>
          <Users></Users>
        </>
    );
}