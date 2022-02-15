import React, { Fragment } from "react";
import styles from "./Game.module.css";
import { Button } from "@mui/material";

const scoreNums = Array.from({ length: 20 }, (_, i) => i + 1);
scoreNums.push(...[25, 50]);

const Game = () => {
  return (
    <Fragment>
      <header>
        <h1>ds</h1>
      </header>
      <div className={styles.game}>
        <section className={styles["game__scores"]}>scores</section>
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
              color="secondary"
              className={styles["game__buttons"]}
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
