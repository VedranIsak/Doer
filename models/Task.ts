class Task {
    id: number;
    date: string;
    time: string | undefined;
    title: string;
    description: string | undefined;
    isUpcoming: boolean;
    isCompleted: boolean;

    constructor(id: number, date: string, time: string | undefined, title: string, 
        description: string, isUpcoming: boolean, isCompleted: boolean) {
        this.id = id;
        this.date = new Intl.DateTimeFormat("en-CA").format(new Date(date));;
        this.time = time;
        this.title = title;
        this.description = description;
        this.isUpcoming = isUpcoming;
        this.isCompleted = isCompleted;

        if(this.isUpcoming && this.isCompleted) {
            throw new Error("Event cannot be upcoming and completed simultaneously.");
        }
    }
}

export default Task;