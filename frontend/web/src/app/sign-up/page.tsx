'use client';

import { PublicNavbar } from '@/components/public-navbar';
import { useAuth } from '@/contexts/auth-context';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3333/users', {
        name,
        email,
        password,
      });
      await login(response.data.access_token);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message || 'Ocorreu um erro no cadastro.');
      } else {
        setError('Não foi possível conectar ao servidor.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicNavbar />
      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-primary">
            Crie sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Comece a organizar seus projetos agora mesmo.
          </p>
        </div>
        <div className="max-w-md w-full mx-auto mt-8 bg-card p-8 border border-border rounded-lg shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Nome Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent sm:text-sm bg-background"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent sm:text-sm bg-background"
                placeholder="seu-email@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-foreground"
              >
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent sm:text-sm bg-background"
                placeholder="Mínimo de 8 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="bg-destructive/20 border border-destructive/50 text-destructive-foreground p-3 rounded-md flex items-center gap-2 text-sm">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Já tem uma conta?{' '}
            <Link
              href="/sign-in"
              className="font-medium text-accent hover:text-accent/80"
            >
              Faça login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

