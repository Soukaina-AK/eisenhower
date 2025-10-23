import AddTaskButton from "@/components/add-task-button";
import Input from "@/components/input";
import Task from "@/components/task";
import { useState } from "react";

export default function SideBar() {

     const [openAddTask, setOpenAddTask] = useState(false)

    const handleOpenTaskForm = () => {
        setOpenAddTask(true)
    }

    const handleCloseTaskForm = () => {
        setOpenAddTask(false)
    }

  return (
    <section className="min-w-[300px] h-[100%]  rounded-xl rounded-bl-none lg:rounded-bl-xl overflow-hidden border-[0.9px] border-dotted border-sky-700 bg-csky">
        <div className="bg-csky p-3">ToDo</div>
        <section className="p-2 flex flex-col h-full">
            <div className="flex-[0.9] flex flex-col gap-2 overflow-auto task-list pb-3">
                {Array.from({ length: 20 }).map((_, i) => (
                <Task key={i} />
                ))}
            </div>

            <div className="sticky bottom-1 bg-csky ">
                {openAddTask ? (
                <Input onClose={handleCloseTaskForm} />
                ) : (
                <AddTaskButton onClick={handleOpenTaskForm} />
                )}
            </div>
        </section>
    </section>
  )
}
