import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/Globals';

import NoteIcon from '../../../icons/NoteIcon'
import CircleIcon from '../../../icons/CircleIcon'

export default function TodoItem({ text, pressHandler, containerStyle, textStyle }) {
    return (
      <View style={[globalStyles.todoItem, containerStyle]}>
        <View style={globalStyles.todoItemLeft}>
          <NoteIcon color={globalStyles.todoItem.borderColor || containerStyle.borderColor}/>
          <Text style={[globalStyles.todoText, textStyle]}>{text}</Text>
        </View>
        <TouchableOpacity onPress={pressHandler}>
          <CircleIcon />
        </TouchableOpacity>
      </View>
    )
  }