import React from 'react';
import { Text, View,  StyleSheet } from 'react-native';

const style = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return(
    <View style = {style.center}>
      <Text>Hello {props.name}!!!</Text>
    </View>
  );
}

const LotsGreetings = () => {
  return(
    <View style = {[style.center,{top:50}]}>
      <Greeting name = 'RExxar'/>
      <Greeting name = 'Jaina'/>
      <Greeting name = 'Valeera'/>
    </View>
  );
}

export default LotsGreetings;