import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodos } from '../todosSlice';



export default function Home({navigation}) {
    const [todoInput, setTodoInput] = useState('');    
    
    const dispatch = useDispatch();
    return (
        <View>
            <TextInput placeholder="Write Todo" value={todoInput} onChangeText={(changedText) => setTodoInput(changedText)}/>
            <Button title="Add Todo" onPress={() => dispatch(addTodos(Math.random()*1000, todoInput))} />
            <Button title="All Todos" onPress={() => navigation.navigate('Todos', {itemId: 21, otherParams: 'Anything You Want Here'})}/>
        </View>
    )
}
const styles = StyleSheet.create({})