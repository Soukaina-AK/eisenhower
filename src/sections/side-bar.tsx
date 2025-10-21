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
    <section className="min-w-[300px] h-[100%] task-list rounded-xl rounded-bl-none overflow-hidden border-[0.9px] border-dotted border-sky-700 bg-csky relative">
        <div className="bg-csky p-3">ToDo</div>
        <section className="p-2 flex flex-col gap-2 ">

            {Array.from({ length: 10 }).map((_, i) => (
                <Task key={i} />
            ))}

            <div className="sticky bottom-0">
                {openAddTask === true ? <Input onClose={handleCloseTaskForm} /> : <AddTaskButton onClick={handleOpenTaskForm}/>}
            </div>
        </section>
    </section>
  )
}
