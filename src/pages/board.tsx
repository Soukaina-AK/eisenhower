import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useResponsive } from "@/hooks/useReponsive";
import EisenhowerMatrix from "@/sections/eisenhower-matrix";
import SideBar, { TaskType } from "@/sections/side-bar";
import { Plus } from "lucide-react";
import { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

export default function Board() {
  const { isDesktop } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  const [sidebarTasks, setSidebarTasks] = useState<TaskType[]>([]);
  const [cardsTasks, setCardsTasks] = useState<{
    red: TaskType[];
    yellow: TaskType[];
    green: TaskType[];
    blue: TaskType[];
  }>({
    red: [],
    yellow: [],
    green: [],
    blue: [],
  });

  const handleCreateTask = (text: string) => {
    if (!text.trim()) return;
    const newTask: TaskType = { id: Date.now(), text, done: false };
    setSidebarTasks((prev) => [...prev, newTask]);
  };

  type CardColor = "red" | "yellow" | "green" | "blue";

  const handleToggleTask = (taskId: number, location: "sidebar" | CardColor) => {
    if (location === "sidebar") {
      setSidebarTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t))
      );
    } else {
      setCardsTasks((prev) => ({
        ...prev,
        [location]: prev[location].map((t) =>
          t.id === taskId ? { ...t, done: !t.done } : t
        ),
      }));
    }
  };

  const handleEditTask = (taskId: number, text: string, location: "sidebar" | CardColor) => {
    if (location === "sidebar") {
      setSidebarTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, text } : t))
      );
    } else {
      setCardsTasks((prev) => ({
        ...prev,
        [location]: prev[location].map((t) =>
          t.id === taskId ? { ...t, text } : t
        ),
      }));
    }
  };


  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceId = source.droppableId;
    const destId = destination.droppableId;

    let sourceList =
      sourceId === "sidebar"
        ? [...sidebarTasks]
        : [...cardsTasks[sourceId as keyof typeof cardsTasks]];

    // Remove dragged task
    const [moved] = sourceList.splice(source.index, 1);

    // Update source
    if (sourceId === "sidebar") setSidebarTasks(sourceList);
    else
      setCardsTasks((prev) => ({
        ...prev,
        [sourceId]: sourceList,
      }));

    // Insert into destination
    if (destId === "sidebar") {
      const newList = [...sidebarTasks];
      newList.splice(destination.index, 0, moved);
      setSidebarTasks(newList);
    } else {
      setCardsTasks((prev) => {
        const newList = [...prev[destId as keyof typeof prev]];
        newList.splice(destination.index, 0, moved);
        return { ...prev, [destId]: newList };
      });
    }
    if (sourceId === "sidebar" && destId !== "sidebar") {
      setIsOpen(false);
    }
  };

  return (
    <DragDropContext 
      onDragEnd={handleDragEnd}
    >
      <main className="flex flex-col md:flex-row gap-3 p-3 h-[90%] justify-center">
        <EisenhowerMatrix
          cardsTasks={cardsTasks}
          handleToggleTask={handleToggleTask}
          handleEditTask={handleEditTask}
        />

        {isDesktop ? (
          <SideBar
            tasks={sidebarTasks}
            onAddTask={handleCreateTask}
            onToggleTask={(id) => handleToggleTask(id, "sidebar")}
            onEditTask={(id, text) => handleEditTask(id, text, "sidebar")}
          />
        ) : (
          <>
            <Drawer
              direction="left"
              open={isOpen}
              onOpenChange={(open) => setIsOpen(open)}
            >
              <DrawerContent className="h-full w-fit bg-csky [&>div:first-child]:hidden rounded-r-xl">
                <SideBar
                  tasks={sidebarTasks}
                  onAddTask={handleCreateTask}
                  onToggleTask={(id) => handleToggleTask(id, "sidebar")}
                  onEditTask={(id, text) => handleEditTask(id, text, "sidebar")}
                />
              </DrawerContent>
            </Drawer>
            <Button
              onClick={() => setIsOpen(true)}
              className="fixed right-0 bottom-0 z-50 rounded-full m-2 w-10 h-10"
            >
              <Plus />
            </Button>
          </>
        )}
      </main>
    </DragDropContext>
  );
}
