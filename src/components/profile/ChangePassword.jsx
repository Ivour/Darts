import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Alert } from "@mui/material";
import Card from "../layout/Card";
import styles from "./ChangePassword.module.css";
import { useAuthContext } from "../../store/AuthContext";

const ChangePassword = () => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassAgain, setNewPassAgain] = useState("");
  const [hasError, setHasError] = useState(false);
  const [changeSuccessful, setChangeSuccessful] = useState(false);

  const { user, logIn, changePassword } = useAuthContext();
  console.log("render");
  useEffect(() => {
    setTimeout(() => setChangeSuccessful(false), 2000);
  }, [changeSuccessful]);

  const resetForm = () => {
    setCurrentPass("");
    setNewPass("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setHasError(false);

    try {
      await logIn(user.email, currentPass);
      await changePassword(newPass);
      e.target.blur();
      resetForm();
      setChangeSuccessful(true);
    } catch (err) {
      setHasError(err.message);
    }
  };
  return (
    <Card>
      <form onSubmit={submitHandler} className={styles["change-password"]}>
        <Typography variant="h5">Change Password</Typography>

        {changeSuccessful && (
          <Alert
            variant="outlined"
            severity="success"
            sx={{
              margin: "1em 0",
              borderRadius: "0.6em",
              maxWidth: "90%",
            }}
          >
            Password changed
          </Alert>
        )}

        {hasError && (
          <Alert
            variant="outlined"
            severity="error"
            sx={{ margin: "1em 0", borderRadius: "0.6em", maxWidth: "90%" }}
          >
            {hasError}
          </Alert>
        )}

        <TextField
          label="Current Password"
          autoComplete="off"
          variant="outlined"
          size="small"
          color="warning"
          type="password"
          onChange={(e) => setCurrentPass(e.target.value)}
          value={currentPass}
          sx={{ margin: "0.7em 0" }}
        />
        <TextField
          label="New Password"
          autoComplete="off"
          variant="outlined"
          size="small"
          color="warning"
          type="password"
          onChange={(e) => setNewPass(e.target.value)}
          value={newPass}
          sx={{ marginBottom: "0.7em" }}
        />
        <TextField
          label="xx not working yet xx"
          autoComplete="off"
          variant="outlined"
          size="small"
          color="warning"
          type="password"
          onChange={(e) => setNewPassAgain(e.target.value)}
          value={newPassAgain}
          sx={{ marginBottom: "0.7em" }}
        />
        <Button type="submit" variant="outlined" color="primary">
          Change Password
        </Button>
      </form>
    </Card>
  );
};

export default ChangePassword;
