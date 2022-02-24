import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";

export default function ReusableSelect({
  arrValues,
  label,
  minWidth,
  initialVal,
}) {
  const [age, setAge] = React.useState(initialVal);

  const handleChange = (event) => {
    setAge(event.target.value);
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
        value={age}
        onChange={handleChange}
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
