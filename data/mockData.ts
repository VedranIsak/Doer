import SubTaskModel from "@/models/SubTask";
import Task from "../models/Task";

const tasks: Task[] = [
  new Task(
    "2025-09-26",
    "10:00",
    "Team Meeting",
    "Weekly project sync",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-26",
    "14:30",
    "Doctor Appointment",
    "Routine check-up",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-26",
    "09:00",
    "Workshop",
    "TypeScript basics",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-26",
    "18:00",
    "Dinner with Friends",
    "Italian restaurant downtown",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-23",
    undefined,
    "Day Off",
    "Relax and recharge",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-17",
    "11:00",
    "Interview",
    "Frontend developer position",
    false,
    1,
    []
  ),
  new Task("2025-08-26", "08:30", "Gym Session", "Legs", false, 1, []),
  new Task(
    "2025-09-02",
    "13:00",
    "Client Call",
    "Discuss project requirements",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-02",
    "19:00",
    "Concert",
    "Rock band live performance",
    false,
    1,
    []
  ),
  new Task(
    "2025-09-02",
    "16:00",
    "Workshop",
    "Advanced React Patterns",
    false,
    1,
    []
  ),
  new Task(
    "2025-08-10",
    "15:00",
    "Birthday Party",
    "John’s birthday celebration",
    true,
    1,
    []
  ),
  new Task(
    "2025-08-09",
    "09:30",
    "Car Service",
    "Oil change & maintenance",
    true,
    1,
    []
  ),
  new Task(
    "2025-08-08",
    undefined,
    "Reading Day",
    "Finish a book",
    true,
    1,
    []
  ),
  new Task(
    "2025-08-07",
    "20:00",
    "Movie Night",
    "Watch the new sci-fi release",
    true,
    1,
    []
  ),
  new Task("2025-08-06", "07:00", "Morning Run", "45 min", true, 1, []),
  new Task(
    "2025-08-05",
    "12:00",
    "Lunch with Mentor",
    "Career advice session",
    true,
    1,
    []
  ),
  new Task(
    "2025-08-04",
    "17:30",
    "Workshop",
    "UI/UX design principles",
    true,
    1,
    []
  ),
  new Task("2025-08-03", "08:00", "Yoga Class", "At the gym", true, 1, []),
  new Task(
    "2025-08-02",
    "10:30",
    "Grocery Shopping",
    "Weekly supplies",
    true,
    1,
    []
  ),
  new Task(
    "2025-08-01",
    "19:30",
    "Dinner with Family",
    "Home-cooked meal",
    true,
    1,
    []
  ),
];

export default tasks;
