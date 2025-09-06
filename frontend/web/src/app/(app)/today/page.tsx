'use client';

import { useAuth } from '@/contexts/auth-context';

export default function TodayPage() {
  const { user, isLoading } = useAuth();

  const getFirstName = (fullName: string | undefined) => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary">
        Bom dia, {getFirstName(user?.name)}!
      </h1>
      <p className="mt-2 text-muted-foreground">
        Aqui está um resumo do seu dia. Vamos torná-lo produtivo.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="font-semibold text-lg text-primary">
              Tarefas para Hoje
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Em breve: uma lista das suas tarefas do "Meu Quadro" com
              vencimento hoje.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="font-semibold text-lg text-primary">Sua Agenda</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Em breve: seus compromissos da "Minha Agenda" para o dia de hoje.
            </p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h2 className="font-semibold text-lg text-primary">Foco do Dia</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Sugestão da IA: Em breve, uma recomendação proativa para o seu dia.
          </p>
        </div>
      </div>
    </div>
  );
}

