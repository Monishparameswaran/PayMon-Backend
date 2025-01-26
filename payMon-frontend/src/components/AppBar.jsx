import React from "react";
import { Logout } from "./LogoutButton";
import { ButtonComponent } from "./ButtonComponent";
export function AppBar({name,isAuth}){
    return (
        <>
            <div className="flex justify-between p-6 shadow">
                <h1>PayMon</h1>
                <div className="flex justify-between">
                  { isAuth && <h3 className="mr-3">Hello {name}</h3> }
                  <div className="mt-0 mr-8 p-1">{ !isAuth &&  <ButtonComponent label = "SignIn"></ButtonComponent> }</div>
                  
                    <Logout></Logout>
                </div>
                
            </div>
        </>
    )
}