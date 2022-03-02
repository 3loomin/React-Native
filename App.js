import React from "react";
import { Text, View, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return(
    <ScrollView>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>어쩌구가 저쩌구</Text>
      <View>
        <Text>저쩌구가 어쩌구 했대요! </Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style = {{ width: 200, height: 200}}
          />
      </View>
      <TextInput
        style={{
          height:40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue = "야호야호 이것이 박스에오에오"
        />
    </ScrollView>
  );
}
export default App;