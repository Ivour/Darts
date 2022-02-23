import React from "react";
import { Fragment } from "react";
import { Button } from "@mui/material";
import Navbar from "../../layout/Navbar";
import Players from "./PlayersSettings";
import GameOptions from "./ScoresSettings";
import styles from "./GameSettings.module.css";
import Card from "../../layout/Card";

const GameSettings = () => {
  return (
    <Fragment>
      <Navbar isGameSettings={true} />
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

export default GameSettings;
