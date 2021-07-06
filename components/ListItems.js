import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Text } from "react-native";

import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
  SwipedTodoText,
  colors
} from '../styles/appStyles';

import { Entypo } from "@expo/vector-icons";


const ListItems = ({todos, setTodos}) => {
  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = todos.filter(todo => todo.key !== rowKey);
    setTodos(newTodos);
  }

  if (!todos.length) {
    return <TodoText>You have no todos for today.</TodoText>
  }

  return (
    <SwipeListView
      data={todos}
      renderItem={(data) => {
        const RowText = data.item.key === swipedRow ? SwipedTodoText : TodoText;
        return (
          <ListView
            underlayColor={colors.primary}
            onPress={() => {

            }}
          >
            <>
              <RowText>{data.item.title}</RowText>
              <TodoDate>{data.item.date}</TodoDate>
            </>
          </ListView>
        )
      }}
      renderHiddenItem={(data, rowMap) => (
        <ListViewHidden>
          <HiddenButton
            onPress={() => handleDeleteTodo(rowMap, data.item.key)}
          >
            <Entypo name="trash" size={25} color={colors.secondary} />
          </HiddenButton>
        </ListViewHidden>
      )}
      leftOpenValue={80}
      previewRowKey="1"
      previewOpenValue={80}
      previewOpenDelay={3000}
      disableLeftSwipe
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingBottom: 30,
        marginBottom: 40
      }}
      onRowOpen={(rowKey) => {
        setSwipedRow(rowKey);
      }}
      onRowClose={() => {
        setSwipedRow(null);
      }}
    />
  )
};

export default ListItems;