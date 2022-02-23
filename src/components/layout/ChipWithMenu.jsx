import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuthContext } from "../../store/AuthContext";

export default function BasicMenu() {
  const { signout } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    if (e.currentTarget.id === "logout") signout();
    setAnchorEl(null);
  };

  return (
    <div>
      <Chip
        icon={<AccountCircleIcon />}
        label="test"
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      />
      {/* <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose} id="myAccount">
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} id="logout">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
//
