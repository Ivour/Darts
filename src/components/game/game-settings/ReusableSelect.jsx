import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import { useOptionsContext } from "../../../store/OptionsContext";

export default function ReusableSelect({
  arrValues,
  label,
  minWidth,
  initialVal,
}) {
  const { scores, setPoints } = useOptionsContext();

  const handleChange = (event) => {
    setPoints(event.target.value, label);
    /* if (label === "Sets") setPoints(event.target.value);
    if (label === "Legs") setPoints(event.target.value);
    if (label === "Check out") setPoints(event.target.value); */
  };

  return (
    <FormControl
      sx={{
        flex: 1,
        minWidth,
        maxWidth: "10rem",
        margin: "0.5em",
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label" color="warning">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        onChange={handleChange}
        value={scores[label]}
        color="primary"
        label={label}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            //je potřeba najít v prohližeči nejvíc vnořenou třídu
            borderColor: "orange",
          },
        }}
      >
        {arrValues.map((n, i) => (
          <MenuItem key={i} value={n}>
            {n}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
