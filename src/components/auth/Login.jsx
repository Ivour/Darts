import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import Card from "../layout/Card";
import styles from "./Signup.module.css";
import { Button, TextField } from "@mui/material";
import { useAuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { logIn, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/options");
  }, [user, navigate]);

  // TODO  je to tak správně???

  const submitHandler = async (e) => {
    e.preventDefault();
    setHasError(false);

    try {
      await logIn(email, pass);
    } catch (err) {
      setHasError(err.message);
    }
  };

  return (
    <Card>
      <form className={styles["sign-up"]} onSubmit={submitHandler}>
        <h3 className={styles["sign-up__title"]}>Log in </h3>
        {hasError && (
          <Alert
            variant="outlined"
            severity="error"
            sx={{ marginBottom: "1em", borderRadius: "0.6em", maxWidth: "90%" }}
          >
            {hasError}
          </Alert>
        )}

        <TextField
          label="Email"
          autoComplete="off"
          variant="outlined"
          size="small"
          color="warning"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          size="small"
          color="warning"
          sx={{ margin: "0.5em" }}
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />

        <Button
          type="submit"
          size="small"
          sx={{ margin: "1em" }}
          variant="outlined"
        >
          Log in
        </Button>
      </form>
    </Card>
  );
};

export default Login;
