import ScreenContainer from "@/app/screenContainer";
import Paragraph from "@/components/paragraph";
import Task from "@/components/task";
import importedTasks from "@/data/mockData";
import formatDate from "@/helpers/formatDate";
import TaskModel from "@/models/Task";
import { useState } from "react";

const HomeScreen = () => {
  const todayDate = formatDate(new Date());
  const [allTasks, setAllTasks] = useState<TaskModel[]>(importedTasks)
  const [todayTasks, setTodayTasks] = useState<TaskModel[]>( 
    (importedTasks ?? []).filter((task) => task.dueDate === todayDate)
  );
  const completedTasks = todayTasks.filter((task) => task.isCompleted);
  const notCompletedTasks = todayTasks.filter((task) => !task.isCompleted);
  const unfinishedTasks = allTasks.filter((task) =>  task.hasPassed());
  console.log(unfinishedTasks.length);
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
            {`Todays tasks (${formatDate(new Date())})`}
          </Paragraph>
          {notCompletedTasks.map((task) => (
            <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
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
            <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
          ))}
        </>
      ) : (
        <></>
      )}
      {unfinishedTasks.length > 0 ? (
        <>
          <Paragraph
            marginBottom={20}
            marginTop={20}
            color="white"
            fontSize={22}
          >
            Unfinished tasks!
          </Paragraph>
          {unfinishedTasks.map((task) => (
            <Task task={task} tasks={unfinishedTasks} setTasks={setAllTasks} />
          ))}
        </>
      ) : (
        <></>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
