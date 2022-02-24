import React from "react";
import { Fragment } from "react";
import { Button } from "@mui/material";
import Navbar from "../../layout/Navbar";
import Players from "./PlayersSettings";
import ScoresSettings from "./ScoresSettings";
import styles from "./GameSettings.module.css";
import Card from "../../layout/Card";
import { useNavigate } from "react-router-dom";

const GameSettings = () => {
  const navigate = useNavigate();

  const startGameHandler = () => {
    //send formulář to firebase
    navigate("/game");
  };

  return (
    <Fragment>
      <Navbar isGameSettings={true} />
      <Players />
      <ScoresSettings />
      <Card>
        <div className={styles.start}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ margin: "1em" }}
            onClick={startGameHandler}
          >
            Start game
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default GameSettings;
