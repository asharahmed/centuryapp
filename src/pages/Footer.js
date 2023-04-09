import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main || "#FFFFFF",
    padding: theme.spacing(3),
    marginTop: "auto",
    width: "100%",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2023 Ashar Ahmed. All rights reserved. Made in Canada-USA.
      </Typography>
    </div>
  );
}

export default Footer;
