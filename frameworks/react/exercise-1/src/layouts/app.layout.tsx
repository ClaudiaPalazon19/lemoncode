import React from "react";
import "./app.layout.css";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="layout-app-container">{children}</div>
    </>
  );
};
