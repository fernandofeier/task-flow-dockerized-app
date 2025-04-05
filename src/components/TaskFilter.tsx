
import React from 'react';
import { cn } from '@/lib/utils';

type FilterType = 'all' | 'active' | 'completed';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters: { type: FilterType; label: string }[] = [
    { type: 'all', label: 'Todas' },
    { type: 'active', label: 'Ativas' },
    { type: 'completed', label: 'Concluídas' }
  ];

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="text-lg font-semibold text-gray-800">
        Minhas Tarefas
      </div>
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
        {filters.map((filter) => (
          <button
            key={filter.type}
            onClick={() => onFilterChange(filter.type)}
            className={cn(
              "px-3 py-1 text-sm rounded-md transition-colors relative",
              currentFilter === filter.type
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            )}
          >
            {filter.label}
            {taskCounts[filter.type] > 0 && (
              <span className="ml-1 text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full">
                {taskCounts[filter.type]}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskFilter;
