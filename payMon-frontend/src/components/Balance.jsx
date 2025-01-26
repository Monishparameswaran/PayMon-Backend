import React from "react";

export function Balance({amount}){
    return (
        <div className="m-2">
            <h2 className="font-bold">Your Balance:  Rs{amount} </h2>
        </div>
    )
}