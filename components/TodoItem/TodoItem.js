import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import NoteIcon from '../../icons/NoteIcon'
import CircleIcon from '../../icons/CircleIcon'
import styles from './TodoItem.style'

export default function TodoItem({ text, pressHandler }) {
    return (
      <View style={styles.todoItem}>
        <View style={styles.todoItemLeft}>
          <NoteIcon color={styles.todoItem.borderColor} style={styles.icon}/>
          <Text style={styles.todoText}>{text}</Text>
        </View>
        <TouchableOpacity onPress={pressHandler}>
          <CircleIcon style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }