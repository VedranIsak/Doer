import SubTaskModel from "@/models/SubTask";
import Task from "../models/Task";

const tasks: Task[] = [
  new Task(
    1,
    "2025-09-23",
    "10:00",
    "Team Meeting",
    "Weekly project sync",
    false,
    1,
    []
  ),
  new Task(
    2,
    "2025-09-23",
    "14:30",
    "Doctor Appointment",
    "Routine check-up",
    false,
    1,
    []
  ),
  new Task(
    3,
    "2025-09-23",
    "09:00",
    "Workshop",
    "TypeScript basics",
    false,
    1,
    []
  ),
  new Task(
    4,
    "2025-09-23",
    "18:00",
    "Dinner with Friends",
    "Italian restaurant downtown",
    false,
    1,
    []
  ),
  new Task(
    5,
    "2025-09-23",
    undefined,
    "Day Off",
    "Relax and recharge",
    false,
    1,
    []
  ),
  new Task(
    6,
    "2025-09-17",
    "11:00",
    "Interview",
    "Frontend developer position",
    false,
    1,
    []
  ),
  new Task(7, "2025-08-26", "08:30", "Gym Session", "Legs", false, 1, []),
  new Task(
    8,
    "2025-09-02",
    "13:00",
    "Client Call",
    "Discuss project requirements",
    false,
    1,
    []
  ),
  new Task(
    9,
    "2025-09-02",
    "19:00",
    "Concert",
    "Rock band live performance",
    false,
    1,
    []
  ),
  new Task(
    10,
    "2025-09-02",
    "16:00",
    "Workshop",
    "Advanced React Patterns",
    false,
    1,
    []
  ),
  new Task(
    11,
    "2025-08-10",
    "15:00",
    "Birthday Party",
    "John’s birthday celebration",
    true,
    1,
    []
  ),
  new Task(
    12,
    "2025-08-09",
    "09:30",
    "Car Service",
    "Oil change & maintenance",
    true,
    1,
    []
  ),
  new Task(
    13,
    "2025-08-08",
    undefined,
    "Reading Day",
    "Finish a book",
    true,
    1,
    []
  ),
  new Task(
    14,
    "2025-08-07",
    "20:00",
    "Movie Night",
    "Watch the new sci-fi release",
    true,
    1,
    []
  ),
  new Task(15, "2025-08-06", "07:00", "Morning Run", "45 min", true, 1, []),
  new Task(
    16,
    "2025-08-05",
    "12:00",
    "Lunch with Mentor",
    "Career advice session",
    true,
    1,
    []
  ),
  new Task(
    17,
    "2025-08-04",
    "17:30",
    "Workshop",
    "UI/UX design principles",
    true,
    1,
    []
  ),
  new Task(18, "2025-08-03", "08:00", "Yoga Class", "At the gym", true, 1, []),
  new Task(
    19,
    "2025-08-02",
    "10:30",
    "Grocery Shopping",
    "Weekly supplies",
    true,
    1,
    []
  ),
  new Task(
    20,
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
