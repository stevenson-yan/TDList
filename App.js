import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header/Header.js';
import Tabs from './components/Tabs/Tabs.js';
import TodoList from './components/TodoList/TodoList.js';

export default function App() {
  return (
      <View style={styles.container}>
        <Header/>
        <TodoList/>
        {/* <Body/> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});