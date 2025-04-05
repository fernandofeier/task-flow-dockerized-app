
import React, { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import { toast } from '@/components/ui/use-toast';

type FilterType = 'all' | 'active' | 'completed';

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
      } catch (e) {
        console.error('Error parsing tasks from localStorage', e);
        return [];
      }
    }
    return [];
  });
  
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description?: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date()
    };
    
    setTasks([newTask, ...tasks]);
    toast({
      description: "Tarefa adicionada com sucesso",
    });
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
    toast({
      description: "Tarefa removida",
      variant: "destructive",
    });
  };
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <TaskFilter 
        currentFilter={filter} 
        onFilterChange={setFilter} 
        taskCounts={taskCounts}
      />
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={filteredTasks}
        onToggleComplete={toggleTaskComplete}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default TaskApp;
