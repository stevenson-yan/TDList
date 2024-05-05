import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import styles from './Tabs.style'
export default function Tabs() {

  const tabs = [
    { name: 'all', key: 1},
    { name: 'work', key: 2},
    { name: 'chores', key: 3},
  ];

  const [selectedTab, setSelectedTab] = useState(1);
  let counter = 0;

  const pressHandler = (key) => {
    setSelectedTab(key)
  }

  return (
    <View style={styles.tabContainer}>
      { tabs.map((item) => {
        return (
          <TouchableWithoutFeedback key={item.key} onPress={() => pressHandler(item.key)}>
            <View style={[styles.tabButton, item.key === selectedTab && styles.tabButtonSelected] }>
              <Text>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}