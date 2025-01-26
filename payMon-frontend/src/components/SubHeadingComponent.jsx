import React  from "react";

export function SubHeadingComponent({content}){
    return (
        <>
          <h3 className="font-semibold text-slate-600 mt-4 mb-3 ">{content}</h3>
        </>
    )
}