import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const MaterialNavbar: React.FC = () => {
  return (
    <AppBar position="static" style={{ width: "500px", marginBottom: "15px"}}>
      <Toolbar>
        <Typography variant="h6" component="div">
        ContactConnect
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>
            Home
          </Link>
          <Link to="/user-search" style={{ color: "white", textDecoration: "none" }}>
            Phonebook
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MaterialNavbar;
