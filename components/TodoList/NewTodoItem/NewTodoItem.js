import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import PlusIcon from '../../../icons/PlusIcon';
import styles from './NewTodoItem.style'

export default function NewTodoItem({ text, pressHandler }) {
    return (
      <TouchableOpacity onPress={pressHandler}>
        <View style={styles.newTodoItem}>
          <View style={styles.newTodoItemIcon}>
            <PlusIcon color={styles.newTodoItem.borderColor} />
            <Text style={styles.newTodoText}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }