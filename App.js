import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}{props.age}!</Text>
    </View>
  );
}

const Cafe = () => {
  return (
    <View>
      <Cat name = "Maru" age= "1" />
      <Cat name = "Jellylorum" age = "2"/>
      <Cat name = "Spot" age="3"/>
    </View>
  );
}

export default Cafe;