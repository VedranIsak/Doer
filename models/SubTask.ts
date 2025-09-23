class SubTaskModel {
  title: string;
  isCompleted: boolean;
  dueDate: Date;

  constructor(
    title: string,
    isCompleted: boolean,
    dueDate: Date
  ) {
    this.title = title;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }
}

export default SubTaskModel;
