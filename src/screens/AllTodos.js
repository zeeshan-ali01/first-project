import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

const AllTodos = ({route}) => {
  const {itemId, otherParams} = route.params;
  const todos = useSelector(state => state.todos.todos);
  console.log(todos)
  return (
    <View>
      <Text>All Todos</Text>
      {/* <View>
        {todos.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </View> */}
      <Text>Item Id = {itemId}</Text>
      <Text>Other Params = {otherParams}</Text>
    </View>
  );
};

export default AllTodos;
