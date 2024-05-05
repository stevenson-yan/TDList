import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
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