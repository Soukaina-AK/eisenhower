import AddTaskButton from "@/components/add-task-button";
import Card from "@/components/card";
import Input from "@/components/input";
import Task from "@/components/task";
import { useState } from "react";

export default function Board() {
    const [openAddTask, setOpenAddTask] = useState(false)

    const handleOpenTaskForm = () => {
        setOpenAddTask(true)
    }

    const handleCloseTaskForm = () => {
        setOpenAddTask(false)
    }

  return (
    <main className="flex flex-col md:flex-row gap-3 p-3 h-[90%] justify-center">
        <section className="flex-[0.7] flex flex-col justify-center items-center gap-4 p-3 rounded-xl">
            <div className="flex flex-row justify-between w-[80%]">
                <small className="flex-[1] text-center text-[12px] md:text-[20px]">Urgent</small>
                <small className="flex-[1] text-center text-[12px] md:text-[20px]">Not Urgent</small>
            </div>
            <div className="flex flex-row gap-2 relative">
                <small className="-rotate-90 h-5 text-[12px] md:text-[20px] absolute top-[50%] left-[-10%] translate-x-[-10%] translate-y-[-50%]">Important</small>
                <Card className="border-red-400"/>
                <Card className="border-yellow-400"/>
            </div>
            <div className="flex flex-row gap-2 relative">
                <small className="-rotate-90 h-5 text-[12px] md:text-[20px] absolute top-[50%] left-[-13%] translate-x-[-10%] translate-y-[-50%]">Not Important</small>
                <Card className="border-green-400"/>
                <Card className="border-blue-400"/>
            </div>
        </section>
        <section className="flex-[0.3] lg:max-w-[30vw] h-[100%] task-list rounded-xl overflow-hidden border-[0.9px] border-dotted border-sky-700 bg-csky relative">
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
    </main>
  )
}
