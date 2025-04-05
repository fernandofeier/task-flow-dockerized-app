
import React from 'react';
import TaskApp from '@/components/TaskApp';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <header className="py-6 bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-indigo-600">Task Flow</h1>
          <p className="text-gray-600">Gerencie suas tarefas com facilidade</p>
        </div>
      </header>
      
      <main className="py-8">
        <TaskApp />
      </main>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Task Flow. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
