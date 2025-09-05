import Link from 'next/link';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <aside className="w-64 flex-shrink-0 bg-card border-r border-border p-6 flex flex-col">
        <h2 className="text-xl font-bold text-primary mb-8">TeamSync</h2>
        <nav className="flex flex-col space-y-2">
          <Link
            href="/today"
            className="px-3 py-2 text-sm font-medium rounded-md bg-muted text-primary"
          >
            Hoje
          </Link>
          <Link
            href="/personal-dashboard"
            className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted/50"
          >
            Meu Painel
          </Link>
          <Link
            href="/my-board"
            className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted/50"
          >
            Meu Quadro
          </Link>
          <Link
            href="/my-calendar"
            className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted/50"
          >
            Minha Agenda
          </Link>
          <Link
            href="/notebook"
            className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-muted/50"
          >
            Bloco de Notas
          </Link>
        </nav>
        <div className="mt-auto">
          <button className="w-full px-3 py-2 text-sm font-medium rounded-md text-muted-foreground border border-border hover:bg-muted/50">
            Alternar para Equipe
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
