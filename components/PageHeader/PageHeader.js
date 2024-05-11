import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './PageHeader.style'

export default function PageHeader() {
  return (
    <View style={styles.header}>
      <StatusBar style="auto" />
    </View>
  )
}