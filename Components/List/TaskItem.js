import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../GlobalStyles/Colors";

const TaskItem = ({ task, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => onPress(task)}>
        <Text
          style={[
            styles.text,
            {
              textDecorationLine:
                task.completed === true ? "line-through" : "none",
              fontStyle: task.completed === true ? "italic" : null,
              opacity: task.completed === true ? 0.3 : 1,
            },
          ]}
        >
          {task.task}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    marginBottom: 5,
    borderRadius: 7,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.blue,
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
    width: 280,
  },
});
