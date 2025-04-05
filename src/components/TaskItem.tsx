
import React from 'react';
import { Task } from '../types/Task';
import { Check, Trash, Edit } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-100 group transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => onToggleComplete(task.id)}
        className={cn(
          "w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200",
          task.completed 
            ? "bg-indigo-500 border-indigo-500 text-white" 
            : "border-gray-300 hover:border-indigo-400"
        )}
      >
        {task.completed && <Check size={14} />}
      </button>
      
      <div className="flex-1">
        <h3 className={cn(
          "text-base font-medium transition-all duration-200",
          task.completed && "line-through text-gray-500"
        )}>
          {task.title}
        </h3>
        {task.description && (
          <p className={cn(
            "text-sm text-gray-600 mt-1 transition-all duration-200",
            task.completed && "line-through text-gray-400"
          )}>
            {task.description}
          </p>
        )}
      </div>
      
      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200"
      >
        <Trash size={18} />
      </button>
    </div>
  );
};

export default TaskItem;
