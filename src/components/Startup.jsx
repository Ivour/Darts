import React from "react";
import { Fragment } from "react";
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import Players from "./Players";
import GameOptions from "./GameOptions";
import styles from "./Startup.module.css";
import Card from "./Card";

const Startup = () => {
  return (
    <Fragment>
      <Navbar isStartup={true} />
      <Players />
      <GameOptions />
      <Card>
        <div className={styles.start}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ margin: "1em" }}
          >
            Start game
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default Startup;
