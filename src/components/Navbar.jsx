import React from "react";
import styles from "./Navbar.module.css";
import { Button, Typography } from "@mui/material";

const Navbar = ({ isGame }) => {
  return (
    <nav className={styles.nav}>
      {isGame && (
        <div>
          <Button
            variant="outlined"
            color="secondary"
            className={styles["nav__button"]}
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={styles["nav__button"]}
          >
            Cancel
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
