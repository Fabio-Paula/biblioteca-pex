import React from "react";
import Menu from "./menu";
import { ToastContainer } from 'react-toastify'

interface IMainContainer {
  children: React.ReactNode;
}

export default function MainContainer({ children }: IMainContainer) {
  return (
    <div className="flex size-window bg-black/5">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
      <Menu />
      <div className="size-window">{children}</div>
    </div>
  );
}
