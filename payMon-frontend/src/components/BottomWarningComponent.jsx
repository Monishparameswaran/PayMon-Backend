import React from "react";
import { Link } from "react-router-dom";
export function BottomWarning({content,to}){
    return (
        <>
           <div>
              <h2 className="font-medium text-black">{content} </h2>
              <Link  className = "text-underline text-blue-400 "to={to}>{to}</Link>
           </div>
        </>
    )
}