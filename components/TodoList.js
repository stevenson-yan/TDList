import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Globals';

import Tabs from './Tabs';
import NoteIcon from '../icons/NoteIcon';
import CircleIcon from '../icons/CircleIcon';
import PlusIcon from '../icons/PlusIcon';

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

function TodoItem({ text, pressHandler, containerStyle, textStyle }) {
  return (
    <View style={[globalStyles.todoItem, containerStyle]}>
      <View style={globalStyles.todoItemLeft}>
        <NoteIcon color={globalStyles.todoItem.borderColor || containerStyle.borderColor}/>
        <Text style={[globalStyles.todoText, textStyle]}>{text}</Text>
      </View>
      <TouchableOpacity activeOpacity={1} onPress={pressHandler}>
        <CircleIcon />
      </TouchableOpacity>
    </View>
  )
}

function NewTodoItem({ text, pressHandler, containerStyle, textStyle }) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={pressHandler}>
      <View style={[globalStyles.newTodoItem, containerStyle]}>
        <View style={globalStyles.todoItemLeft}>
          <PlusIcon color={globalStyles.newTodoItem.borderColor || containerStyle.borderColor} />
          <Text style={[globalStyles.newTodoText, textStyle]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoList: {
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
  newTodoText: {
    color: '#989898'
  }
})