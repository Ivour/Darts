import { Chip, Typography, Button } from "@mui/material";

import React, { Fragment } from "react";
import Card from "../layout/Card";
import { useAuthContext } from "../../store/AuthContext";
import styles from "./ProfileSettings.module.css";
import ChangePassword from "./ChangePassword";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const { user, signout } = useAuthContext();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await signout();
      navigate("/");
    } catch (err) {
      // TODO zobrazit err message
    }
  };
  return (
    <Fragment>
      <Card>
        <div className={styles["profile-settings__account"]}>
          <Typography
            variant="h5"
            sx={{
              gridColumn: "1/-1",
              justifySelf: "center",
              marginBottom: "0.5em",
            }}
          >
            Account
          </Typography>
          <Typography sx={{ margin: "0.7em" }}>Email:</Typography>
          <Chip
            label={user?.email}
            variant="outlined"
            sx={{ justifySelf: "start" }}
            color="primary"
          />
          {user?.displayName && (
            <Typography sx={{ margin: "0.7em" }}>Username:</Typography>
          )}

          {user?.displayName && (
            <Chip
              label={user?.displayName}
              variant="outlined"
              sx={{ justifySelf: "start" }}
              color="primary"
            />
          )}
        </div>
      </Card>
      <ChangePassword />
      <Card>
        <div className={styles["profile-settings__logout"]}>
          <Button
            variant="outlined"
            color="warning"
            sx={{ textAlign: "center" }}
            onClick={logoutHandler}
          >
            Logout
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default ProfileSettings;
