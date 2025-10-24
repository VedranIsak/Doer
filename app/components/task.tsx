import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "./checkbox";
import { useCallback, useContext, useState } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { UserContext } from "../context/UserContext";
import SubTaskModel from "../models/SubTask";
import TaskModel from "../models/Task";
import Paragraph from "./paragraph";
import SubTask from "./subTask";

interface TaskProps {
  taskData: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const Task = ({ taskData, tasks, setTasks }: TaskProps) => {
  const { width } = Dimensions.get("screen");
  const { user } = useContext(UserContext);
  const [task, setTask] = useState<TaskModel>(taskData);
  const [remove, setRemove] = useState<boolean>(false);

  const handleTaskCheck = (checked: boolean) => {
    task.isCompleted = checked;
    task.subTasks.forEach((subTask) => (subTask.isCompleted = checked));

    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const renderSubTask: ListRenderItem<SubTaskModel> = useCallback(
    ({ item }) => (
      <SubTask
        showCheck={true}
        task={item}
        width={"44%"}
        marginLeft={"4%"}
        marginBottom={"1%"}
      />
    ),
    []
  );

  const subTaskKeyExtractor = useCallback(
    (st: SubTaskModel) => st.id.toString(),
    []
  );

  const styles = StyleSheet.create({
    taskContainer: {
      borderRadius: 25,
      overflow: "hidden",
      marginTop: 0.5,
      marginBottom: 7.5,
      width: width - 50,
      backgroundColor: "rgba(255, 255, 255, .3)",
      borderWidth: 4,
      borderColor: "rgba(255, 255, 255, .5)",
      boxShadow: ".25px .25px 4px gray",
    },
    taskTopContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginLeft: "5%",
      marginTop: 10,
    },
    symbolContainer: {
      flexDirection: "row",
    },
    subTaskList: {
      marginBottom: 10,
      width: "100%",
    },
  });

  return (
    <Pressable key={task.id.toString()}>
      <View style={styles.taskContainer}>
        <View style={styles.taskTopContainer}>
          <Paragraph color={user.settings.textColor as string} fontSize={18}>
            {task.title}
          </Paragraph>
          <View style={styles.symbolContainer}>
            <Ionicons
              name="flag-sharp"
              color={
                taskData.priorityLevel === 1
                  ? "red"
                  : taskData.priorityLevel === 2
                  ? "yellow"
                  : "green"
              }
              size={26}
            />
            <Pressable
              onPress={() => {
                setRemove(true);
                setTimeout(() => {
                  setTasks(tasks.filter((t) => t.id !== task.id));
                }, 500);
              }}
            >
              <Ionicons
                style={{ marginLeft: 10 }}
                name="trash-sharp"
                color={remove ? "red" : "white"}
                size={26}
              />
            </Pressable>
            <Checkbox
              borderWidth={3}
              borderRadius={10}
              height={30}
              width={30}
              marginLeft={10}
              value={task.isCompleted}
              handleCheck={handleTaskCheck}
            />
          </View>
        </View>
        <Paragraph
          marginLeft={"5%"}
          marginBottom={2}
          color={user.settings.textColor as string}
        >
          {task.dueDate}
        </Paragraph>
        <Paragraph
          marginLeft={"5%"}
          marginBottom={10}
          color={user.settings.textColor as string}
        >
          {task.description}
        </Paragraph>
        {task.subTasks.length > 0 ? (
          <FlatList
            style={styles.subTaskList}
            data={task.subTasks}
            renderItem={renderSubTask}
            keyExtractor={subTaskKeyExtractor}
            numColumns={2}
          />
        ) : (
          <></>
        )}
      </View>
    </Pressable>
  );
};

export default Task;
