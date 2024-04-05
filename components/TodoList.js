import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import Tabs from './Tabs';
import NoteIcon from '../icons/NoteIcon';
import CircleIcon from '../icons/CircleIcon';
import { globalStyles } from '../styles/Globals';

// import NoteIcon from '../icons/NoteIcon';

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
        <TouchableOpacity activeOpacity={1} onPress={() => newTodoPressHandler()}>
          <TodoItem text={'New'} boxStyle={newTodoStyles.todoItem} textStyle={newTodoStyles.todoText} iconColour={"#d9d9d9"}/>
        </TouchableOpacity>
    }
      renderItem={({item}) => {
        return (
          <TodoItem text={item.name} showCircle={true} pressHandler={() => circlePressHandler(item.key)}/>
        )
      }}
    />
  )
};

function TodoItem({ text, pressHandler, showCircle, boxStyle, textStyle, iconColour }) {
  return (
    <View style={[globalStyles.todoItem, boxStyle]}>
      <View style={globalStyles.todoItemLeft}>
        <NoteIcon color={iconColour}/>
        <Text style={[globalStyles.todoText, textStyle]}>{text}</Text>
      </View>
      {showCircle && (
      <TouchableOpacity activeOpacity={1} onPress={pressHandler}>
        <CircleIcon />
      </TouchableOpacity>)}
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    marginHorizontal: 25,
    marginBottom: 25,
  },
})

const newTodoStyles = StyleSheet.create({
  todoItem: {
    height: 60,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d9d9d9',
    backgroundColor: '#fff',

    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    padding: 5,
  },
  todoItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    color: '#d9d9d9'
  },
  icon: {
    fill: '#d9d9d9'
  }
})