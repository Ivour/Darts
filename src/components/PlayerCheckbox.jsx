import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function PlayerCheckbox({ user }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          icon={<RadioButtonUncheckedIcon color="secondary" />}
          checkedIcon={<AddTaskIcon color="secondary" />}
        />
      }
      label={user}
    />
  );
}
