"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./page.module.css";
import TodoItem from "@/components/ToDoItem";
import List from "@mui/material/List";
import supabase from "@/utils/SupabaseClient";

export default function Crud() {
  const [newItem, setNewItem] = useState(null);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from("items").select("*");
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggle = async (item) => {
    const { data, error } = await supabase
      .from("items")
      .update({ is_completed: !item.is_completed })
      .eq("id", item.id);
    if (!error) {
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    const { data, error } = await supabase.from("items").delete().eq("id", id);
    if (!error) {
      fetchData();
    }
  };

  const addItem = async () => {
    const { data, error } = await supabase
      .from("items")
      .insert([{ is_completed: false, name: newItem, id: uuidv4() }])
      .single();
    if (!error) {
      fetchData();
    }
  };

  return (
    <div className={styles.main}>
      <h2>To-Do items</h2>
      <div className={styles.container}>
        <input
          className={styles.input}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className={styles.button} onClick={addItem}>
          Add to list!
        </button>
      </div>
      <List>
        {items.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </List>
    </div>
  );
}
