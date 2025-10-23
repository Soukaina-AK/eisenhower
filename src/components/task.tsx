import { Edit } from "lucide-react";

export default function Task() {
  return (
    <div className="flex flex-col items-start justify-center gap-3 bg-white rounded-xl overflow-hidden p-2 pb-3 min-h-[55px]">
        <div className="flex flex-row items-center gap-1">
            <input type="radio" name="completed" id="completed" />
            <div>Lorem ipsum dolor sit amet  </div>
        </div>
        <button className="border-none bg-transparent self-end">
            <Edit size={17}/>
        </button>
    </div>
  )
}
