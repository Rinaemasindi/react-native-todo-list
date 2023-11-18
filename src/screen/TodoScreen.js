import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { React, useState } from 'react'
import { IconButton } from 'react-native-paper'

const TodoScreen = () => {

    const [todo,setTodo] = useState("");
    const [todoList, setTodoList] = useState([])

    renderTodos = ({ item, index }) => {
        return (
            <View style={styles.listItem}>
                <Text style={[styles.Text, { flex: 1, }]}>
                    {item.task}
                </Text>
                <IconButton icon='pencil' iconColor='#fff' />
                <IconButton icon='trash-can' iconColor='#fff' />

            </View>
        )
    }

    handleAddTodo = () =>{
        setTodoList([...todoList, {id:Date.now().toString(), task:todo}]);
        setTodo("");
    }

    return (
        <View style={styles.contaier}>
            <TextInput
                style={styles.TextInput}
                placeholder='Add todo'
                value={todo}  
                onChangeText={newText => setTodo(newText)}
            />

            <TouchableOpacity
                style={styles.Button}
                onPress={()=>handleAddTodo()}
            >
                <Text style={styles.Text}> Add </Text>
            </TouchableOpacity>

            <FlatList data={todoList} renderItem={renderTodos}>

            </FlatList>

        </View>
    )
}

export default TodoScreen

const styles = StyleSheet.create({
    contaier: {
        marginHorizontal: 15,
    },
    TextInput: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 6,
    },
    Text: {
        color: '#fff',
    },
    Button: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 6,
        marginBottom: 50,
        marginTop: 5,
    },
    listItem: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 6,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})