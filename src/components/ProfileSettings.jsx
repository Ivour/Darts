import { Button } from "@mui/material";
import React from "react";
import Card from "./Card";

const ProfileSettings = () => {
  return (
    <>
      <Card>change password?</Card>
      <Card>
        <Button variant="outlined" size="small">
          Logout
        </Button>
      </Card>
    </>
  );
};

export default ProfileSettings;
