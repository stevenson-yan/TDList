import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import NoteIcon from '../icons/NoteIcon';
import CircleIcon from '../icons/CircleIcon';

// import NoteIcon from '../icons/NoteIcon';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    { name: 'Study for Quiz 1', key: 1 },
    { name: 'Study for Quiz 2', key: 2 },
    // { name: 'Study for Quiz 1', key: 3 },
    // { name: 'Study for Quiz 2', key: 4 },
    // { name: 'Study for Quiz 1', key: 5 },
    // { name: 'Study for Quiz 2', key: 6 },
    // { name: 'Study for Quiz 1', key: 7 },
    // { name: 'Study for Quiz 2', key: 8 },
    // { name: 'Study for Quiz 1', key: 9 },
    // { name: 'Study for Quiz 2', key: 10 },
    // { name: 'Study for Quiz 1', key: 11 },
    // { name: 'Study for Quiz 2', key: 12 },
  ]);
  const [contentHeight, setContentHeight] = useState(0)
  const [flatListHeight, setFlatListHeight] = useState(0)

  const scrollHandler = (contentWidth, contentHeight) => {
    setContentHeight(contentHeight)
  }

  const heightHandler = (event) => {
    console.log(event.nativeEvent)
    const { height } = event.nativeEvent.layout
    setFlatListHeight(height)
  }

  const pressHandler = (key) => {
    setTodoList((prevState) => {
      return prevState.filter(item => item.key != key)
    })
  }

  return (
    <FlatList
      style={styles.todoList}
      data={todoList}
      renderItem={({item}) => {
        return (
          <View style={styles.todoItem}>
            <View style={styles.todoItemLeft}>
              <NoteIcon/>
              <Text style={styles.todoText}>{item.name}</Text>
            </View>
            <TouchableOpacity activeOpacity={1} onPress={() => pressHandler(item.key)}>
                <CircleIcon style={styles.circleIcon}/>
            </TouchableOpacity>
          </View>
        )
      }}
      // onLayout={heightHandler}
      // onContentSizeChange={scrollHandler}
      // scrollEnabled={false}
    />
  )
};

const styles = StyleSheet.create({
  todoList: {
    marginHorizontal: 25,
    marginBottom: 25,
  },
  todoItem: {
    height: 60,
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#989898',
    backgroundColor: '#d9d9d9',

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
    margin: 5,
  },
})