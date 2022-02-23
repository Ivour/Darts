import { Typography, Button } from "@mui/material";
import React, { Fragment } from "react";
import AddPlayer from "./AddPlayer";
import PlayerCheckbox from "./PlayerCheckbox";
import styles from "./PlayersSettings.module.css";
import MultipleSelect from "./MultipleSelect";
import Card from "../../layout/Card";
import { useAuthContext } from "../../../store/AuthContext";

const Players = () => {
  const { user } = useAuthContext();
  return (
    <Card>
      <section
        className={`${styles.players} ${
          !user && styles["players--not-logged"]
        }`}
      >
        <Typography variant="h6" className={styles["players__title"]}>
          Select players
        </Typography>
        <PlayerCheckbox user="Player 1" />
        <PlayerCheckbox user="Player 2" />

        {user && <MultipleSelect />}

        {user && (
          <Button
            color="primary"
            variant="outlined"
            sx={{ gridColumn: "1 / span 2" }}
          >
            Add New User
          </Button>
        )}
        {/* <AddPlayer /> */}
      </section>
    </Card>
  );
};

export default Players;
