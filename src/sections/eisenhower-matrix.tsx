import Card from "@/components/card";
import Task from "@/components/task";
import { Droppable, Draggable } from "@hello-pangea/dnd";

type EisenhowerMatrixProps = {
  cardsTasks: {
    red: Array<any>;
    yellow: Array<any>;
    green: Array<any>;
    blue: Array<any>;
  };
  handleToggleTask: (id: number, location: "sidebar" | "red" | "yellow" | "green" | "blue") => void;
  handleEditTask: (id: number, text: string, location: "sidebar" | "red" | "yellow" | "green" | "blue") => void;
};

export default function EisenhowerMatrix({
  cardsTasks,
  handleToggleTask,
  handleEditTask,
}: EisenhowerMatrixProps) {
  const colors: Array<keyof typeof cardsTasks> = ["red", "yellow", "green", "blue"];

  return (
    <section className="flex-[1] grid grid-cols-2 gap-1">
      {colors.map((color) => (
        <Droppable key={color} droppableId={color}>
          {(provided) => (
            <Card
              className={`border-2 ${
              color === "red"
                ? "border-red-400"
                : color === "yellow"
                ? "border-yellow-400"
                : color === "green"
                ? "border-green-400"
                : "border-blue-400"
            }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cardsTasks[color].map((task, index) => (
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
                        onToggle={() => handleToggleTask(task.id, color)}
                        onEdit={(id, text) => handleEditTask(id, text, color)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </Card>
          )}
        </Droppable>
      ))}
    </section>
  );
}
