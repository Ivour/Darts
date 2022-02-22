import React, { Fragment } from "react";
import styles from "./Game.module.css";
import { Button } from "@mui/material";
import PlayerScore from "./PlayrerScore";
import Navbar from "../layout/Navbar";

const scoreNums = Array.from({ length: 20 }, (_, i) => i + 1);
scoreNums.push(...[25, 50]);

const Game = () => {
  return (
    <Fragment>
      <Navbar isGame={true} />
      <div className={styles.game}>
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
        <PlayerScore />
        <section className={styles["game__buttons-container"]}>
          {scoreNums.map((n) => (
            <Button
              key={n}
              variant="contained"
              size="small"
              className={styles["game__buttons"]}
            >
              {n}
            </Button>
          ))}
          {["double", "triple"].map((str) => (
            <Button
              variant="contained"
              color="primary"
              className={`${styles["game__buttons"]} ${styles["game__buttons--double"]}`}
            >
              {str}
            </Button>
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Game;
