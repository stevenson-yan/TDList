import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '../styles/Globals.js'

export default function Header() {
  return (
    <View style={globalStyles.header}>
      <StatusBar style="auto" />
    </View>
  )
}