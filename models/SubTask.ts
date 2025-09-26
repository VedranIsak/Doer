class SubTaskModel {
  id: number;
  title: string;
  isCompleted: boolean;
  dueDate: string;

  constructor(
    id: number,
    title: string,
    isCompleted: boolean,
    dueDate: string
  ) {
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
  }
}

export default SubTaskModel;
