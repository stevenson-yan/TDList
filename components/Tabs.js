import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function Tabs() {

  const tabs = [
    { name: 'all', key: 1},
    { name: 'work', key: 2},
    { name: 'chores', key: 3},
    // { name: "BORF", key: 4}
  ];
  const [selectedTab, setSelectedTab] = useState(1);
  let counter = 0;

  const pressHandler = (key) => {
    setSelectedTab(key)
    // if (key == 4) {
    //   counter += 1;
    //   if (counter == 69) {
    //     console.log("8=================D");
    //   }
    //   else {
    //     console.log("Linda BORF BORFED " + counter + " times!");
    //   }
    // }
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

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabButton: {
    marginVertical: 16,
    marginHorizontal: 8,
    height: 32,
    width: 75,
    borderRadius: 12,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center"
  },
  tabButtonSelected: {
    borderWidth: 2,
    borderColor: '#989898',
    overflow: 'visible',
    backgroundColor: '#b3b3b3'
  }
})