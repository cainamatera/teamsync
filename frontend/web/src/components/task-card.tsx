'use client';

import { useDraggable } from '@dnd-kit/core';

interface TaskCardProps {
  id: string;
  content: string;
  isOverlay?: boolean;
}

export function TaskCard({ id, content, isOverlay }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`bg-card p-3 rounded-md border border-border shadow-md touch-none select-none transition-opacity ${
        isDragging ? 'opacity-50' : 'opacity-100'
      } ${!isOverlay && 'cursor-grab'}`}
    >
      <p className="text-sm text-foreground">{content}</p>
    </div>
  );
}

