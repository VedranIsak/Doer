import Container from "@/app/components/container";
import Paragraph from "@/app/components/paragraph";
import ScreenContainer from "@/app/components/screenContainer";
import Task from "@/app/components/task";
import TaskModel from "@/app/models/Task";
import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";
import formatDate from "../helpers/formatDate";
import User from "../models/User";

const HomeScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const importedTasks = user.tasks;

  const todayDate = formatDate(new Date());
  const [allTasks, setAllTasks] = useState<TaskModel[]>(importedTasks);

  useEffect(() => {
    if (user) {
      setUser((prevUser) => new User(allTasks, prevUser.settings));
    }
  }, [allTasks]);

  useEffect(() => {
    setAllTasks(importedTasks);
  }, [importedTasks, todayDate]);

  const completedTasks = useMemo(
    () => allTasks.filter((task) => task.isCompleted && task.dueDate === todayDate),
    [allTasks]
  );

  const notCompletedTasks = useMemo(
    () => allTasks.filter((task) => !task.isCompleted && task.dueDate === todayDate),
    [allTasks]
  );

  const unfinishedTasks = useMemo(
    () => allTasks.filter((task) => task.hasPassed()),
    [allTasks]
  );

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
            <Task
              key={task.id.toString() + "notComp"}
              taskData={task}
              tasks={allTasks}
              setTasks={setAllTasks}
            />
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
            <Task
              key={task.id.toString() + "comp"}
              taskData={task}
              tasks={allTasks}
              setTasks={setAllTasks}
            />
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
              key={task.id.toString() + "unf"}
              taskData={task}
              tasks={allTasks}
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
