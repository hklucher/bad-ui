import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";

interface Props {
  to: string
  label: string
}

function ListItemLink({ to, label }: Props) {
  return (
    <li>
      <ListItem button component={props => <Link to={to} {...props} />}>
        {label}
      </ListItem>
    </li>
  )
}

export default ListItemLink
