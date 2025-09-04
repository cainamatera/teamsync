import { PublicNavbar } from '@/components/public-navbar';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PublicNavbar />
      <main className="flex-grow">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">
            Sua vida, seu trabalho,
            <br />
            <span className="text-accent">em um só lugar.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Organize suas metas pessoais e sincronize seus projetos de equipe com
            uma única ferramenta inteligente.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Comece a usar gratuitamente
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary">Para Você</h3>
              <p className="mt-2 text-muted-foreground">
                Um espaço pessoal e privado para organizar suas tarefas, notas e
                agenda. Potencializado por IA para otimizar sua rotina e
                transformar ideias em ações.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-primary">Para Sua Equipe</h3>
              <p className="mt-2 text-muted-foreground">
                Workspaces colaborativos com quadros Kanban, chat em tempo real
                e gestão de arquivos. Mantenha sua equipe alinhada e seus
                projetos no caminho certo.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

