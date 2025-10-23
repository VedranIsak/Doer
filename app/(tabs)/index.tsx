import Container from "@/app/components/container";
import Paragraph from "@/app/components/paragraph";
import Task from "@/app/components/task";
import TaskModel from "@/app/models/Task";
import ScreenContainer from "@/app/screenContainer";
import importedTasks from "../data/mockData";
import formatDate from "../helpers/formatDate";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

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
        <Container>
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
            <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
          ))}
        </Container>
      )}
      {completedTasks.length > 0 ? (
        <Container>
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
            <Task task={task} tasks={todayTasks} setTasks={setTodayTasks} />
          ))}
        </Container>
      ) : (
        <></>
      )}
      {unfinishedTasks.length > 0 ? (
        <Container>
          <Paragraph
            marginBottom={10}
            marginTop={5}
            width={"90%"}
            color={user.settings.textColor as string}
            fontSize={22}
            textAlign="center"
          >
            Old, unfinished tasks:
          </Paragraph>
          {unfinishedTasks.map((task) => (
            <Task task={task} tasks={unfinishedTasks} setTasks={setAllTasks} />
          ))}
        </Container>
      ) : (
        <></>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
