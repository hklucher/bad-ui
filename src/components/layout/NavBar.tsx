import React from "react";
import { Typography, List } from "@material-ui/core"

import ListItemLink from "./ListItemLInk"

import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__header">
        <Typography variant="h6">
          Components
        </Typography>
      </div>

      <List>
        <ListItemLink
          to="/shuffle_phone"
          label="Shuffle Phone"
        />
      </List>
    </nav>
  )
}

export default NavBar;
