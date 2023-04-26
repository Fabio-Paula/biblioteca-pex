import React from "react";
import Menu from "./menu";

interface IMainContainer {
  children: React.ReactNode
}

export default function MainContainer({ children }: IMainContainer) {
  return (
    <div className="flex bg-black/5">
      <Menu />
      <div className="center-screen">{children}</div>
    </div>
  );
}
