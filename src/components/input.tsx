import { X } from "lucide-react";

type FormProps = {
  onClose: () => void;
}

export default function Input({onClose}: FormProps) {
  return (
    <div className="flex flex-col justify-center gap-1">
      <div className="bg-cpurple rounded-xl overflow-hidden pb-2 py-3 ">
          <textarea placeholder="Enter Task Title" className="w-[94%] outline-none border-none px-3 pb-10 bg-transparent"></textarea>
      </div>
      
      <div className="flex flex-row gap-1 items-center">
        <button className="border-none py-2 bg-slate-700 text-white rounded-md px-4">Add task</button>
        <button onClick={onClose} className="bg-csky border-none p-2 hover:bg-[#6b6d63] hover:text-white rounded-md flex items-center justify-center">
            <X size={15}/>
        </button>
      </div>
    </div>
  )
}
