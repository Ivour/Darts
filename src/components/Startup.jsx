import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Players from "./Players";

const Startup = () => {
  return (
    <Fragment>
      <Navbar isStartup={true} />
      <Players />
    </Fragment>
  );
};

export default Startup;
