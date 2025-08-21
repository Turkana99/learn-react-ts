import type { ChangeEvent, FC } from "react";
import { useState } from "react";
import type { todoType } from "./types";
import TodoItem from "./TodoItem";

const TodoApp: FC = () => {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    }
    if (event.target.name === "workDay") {
      setWorkDay(Number(event.target.value));
    }
    console.log(task, workDay);
  };
  const addNewTask = (): void => {
    console.log(todoList);
    const newTask = { taskName: task, workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
  };

  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != nameToDelete;
      })
    );
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Enter task..."
          onChange={handleChange}
        />
        <input
          type="number"
          name="workDay"
          value={workDay}
          onChange={handleChange}
          placeholder="How many days are need?"
        />
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <div>
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </>
  );
};

export default TodoApp;
