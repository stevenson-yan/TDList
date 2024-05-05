import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './Header.style'

export default function Header() {
  return (
    <View style={styles.header}>
      <StatusBar style="auto" />
    </View>
  )
}