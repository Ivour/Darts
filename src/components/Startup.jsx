import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Players from "./Players";
import GameOptions from "./GameOptions";

const Startup = () => {
  return (
    <Fragment>
      <Navbar isStartup={true} />
      <Players />
      <GameOptions />
    </Fragment>
  );
};

export default Startup;
