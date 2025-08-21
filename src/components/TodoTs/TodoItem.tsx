import type { todoType } from "./types";

type PropsType = {
  task: todoType;
  deleteTask(nameToDelete: string): void;
};
function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div>
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button
          onClick={() => {
            deleteTask(task.taskName);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
