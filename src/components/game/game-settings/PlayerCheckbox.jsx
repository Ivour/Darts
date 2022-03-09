import React, { useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useOptionsContext } from "../../../store/OptionsContext";

export default function PlayerCheckbox({ player }) {
  const { players, addPlayer, removePlayer } = useOptionsContext();
  const onChangeHandler = (e) => {
    if (e.target.checked) {
      addPlayer(player);
    } else {
      removePlayer(player);
    }
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<RadioButtonUncheckedIcon color="primary" />}
          checkedIcon={<AddTaskIcon color="primary" />}
          onChange={onChangeHandler}
          disabled={player === "player1" || player === "player2"}
        />
      }
      label={player}
    />
  );
}
