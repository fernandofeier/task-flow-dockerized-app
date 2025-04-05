
import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskInputProps {
  onAddTask: (title: string, description?: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description || undefined);
      setTitle('');
      setDescription('');
      if (!description) {
        setExpanded(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300">
        <input
          type="text"
          placeholder="Adicionar nova tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setExpanded(true)}
          className="w-full border-none outline-none text-base placeholder:text-gray-400"
        />
        
        {expanded && (
          <div className="mt-3 transition-all duration-300">
            <textarea
              placeholder="Descrição (opcional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-20 border border-gray-200 rounded p-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-300"
            />
            <div className="flex justify-end mt-3">
              <button
                type="button" 
                onClick={() => setExpanded(false)}
                className="px-4 py-1 text-gray-600 mr-2 text-sm hover:bg-gray-100 rounded"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="px-4 py-1 bg-indigo-500 text-white rounded flex items-center gap-1 text-sm hover:bg-indigo-600 transition-colors"
              >
                <Plus size={16} />
                Adicionar
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default TaskInput;
