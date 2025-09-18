import ScreenContainer from "@/app/screenContainer";
import Paragraph from "@/components/paragraph";
import Task from "@/components/task";
import importedTasks from "@/data/mockData";
import TaskModel from "@/models/Task";
import { useState } from "react";

const HomeScreen = () => {    
    const todayDate = new Intl.DateTimeFormat("en-CA").format(new Date());
    const [tasks, setTasks] = useState<TaskModel[]>( (importedTasks ?? []).filter((task) => task.date === todayDate));
    const completedTasks = tasks.filter((task) => task.isCompleted);
    const notCompletedTasks = tasks.filter((task) => !task.isCompleted);


    return (
        <ScreenContainer title="Tasks!" img="index">
            {notCompletedTasks.length === 0 ? 
              <Paragraph marginBottom={20} marginTop={20} color="white" fontSize={20}>Done for today!</Paragraph>
            :
              <>
                <Paragraph marginBottom={20} marginTop={20} color="white" fontSize={20}>Todays tasks</Paragraph>
                {notCompletedTasks.map(task => <Task task={task} tasks={tasks} setTasks={setTasks} />)}
              </>
            }            
            {completedTasks.length > 0 ?
              <>
                <Paragraph marginBottom={20} marginTop={20} color="white" fontSize={20}>Done tasks</Paragraph>
                {completedTasks.map((task) => <Task task={task} tasks={tasks} setTasks={setTasks} />)}
              </>
            :
              <></>
            }
      </ScreenContainer>
    )
}

export default HomeScreen;