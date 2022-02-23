import React, { useState } from "react";
import Card from "../layout/Card";
import Signup from "./Signup";
import styles from "./Welcome.module.css";
import { Chip, Typography } from "@mui/material";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../store/AuthContext";

const Welcome = () => {
  const [loginIsVisible, setLoginIsVisible] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const toggleLoginHandler = () => {
    setLoginIsVisible((prevState) => !prevState);
  };
  const continueWithoutHandler = () => {
    navigate("options");
  };

  if (user) navigate("options");

  return (
    <>
      <Card>
        <h3 className={styles["welcome__title"]}>Darts App</h3>
      </Card>

      {!loginIsVisible && <Signup />}
      {loginIsVisible && <Login />}

      <Card>
        <div className={styles["welcome__continue-without-signup"]}>
          <Chip
            label={"or continue without signing up"}
            variant="outlined"
            color="warning"
            onClick={continueWithoutHandler}
            sx={{ margin: "1em" }}
          />
          <Typography fontSize="small" sx={{ margin: "1em", marginTop: 0 }}>
            Some features will be restricted
          </Typography>
        </div>
      </Card>

      <Card>
        <div className={styles["welcome__login-switch"]}>
          <Typography fontSize="small">
            {loginIsVisible ? "Don't" : "Already"} have an account?
          </Typography>
          <Chip
            label={loginIsVisible ? "switch to Signup" : "switch to Login"}
            variant="outlined"
            color="primary"
            onClick={toggleLoginHandler}
            sx={{ margin: "1em" }}
          />
        </div>
      </Card>
    </>
  );
};

export default Welcome;
