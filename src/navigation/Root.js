import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import AllTodos from '../screens/AllTodos';

const Stack = createNativeStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "Overview"}} />
        <Stack.Screen name="Todos" component={AllTodos} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})