import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    todoItem: {
        height: 60,
        marginBottom: 16,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#989898',
        backgroundColor: '#d9d9d9',
    
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        padding: 5,
    },
    todoItemLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    todoText: {
    margin: 5,
    },
  })
