import { Typography, Button } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import PlayerCheckbox from "./PlayerCheckbox";
import styles from "./PlayersSettings.module.css";
import MultipleSelect from "./MultipleSelect";
import Card from "../../layout/Card";
import { useAuthContext } from "../../../store/AuthContext";
import { useOptionsContext } from "../../../store/OptionsContext";
import { getDatabase, ref, onValue } from "firebase/database";

const Players = () => {
  const { user } = useAuthContext();
  const { players } = useOptionsContext();
  const [fetchedPlayers, setFetchedPlayers] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setFetchedPlayers(Object.values(data).map((obj) => obj.username));
    });
  }, [user]);

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
        {fetchedPlayers.map((str) => (
          <PlayerCheckbox player={str} />
        ))}

        {/*  {user && <MultipleSelect />} */}
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
