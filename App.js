import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import PageHeader from './components/PageHeader/PageHeader.js';
import TodoList from './components/TodoList/TodoList.js'

export default function App() {
  return (
      <View style={styles.container}>
        <PageHeader/>
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