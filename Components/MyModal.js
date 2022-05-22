import { Modal, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../GlobalStyles/Colors";
import MyButton from "../Components/MyButton";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MyModal = ({
  modalVisibility,
  setModalVisibility,
  handleEdit,
  taskSelected,
  handleDelete,
  handleCompleted,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => {
        setModalVisibility(!modalVisibility);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleEdit}
              value={taskSelected.task}
            />
            <View>
              <MyButton onPress={() => setModalVisibility(false)}>
                <FontAwesome5 name="edit" size={20} color={colors.white} />
              </MyButton>
            </View>
          </View>
          <View style={styles.modalButtonsContainer}>
            <MyButton onPress={() => setModalVisibility(false)}>
              <Ionicons name="close" size={24} color={colors.white} />
            </MyButton>
            <MyButton onPress={handleCompleted}>
              <Ionicons name="checkmark-sharp" size={24} color={colors.white} />
            </MyButton>
            <MyButton onPress={handleDelete}>
              <MaterialIcons
                name="delete-outline"
                size={26}
                color={colors.white}
              />
            </MyButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.secondaryOpacity,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.white,
    height: 200,
    width: "95%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.blue,
  },
  editContainer: {
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
    marginRight: 10,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});
