import React from "react";
import Menu from "./menu";

interface IMainContainer {
  children: React.ReactNode
}

export default function MainContainer({ children }: IMainContainer) {
  return (
    <div className="flex size-window bg-black/5">
      <Menu />
      <div className="size-window">{children}</div>
    </div>
  );
}
