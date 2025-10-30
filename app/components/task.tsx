import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "./checkbox";
import { useCallback, useContext, useRef, useState } from "react"; // ← useRef
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  Pressable,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import { UserContext } from "../context/UserContext";
import SubTaskModel from "../models/SubTask";
import TaskModel from "../models/Task";
import Paragraph from "./paragraph";
import SubTask from "./subTask";
import User from "../models/User";
import { saveUser } from "../helpers/dataManager";

interface TaskProps {
  taskData: TaskModel;
  tasks: TaskModel[];
  setTasks: React.Dispatch<React.SetStateAction<TaskModel[]>>;
}

const Task = ({ taskData, tasks, setTasks }: TaskProps) => {
  const { width } = Dimensions.get("screen");
  const { user, setUser } = useContext(UserContext);
  const [task, setTask] = useState<TaskModel>(taskData);
  const [remove, setRemove] = useState<boolean>(false);

  const opacity = useRef(new Animated.Value(1)).current;

  const renderSubTask: ListRenderItem<SubTaskModel> = useCallback(
    ({ item }) => (
      <SubTask
        showCheck={true}
        task={item}
        width={"44%"}
        marginLeft={"4%"}
        marginBottom={"1%"}
        marginTop={"1%"}
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
      boxShadow: ".25px .25px 4px gray",
    },
    taskTopContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "85%",
      marginLeft: "7.5%",
      marginTop: 15,
    },
    symbolContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    subTaskList: {
      marginBottom: 10,
      width: "100%",
    },
  });

  const handleTaskCheck = (checked: boolean) => {
    const newTask = new TaskModel(
      task.dueDate,
      task.time,
      task.title,
      task.description,
      task.isCompleted,
      task.priorityLevel,
      task.subTasks
    );
    newTask.isCompleted = checked;
    newTask.subTasks.forEach((subTask) => (subTask.isCompleted = checked));
    setTask(newTask);

    Animated.timing(opacity, {
      toValue: 0,
      delay: 500,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setTasks(tasks.map((t) => (t.id === task.id ? newTask : t)));
      setUser((prev) => {
        const updated = new User(
          tasks.map((t) => (t.id === task.id ? newTask : t)),
          prev.settings
        );
        saveUser(updated);
        return updated;
      });
    });
  };

  const handleRemovePress = () => {
    setRemove(true);
    Animated.timing(opacity, {
      toValue: 0,
      delay: 500,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setTasks((prev) => {
        const newTasks = prev.filter((t) => t.id !== task.id);
        setUser((uPrev) => {
          const updatedUser = new User(newTasks, uPrev.settings);
          saveUser(updatedUser);
          return updatedUser;
        });
        return newTasks;
      });
    });
  };

  return (
    <Animated.View style={[styles.taskContainer, { opacity }]}>
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
          <Pressable onPress={handleRemovePress}>
            <Ionicons
              style={{ marginLeft: 10 }}
              name="trash-sharp"
              color={remove ? "red" : (user.settings.textColor as string)}
              size={26}
            />
          </Pressable>
          <Checkbox
            borderWidth={2}
            height={30}
            width={30}
            marginLeft={10}
            value={task.isCompleted}
            handleCheck={handleTaskCheck}
          />
        </View>
      </View>

      <Paragraph
        marginLeft={"7.5%"}
        marginBottom={2}
        color={user.settings.textColor as string}
      >
        {task.dueDate}
      </Paragraph>
      <Paragraph
        marginLeft={"7.5%"}
        marginBottom={15}
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
      ) : null}
    </Animated.View>
  );
};

export default Task;
