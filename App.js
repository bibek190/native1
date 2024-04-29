import { useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [myGoal, setMyGoal] = useState("");
  const [goalLists, setGoalLists] = useState([]);

  const changingGoal = (changeInput) => {
    setMyGoal(changeInput);
  };

  const onAdding = () => {
    setGoalLists((prev) => [...prev, myGoal]);
  };

  return (
    <View style={styles.container}>
      <Text>Hello, Welcome to this App</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write Your Goals"
        value={myGoal}
        onChangeText={changingGoal}
      />
      <Button title="Submit" color="green" onPress={onAdding} />
      <StatusBar style="auto" />
      <View style={styles.goalLists}>
        <FlatList
          data={goalLists}
          renderItem={(itemData) => {
            return <Text>{itemData.item}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 200,
  },
  textInput: {
    padding: 16,
    margin: 10,
    minWidth: 200,
    backgroundColor: "#fff",
  },
  goalLists: {
    marginTop: 200,
  },
});
