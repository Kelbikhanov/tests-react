import React from "react";
import { Router } from "@reach/router";

import routes from "../../constants/routes";

const AppRouter = ({ children }) => {
  return (
    <Router primary={false}>
      {routes?.map((route) => (
        <route.component path={route.path} key={route.path}>
          {children}
        </route.component>
      ))}
    </Router>
  );
};

export default AppRouter;
