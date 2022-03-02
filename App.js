import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(false);
  //useState( 여기 ) 여기에는 문자열, 숫자, 부울, 배열, 개체 등 모든 종류의 데이터를 추적하는 데 사용할 수 있습니다 . 예를 들어 고양이를 쓰다듬어준 횟수를 추적할 수 있습니다 const [timesPetted, setTimesPetted] = useState(0)!
  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>
        I am {props.name}, and I am {isHungry ? "full" : "hungry" }!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(true);
        }}
        disabled={isHungry}
        title={isHungry ?  "Thank you!" : "Pour me some milk, please!"}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </>
  );
}

export default Cafe;