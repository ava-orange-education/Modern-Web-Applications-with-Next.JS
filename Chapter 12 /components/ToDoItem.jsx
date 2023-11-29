"use client";

import React from "react";
import styles from "./TodoItem.module.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = ({ item, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(item);
  };

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <ListItem className={styles.item}>
      <ListItemButton onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            checked={item.is_completed}
            tabIndex={-1}
            className={styles.checkbox}
          />
        </ListItemIcon>
        <ListItemText primary={item.name} />
      </ListItemButton>
      <ListItemIcon onClick={handleDelete}>
        <DeleteIcon className={styles.delete} />
      </ListItemIcon>
    </ListItem>
  );
};

export default ToDoItem;
