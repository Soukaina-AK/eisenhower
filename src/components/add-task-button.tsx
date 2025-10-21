import { Plus } from "lucide-react"
import { Button } from "./ui/button";

type ButtonProps = {
  onClick: ()=>void;
}

export default function AddTaskButton({onClick}: ButtonProps) {
  return (
    <Button onClick={onClick} className=" w-[100%] border-none p-3 bg-cpurple rounded-lg text-start flex flex-row items-center gap-1">
        <Plus size={17}/>
        <span>Add a task</span>
    </Button>
  )
}
