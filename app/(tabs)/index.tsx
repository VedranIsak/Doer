import Container from "@/app/components/container";
import Paragraph from "@/app/components/paragraph";
import ScreenContainer from "@/app/components/screenContainer";
import Task from "@/app/components/task";
import TaskModel from "@/app/models/Task";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";
import formatDate from "../helpers/formatDate";
import User from "../models/User";
import { saveUser } from "../helpers/dataManager";

const HomeScreen = () => {
  const { user, setUser } = useContext(UserContext);
  const importedTasks = user.tasks;

  const todayDate = formatDate(new Date());
  const [allTasks, setAllTasks] = useState<TaskModel[]>(importedTasks);

  const setTasksAndUser = useCallback(
  (updater: TaskModel[] | ((prev: TaskModel[]) => TaskModel[])) => {
    setAllTasks(prev => {
      const next = typeof updater === "function" ? (updater as any)(prev) : updater;
      setUser(prevUser => {
        const updatedUser = new User(next, prevUser.settings);
        saveUser(updatedUser);
        return updatedUser;
      });
      return next;
    });
  },
  [setUser]
);


  useEffect(() => {
    setAllTasks(importedTasks);
  }, [importedTasks]);

  const completedTasks = useMemo(
    () =>
      allTasks.filter((task) => task.isCompleted && task.dueDate === todayDate),
    [allTasks]
  );

  const notCompletedTasks = useMemo(
    () =>
      allTasks.filter(
        (task) => !task.isCompleted && task.dueDate === todayDate
      ),
    [allTasks]
  );

  const unfinishedTasks = useMemo(
    () => allTasks.filter((task) => task.hasPassed()),
    [allTasks]
  );

  return (
    <ScreenContainer title="Home" img="index">
      {notCompletedTasks.length === 0 ? (
        <Paragraph
          marginTop={15}
          marginBottom={10}
          width={"90%"}
          color={user.settings.textColor as string}
          fontSize={22}
          textAlign="center"
        >
          You have no tasks due for today
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
            {`Todays tasks - ${todayDate}`}
          </Paragraph>
          {notCompletedTasks.map((task) => (
            <Task
              key={task.id}
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
            Today's completed tasks
          </Paragraph>
          {completedTasks.map((task) => (
            <Task
              key={task.id}
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
              key={task.id}
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
