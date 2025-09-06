'use client';

import { KanbanColumn } from '@/components/kanban-column';
import { TaskCard } from '@/components/task-card';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import { useState } from 'react';

const initialColumns = [
  { id: 'todo', title: 'A Fazer' },
  { id: 'in-progress', title: 'Em Andamento' },
  { id: 'done', title: 'Concluído' },
];

const initialTasks = [
  { id: 'task-1', columnId: 'todo', content: 'Configurar o ambiente de desenvolvimento' },
  { id: 'task-2', columnId: 'todo', content: 'Criar a estrutura inicial do projeto' },
  { id: 'task-3', columnId: 'in-progress', content: 'Desenvolver o módulo de autenticação' },
  { id: 'task-4', columnId: 'done', content: 'Implementar o design system com Tailwind' },
];

type Task = typeof initialTasks[0];

export default function MyBoardPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    document.body.classList.add('dragging');
    const activeId = event.active.id;
    const task = tasks.find((t) => t.id === activeId);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    document.body.classList.remove('dragging');
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTasks((prevTasks) => {
        const activeTaskIndex = prevTasks.findIndex(
          (task) => task.id === active.id,
        );
        const updatedTasks = [...prevTasks];
        updatedTasks[activeTaskIndex].columnId = String(over.id);
        return updatedTasks;
      });
    }
    setActiveTask(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Meu Quadro</h1>
            <p className="mt-2 text-muted-foreground">
              Organize suas tarefas pessoais.
            </p>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90">
            Nova Tarefa
          </button>
        </div>

        <div className="flex-grow flex space-x-4">
          {initialColumns.map((column) => (
            <KanbanColumn key={column.id} id={column.id} title={column.title}>
              {tasks
                .filter((task) => task.columnId === column.id)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    content={task.content}
                  />
                ))}
            </KanbanColumn>
          ))}
        </div>
      </div>
      <DragOverlay>
        {activeTask ? (
          <TaskCard id={activeTask.id} content={activeTask.content} isOverlay />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

