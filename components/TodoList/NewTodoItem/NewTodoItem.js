import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../../styles/Globals';

import PlusIcon from '../../../icons/PlusIcon';

export default function NewTodoItem({ text, pressHandler, containerStyle, textStyle }) {
    return (
      <TouchableOpacity onPress={pressHandler}>
        <View style={[globalStyles.newTodoItem, containerStyle]}>
          <View style={globalStyles.todoItemLeft}>
            <PlusIcon color={globalStyles.newTodoItem.borderColor || containerStyle.borderColor} />
            <Text style={[globalStyles.newTodoText, textStyle]}>{text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }