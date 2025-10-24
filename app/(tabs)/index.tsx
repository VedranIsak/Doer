import Container from "@/app/components/container";
import Paragraph from "@/app/components/paragraph";
import ScreenContainer from "@/app/components/screenContainer";
import Task from "@/app/components/task";
import TaskModel from "@/app/models/Task";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import importedTasks from "../data/mockData";
import formatDate from "../helpers/formatDate";

const HomeScreen = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const todayDate = formatDate(new Date());
  const [allTasks, setAllTasks] = useState<TaskModel[]>(importedTasks);
  const [todayTasks, setTodayTasks] = useState<TaskModel[]>(
    (importedTasks ?? []).filter((task) => task.dueDate === todayDate)
  );
  const completedTasks = todayTasks.filter((task) => task.isCompleted);
  const notCompletedTasks = todayTasks.filter((task) => !task.isCompleted);
  const unfinishedTasks = allTasks.filter((task) => task.hasPassed());

  return (
    <ScreenContainer title="Today's tasks" img="index">
      {notCompletedTasks.length === 0 ? (
        <Paragraph
          marginBottom={10}
          width={"90%"}
          color={user.settings.textColor as string}
          fontSize={22}
          textAlign="center"
        >
          Nicely done! You've completed everything for today!
        </Paragraph>
      ) : (
        <Container padding={10}>
          <Paragraph
            marginBottom={10}
            width={"90%"}
            color={user.settings.textColor as string}
            fontSize={22}
            textAlign="center"
          >
            {`Todays tasks (${formatDate(new Date())})`}
          </Paragraph>
          {notCompletedTasks.map((task) => (
            <Task taskData={task} tasks={todayTasks} setTasks={setTodayTasks} />
          ))}
        </Container>
      )}
      {completedTasks.length > 0 ? (
        <Container padding={10}>
          <Paragraph
            marginBottom={10}
            marginTop={5}
            width={"90%"}
            color={user.settings.textColor as string}
            fontSize={22}
            textAlign="center"
          >
            Today's completed tasks:
          </Paragraph>
          {completedTasks.map((task) => (
            <Task taskData={task} tasks={todayTasks} setTasks={setTodayTasks} />
          ))}
        </Container>
      ) : (
        <></>
      )}
      {unfinishedTasks.length > 0 && !user.settings.autoRemoveOldTasks ? (
        <Container padding={10}>
          <Paragraph
            marginBottom={10}
            marginTop={5}
            width={"90%"}
            color={user.settings.textColor as string}
            fontSize={22}
            textAlign="center"
          >
            Expired tasks
          </Paragraph>
          {unfinishedTasks.map((task) => (
            <Task
              taskData={task}
              tasks={unfinishedTasks}
              setTasks={setAllTasks}
            />
          ))}
        </Container>
      ) : (
        <></>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
