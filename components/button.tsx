import { ReactNode } from "react";

interface children {
  children : React.ReactNode
}

export default function Button({children} : children){
  return(
    <>
    <button className="bg-neutral-950 text-white text-xl hover:bg-neutral-900 active:bg-neutral-950 p-2 rounded-md">{children}</button>
    </>
  )
}