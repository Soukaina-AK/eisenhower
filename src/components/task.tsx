import { Check, Edit, X } from "lucide-react";
import { useState } from "react";

type TaskProps = {
  task:{
    id: number;
    text: string;
    done: boolean;
  },
  onToggle: (id:number) => void,
  onEdit: (id:number, editedText:string) => void,
}

export default function Task({task, onToggle, onEdit}:TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const handleBlur = () => {
    setIsEditing(false);
    onEdit(task.id, editedText);
  }

  const handleEnterKey = (e:any) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      onEdit(task.id, editedText);
    }
  }

  const handleSave = () => {
    if (editedText.trim() === "") return;
    onEdit(task.id, editedText);
    setIsEditing(false);
  }

  const handleCancel = () => {
    setEditedText(task.text);
    setIsEditing(false);
  }

  return (
    <div
      className={`flex flex-col items-start justify-center gap-3 shadow drop-shadow-md bg-white rounded-xl overflow-hidden p-2 pb-3 min-h-[55px] ${
        task.done ? "line-through opacity-60" : ""
      }`}
    >
      {/* FLEX ROW */}
      <div
        className={`flex flex-row items-start gap-2 w-full ${
          task.done ? "line-through opacity-60" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="cursor-pointer mt-1 flex-shrink-0"
        />

        {/* ✅ The key part: flex-1 + min-w-0 allows wrapping */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <input
              autoFocus
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleEnterKey}
              className="border-none outline-none bg-transparent w-full break-words whitespace-normal"
            />
          ) : (
            <div
              className="break-words whitespace-normal w-full cursor-text"
              onDoubleClick={() => setIsEditing(true)}
            >
              {task.text}
            </div>
          )}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="border-none bg-transparent self-end">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="border-none bg-transparent text-green-600 hover:text-green-800"
              title="Save"
            >
              <Check size={17} />
            </button>
            <button
              onClick={handleCancel}
              className="border-none bg-transparent text-gray-600 hover:text-gray-800"
              title="Cancel"
            >
              <X size={17} />
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="border-none bg-transparent text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            <Edit size={17} />
          </button>
        )}
      </div>
    </div>
  );
}
