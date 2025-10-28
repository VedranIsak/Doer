import generateId from "../helpers/idGenerator";
class SubTaskModel {
  id: string;
  title: string;
  isCompleted: boolean;
  dueDate: string;

  constructor(title: string, isCompleted: boolean, dueDate: string) {
    this.id = generateId();
    this.title = title;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }

  cloneWith(changes: Partial<SubTaskModel>): SubTaskModel {
    return new SubTaskModel(
      changes.title ?? this.title,
      changes.isCompleted ?? this.isCompleted,
      changes.dueDate ?? this.dueDate
    );
  }
}

export default SubTaskModel;
