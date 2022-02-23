import React from "react";
import styles from "./Navbar.module.css";
import { Button, Typography, Chip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../store/AuthContext";
import ChipWithMenu from "./ChipWithMenu";
import { Link } from "react-router-dom";

const Navbar = ({ isGame, isGameSettings }) => {
  const { user } = useAuthContext();
  if (isGame) {
    return (
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
    );
  }

  if (isGameSettings) {
    return (
      <nav className={`${styles.nav} ${styles["nav--game"]}`}>
        {/* <Typography className={styles["nav__logo"]}>DARTS APP</Typography> */}

        {!user && (
          <>
            <Typography fontSize="small">To access statistics:</Typography>
            <Button
              variant="outlined"
              className={styles["nav__buttons"]}
              color="primary"
              component={Link}
              to="/"
            >
              Create account
            </Button>
          </>
        )}

        {user && (
          <>
            <Button
              variant="outlined"
              color="primary"
              className={styles["nav__buttons"]}
              component={Link}
              to="/games"
            >
              games
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={styles["nav__buttons"]}
              component={Link}
              to="/stats"
            >
              Stats
            </Button>
            <ChipWithMenu />
          </>
        )}
      </nav>
    );
  }
};

export default Navbar;
