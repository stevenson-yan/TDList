import React, { useState } from 'react';
import { Modal, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';

export default function TodoModal({ openModal, setOpenModal, todoList, setTodoList }) {
  const [taskName, onChangeName] = useState('');

  const addHandler = () => {
    const newTodo = { name: taskName, key: Math.random().toString() };
    setTodoList([...todoList, newTodo]);
    setOpenModal(false)
  }

  return (
      <View>
        <Modal visible={openModal}
          transparent={false}>
          <View style={{ height: 45, backgroundColor: '#b3b3b3' }}>
            <StatusBar></StatusBar>
          </View>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text style={styles.headerText}>New Task</Text>
            </View>
            <TextInput 
            placeholder='Name your new task'
            style={styles.input}
            onChangeText={onChangeName}>
            </TextInput>
            <TextInput 
            placeholder='Description'
            style={styles.input}>
            </TextInput>
            <TouchableOpacity onPress={() => addHandler()}>
              <View style={styles.button}>
                <Text style={styles.text}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
  )
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    height: 54,
    width: 340,
    borderRadius: 12,
    padding: 18,
    margin: 7,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 50,
    width: 200,
    padding: 14,
    margin: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
  }
})