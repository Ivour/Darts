import React from "react";
import styles from "./Navbar.module.css";
import { Button, Typography, Chip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../store/AuthContext";
import ChipWithMenu from "./ChipWithMenu";

const Navbar = ({ isGame, isGameSettings }) => {
  const { user } = useAuthContext();
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

      {isGameSettings && (
        <nav className={`${styles.nav} ${styles["nav--game"]}`}>
          {/* <Typography className={styles["nav__logo"]}>DARTS APP</Typography> */}

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
          {user && <ChipWithMenu />}
        </nav>
      )}
    </>
  );
};

export default Navbar;
