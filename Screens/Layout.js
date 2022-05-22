import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import TopBar from "../Components/TopBar";
import MyModal from "../Components/MyModal";
import List from "../Components/List";
import { colors } from "../GlobalStyles/Colors";

const Layout = () => {
  const [taskList, setTaskList] = useState([]);

  const [taskSelected, setTaskSelected] = useState({});

  const [modalVisibility, setModalVisibility] = useState(false);

  const handleAdd = (input) => {
    setTaskList([
      ...taskList,
      { id: Date.now(), task: input, completed: false },
    ]);
  };

  const handleModal = (taskSelected) => {
    setModalVisibility(true);
    setTaskSelected(taskSelected);
  };

  const handleCompleted = () => {
    const taskCompleted = taskList.find((task) => task.id === taskSelected.id);
    taskCompleted.completed = true;
    setTaskList([...taskList]);
    setModalVisibility(false);
  };

  const handleDelete = () => {
    const filterTasks = taskList.filter((task) => task.id !== taskSelected.id);
    setTaskList(filterTasks);
    setModalVisibility(false);
  };

  const handleEdit = (text) => {
    const taskToEdit = taskList.find((task) => task.id === taskSelected.id);
    taskToEdit.task = text;
    setTaskList([...taskList]);

    //Condicional para que no guarde un string vacío cuando se edita.
    if (text === "") {
      const filterTasks = taskList.filter(
        (task) => task.id !== taskSelected.id
      );
      setTaskList(filterTasks);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ORGANIZADOR DE TAREAS</Text>
      <TopBar handleAdd={handleAdd} />
      <List handleModal={handleModal} taskList={taskList} />
      <MyModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        taskSelected={taskSelected}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
      />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
});
