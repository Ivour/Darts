import React from "react";
import styles from "./Navbar.module.css";
import { Button, Typography } from "@mui/material";

const Navbar = ({ isGame, isStartup }) => {
  return (
    <>
      {isGame && (
        <nav className={styles.nav}>
          <Button
            variant="outlined"
            color="primary"
            className={styles["nav__button"]}
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles["nav__buttons"]}
          >
            Cancel
          </Button>
        </nav>
      )}

      {isStartup && (
        <nav className={`${styles.nav} ${styles["nav--game"]}`}>
          {/* <Typography className={styles["nav__logo"]}>DARTS APP</Typography> */}
          <Button
            variant="outlined"
            color="primary"
            className={styles["nav__buttons"]}
          >
            New Game
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles["nav__buttons"]}
          >
            games
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles["nav__buttons"]}
          >
            Stats
          </Button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
