import ScreenContainer from "@/app/screenContainer";
import Paragraph from "@/components/paragraph";
import Task from "@/components/task";
import importedTasks from "@/data/mockData";
import TaskModel from "@/models/Task";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {    
    const todayDate = new Intl.DateTimeFormat("en-CA").format(new Date());
    const [tasks, setTasks] = useState<TaskModel[]>( (importedTasks ?? []).filter((task) => task.date === todayDate && !task.isCompleted));
    const completedTasks = tasks.filter((task) => task.isCompleted);
    const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

    const styles = StyleSheet.create({
        container: { flex: 1 },
        content: { alignItems: "center", justifyContent: "flex-start", flexDirection: "column" },
    });

    const renderTask = (task: TaskModel) => (
      <Task task={task} tasks={tasks} setTasks={setTasks} />
    );

    return (
        <ScreenContainer title="Tasks!" img="index">
            <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {notCompletedTasks.length === 0 ? 
                  <Paragraph marginBottom={20} color="white" fontSize={20}>Done for today!</Paragraph>
                :
                  <>
                    <Paragraph marginBottom={20} color="white" fontSize={20}>Todays tasks</Paragraph>
                    {notCompletedTasks.map(task => renderTask(task))}
                  </>
                }            
                {completedTasks.length > 0 ?
                <>
                  <Paragraph marginBottom={20} color="white" fontSize={20}>Done tasks</Paragraph>
                  {completedTasks.map((task) => renderTask(task))}
                </>
                :
                <></>
                }

            </ScrollView>
      </ScreenContainer>
    )
}

export default HomeScreen;