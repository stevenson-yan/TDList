import React, { useState } from 'react';
import { FlatList, } from 'react-native';

import Tabs from './Tabs/Tabs';
import TodoItem from './TodoItem/TodoItem';
import NewTodoItem from './NewTodoItem/NewTodoItem';
import styles from './TodoList.style'

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    { name: 'Study for Quiz 1', key: 1 },
    { name: 'Study for Quiz 2', key: 2 },
  ]);

  const circlePressHandler = (key) => {
    setTodoList((prevState) => {
      return prevState.filter(item => item.key != key)
    })
  }

  const newTodoPressHandler = () => {
    const newTodo = { name: 'New Todo', key: Math.random().toString() };
    setTodoList([...todoList, newTodo]);
  }

  return (
    <FlatList
      style={styles.todoList}
      data={todoList}
      ListHeaderComponent={<Tabs/>}
      ListFooterComponent={
          <NewTodoItem text={'New Todo...'} textStyle={styles.newTodoText} pressHandler={() => newTodoPressHandler()}/>
    }
      renderItem={({item}) => {
        return (
          <TodoItem text={item.name} pressHandler={() => circlePressHandler(item.key)}/>
        )
      }}
    />
  )
};