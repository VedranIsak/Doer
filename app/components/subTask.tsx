import SubTaskModel from "@/app/models/SubTask";
import { useContext, useState } from "react";
import { DimensionValue, StyleSheet, View } from "react-native";
import { UserContext } from "../context/UserContext";
import Checkbox from "./checkbox";
import Paragraph from "./paragraph";

interface SubTaskProps {
  task: SubTaskModel;
  width?: DimensionValue;
  marginTop?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  showCheck: boolean;
}

const SubTask = ({
  task,
  width,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  showCheck,
}: SubTaskProps) => {
  const { user } = useContext(UserContext);
  const [subTask, setSubTask] = useState<SubTaskModel>(task);

  const handleCheck = (checked: boolean) => {
    setSubTask((prev) => prev.cloneWith({isCompleted: checked}));
  };
  const styles = StyleSheet.create({
    container: {
      borderRadius: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: width ?? "auto",
      marginTop: marginTop ?? 0,
      marginLeft: marginLeft ?? 0,
      marginRight: marginRight ?? 0,
      marginBottom: marginBottom ?? 0,
      overflow: "hidden",
      padding: 15,
      backgroundColor: "rgba(255, 255, 255, .3)",
      boxShadow: ".25px .25px 4px gray",
    }
  });
  return (
    <View style={styles.container}>
      <Paragraph color={user.settings.textColor as string} textAlign="center">
        {task.title}
      </Paragraph>
      {showCheck === false ? (
        <></>
      ) : (
        <Checkbox
        marginTop={2.5}
        width={22.5}
        height={22.5}
        borderRadius={7.5}
        borderWidth={3}
          value={subTask.isCompleted}
          handleCheck={handleCheck}
        />
      )}
    </View>
  );
};

export default SubTask;
