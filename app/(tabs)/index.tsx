import ScreenContainer from "@/app/screenContainer";
import Paragraph from "@/components/paragraph";
import Task from "@/components/task";
import importedTasks from "@/data/mockData";
import TaskModel from "@/models/Task";
import { useState } from "react";

const HomeScreen = () => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [tasks, setTasks] = useState<TaskModel[]>(
    (importedTasks ?? []).filter((task) => task.dueDate === todayDate)
  );
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);
  const passedTasks = tasks.filter((task) => task.hasPassed());
  return (
    <ScreenContainer title="Tasks!" img="index">
      {notCompletedTasks.length === 0 ? (
        <Paragraph marginBottom={20} marginTop={20} color="white" fontSize={22}>
          Done for today!
        </Paragraph>
      ) : (
        <>
          <Paragraph
            marginBottom={20}
            marginTop={20}
            color="white"
            fontSize={22}
          >
            Todays tasks
          </Paragraph>
          {notCompletedTasks.map((task) => (
            <Task task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </>
      )}
      {completedTasks.length > 0 ? (
        <>
          <Paragraph
            marginBottom={20}
            marginTop={20}
            color="white"
            fontSize={22}
          >
            Done tasks
          </Paragraph>
          {completedTasks.map((task) => (
            <Task task={task} tasks={tasks} setTasks={setTasks} />
          ))}
        </>
      ) : (
        <></>
      )}
      {passedTasks.length > 0 ? (
        <>
          <Paragraph
            marginBottom={20}
            marginTop={20}
            color="white"
            fontSize={22}
          >
            Unfinished tasks!
          </Paragraph>
          {passedTasks.map((task) => {
            <Task task={task} tasks={tasks} setTasks={setTasks} />;
          })}
        </>
      ) : (
        <></>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
