import Task from "./Task";
import Settings from "./Settings";

class User {
    tasks: Task[]
    settings: Settings;

    constructor(tasks: Task[], settings: Settings) {
        this.tasks = tasks;
        this.settings = settings;
    }

    cloneWith(changes: Partial<User>): User {
        return new User(changes.tasks ?? this.tasks, changes.settings ?? this.settings)
    }
}

export default User;