import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setNumber(number + 5);
    setCount(count + 1);
  };

  const resetButton = () => {
    setNumber(0);
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text> {number}</Text>
      <Button onPress={onClickHandler} title="Add" />
      <Text>You have Clicked {count} times</Text>
      <Button onPress={resetButton} title="Reset" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
