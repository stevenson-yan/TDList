import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

import Tabs from '../Tabs/Tabs';
import TodoItem from '../TodoItem/TodoItem';
import NewTodoItem from '../NewTodoItem/NewTodoItem';
import styles from './TodoList.style'
import TodoModal from '../TodoModal/TodoModal';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    { name: 'Study for Quiz 1', key: 1 },
    { name: 'Study for Quiz 2', key: 2 },
  ]);
  const [openModal, setOpenModal] = useState(false)

  const circlePressHandler = (key) => {
    setTodoList((prevState) => {
      return prevState.filter(item => item.key != key)
    })
  }

  const newTodoPressHandler = () => {
    setOpenModal(true)
    // const newTodo = { name: 'New Todo', key: Math.random().toString() };
    // setTodoList([...todoList, newTodo]);
  }

  return (
    <View>
      <TodoModal openModal={openModal} setOpenModal={setOpenModal} todoList={todoList} setTodoList={setTodoList}/>
      <FlatList
        style={styles.todoList}
        data={todoList}
        ListHeaderComponent={<Tabs/>}
        ListFooterComponent={
            <NewTodoItem text={'New Todo...'} pressHandler={() => newTodoPressHandler()}/>
      }
        renderItem={({item}) => {
          return (
            <TodoItem text={item.name} pressHandler={() => circlePressHandler(item.key)}/>
          )
        }}
      />
    </View>
  )
};

const modalStyle = StyleSheet.create({
  modal: {
    backgroundColor: '#d9d9d9',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})