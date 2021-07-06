import React, { useState } from "react";
import { Text } from "react-native";

import Header from "./Header";
import ListItems from "./ListItems";
import InputModal from "./InputModal";

const Home = () => {

  const initialState = [
    {
      title: "Sell laptop",
      date: "Wed, Jun 30 2021 16:32:11 GMT",
      key: "1"
    },
    {
      title: "Buy new laptop",
      date: "Wed, Jun 30 2021 16:32:11 GMT",
      key: "2"
    },
    {
      title: "Create todo list",
      date: "Wed, Jun 30 2021 16:32:11 GMT",
      key: "3"
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClearTodos = () => {
    setTodos([]);
  }

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    console.log(newTodos);
    setTodos(newTodos);
    setModalVisible(false);
  }

  return (
    <>
      <Header handleClearTodos={handleClearTodos}/>
      <ListItems todos={todos} setTodos={setTodos} />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleAddTodo={handleAddTodo}
      />
    </>
  );
};

export default Home;