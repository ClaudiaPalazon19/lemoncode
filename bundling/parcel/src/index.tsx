import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "./navBar";
import * as classes from "./mystyles.module.scss";
import lemoncode from "./content/lemoncode.png";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className={classes.principalContainer}>
      <NavBar />
      <img src={lemoncode} />
      <h1 className={`${classes.principalText} mt-3`}>
        Hola mundo, este es mi proyecto semilla
      </h1>
    </div>
  </div>
);
