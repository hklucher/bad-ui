import React, { ReactNode } from "react";

import "./AppContainer.css";

interface Props {
  children: ReactNode
}

function AppContainer({ children }: Props) {
  return (
    <div className="app-container">
      {children}
    </div>
  )
}

export default AppContainer;
