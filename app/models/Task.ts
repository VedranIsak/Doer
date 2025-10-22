import formatDate from "../helpers/formatDate";
import { incrementTaskId } from "../helpers/incrementer";
import SubTaskModel from "./SubTask";

class TaskModel {
  id: number;
  dueDate: string;
  time: string | undefined;
  title: string;
  description: string;
  isCompleted: boolean;
  priorityLevel: number;
  subTasks: SubTaskModel[];

  constructor(
    dueDate: string,
    time: string | undefined,
    title: string,
    description: string,
    isCompleted: boolean,
    priorityLevel: number,
    subTasks: SubTaskModel[]
  ) {
    this.id = incrementTaskId();
    this.dueDate = dueDate;
    this.time = time;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.priorityLevel = priorityLevel;
    this.subTasks = subTasks;
  }

  hasPassed(): boolean {
    const currentDate = formatDate(new Date());
    if (this.isCompleted) {
      return false;
    }

    if (this.dueDate < currentDate) {
      return true;
    }
    return false;
  }

  cloneWith(changes: Partial<TaskModel>): TaskModel {
    return new TaskModel(
      changes.dueDate ?? this.dueDate,
      changes.time ?? this.time,
      changes.title ?? this.title,
      changes.description ?? this.description,
      changes.isCompleted ?? this.isCompleted,
      changes.priorityLevel ?? this.priorityLevel,
      changes.subTasks ?? this.subTasks
    );
  }
}

export default TaskModel;
