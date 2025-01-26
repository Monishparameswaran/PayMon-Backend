import React from "react";

export function ButtonComponent({label,onClickingButton}){
    return (
        <>
        <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 m-2" onClick={onClickingButton}>{label}</button>
        </>
    )
}