import AddTaskButton from "@/components/add-task-button";
import Input from "@/components/input";
import Task from "@/components/task";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

export interface TaskType {
  id: number;
  text: string;
  done: boolean;
}

interface SideBarProps {
  tasks: TaskType[];
  onAddTask: (text: string) => void;
  onToggleTask: (id: number) => void;
  onEditTask: (id: number, text: string) => void;
}

export default function SideBar({
  tasks,
  onAddTask,
  onToggleTask,
  onEditTask,
}: SideBarProps) {
  const [openAddTask, setOpenAddTask] = useState(false);

  const handleOpenTaskForm = () => setOpenAddTask(true);
  const handleCloseTaskForm = () => setOpenAddTask(false);

  const handleAddTask = (text: string) => {
    onAddTask(text);
    setOpenAddTask(false);
  };

  return (
    <section className="min-w-[300px] max-w-[300px] h-[100%] rounded-xl rounded-bl-none lg:rounded-bl-xl overflow-hidden border-[0.9px] border-dotted border-sky-700 bg-csky">
      <div className="bg-csky p-3">ToDo</div>
      <section className="p-2 flex flex-col h-full">
        <Droppable droppableId="sidebar">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex-[0.9] flex flex-col gap-2 overflow-auto task-list pb-3"
            >
              {tasks.length === 0 && (
                <p className="text-gray-500 text-sm text-center">No tasks yet</p>
              )}

              {tasks.map((task, index) => (
                <Draggable
                  key={task.id.toString()}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`${
                        snapshot.isDragging ? "shadow-lg scale-[1.02]" : ""
                      } transition-all`}
                    >
                      <Task
                        task={task}
                        onToggle={() => onToggleTask(task.id)}
                        onEdit={(id, text) => onEditTask(id, text)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* Form/Add Button */}
        <div className="sticky bottom-1 bg-csky">
          {openAddTask ? (
            <Input onClose={handleCloseTaskForm} onAdd={handleAddTask} />
          ) : (
            <AddTaskButton onClick={handleOpenTaskForm} />
          )}
        </div>
      </section>
    </section>
  );
}
