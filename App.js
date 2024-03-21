import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Stevenson', id: '1'},
    {name: 'Linda', id: '2'},
    {name: 'Tony', id: '3'},
    {name: 'Olivia', id: '4'},
    {name: 'Eason', id: '5'},
    {name: 'Nina', id: '6'},
    {name: 'Peter', id: '7'},
    {name: 'Retardo', id: '8'},
    {name: 'Goopta', id: '9'}
  ]);

  const pressHandler = id => {
    console.log('penis');
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.entry}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
        {people.map(entry => (
            <View key={entry.key}>
              <Text style={styles.entry}>{entry.name}</Text>
            </View>
          ))}
      </ScrollView> */}
      
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
    marginHorizontal: 10,
    marginTop: 24,
  }
});