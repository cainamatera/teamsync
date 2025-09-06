'use client';

import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

interface KanbanColumnProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function KanbanColumn({ id, title, children }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      ref={setNodeRef}
      className="w-72 bg-card p-4 rounded-lg border border-border flex flex-col"
    >
      <h2 className="font-semibold text-primary mb-4">{title}</h2>
      <div className="flex-grow bg-background/50 rounded-md p-2 space-y-2">
        {children}
      </div>
    </div>
  );
}
