import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Stevenson', key: '1'},
    {name: 'Linda', key: '2'},
    {name: 'Tony', key: '3'},
    {name: 'Olivia', key: '4'},
    {name: 'Eason', key: '5'},
    {name: 'Nina', key: '6'},
    {name: 'Peter', key: '7'},
  ])

  return (
    <View style={styles.container}>

      <ScrollView>
        {people.map(entry => (
            <View key={entry.key}>
              <Text style={styles.entry}>{entry.name}</Text>
            </View>
          ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  entry: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});