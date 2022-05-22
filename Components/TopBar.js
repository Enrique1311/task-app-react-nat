import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";
import MyButton from "./MyButton";
import { colors } from "../GlobalStyles/Colors";
import { Ionicons } from "@expo/vector-icons";

const TopBar = ({ handleAdd }) => {
  const [input, setInput] = useState("");

  const handleAddAux = () => {
    if (input !== "") {
      handleAdd(input);
      setInput("");
    }
  };

  return (
    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="Agregar tarea..."
        onChangeText={setInput}
        value={input}
      />
      <View>
        <MyButton onPress={() => handleAddAux()}>
          <Ionicons name="add" size={24} color={colors.white} />
        </MyButton>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    width: "100%",
    marginVertical: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.blue,
    backgroundColor: colors.light,
  },

  input: {
    width: "80%",
    padding: 10,
    fontSize: 20,
    color: colors.primary,
  },
});
