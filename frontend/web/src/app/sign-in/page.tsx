'use client';

import { PublicNavbar } from '@/components/public-navbar';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:3333/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.access_token);
      router.push('/today');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.message || 'Ocorreu um erro ao tentar fazer login.',
        );
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
            Acesse sua conta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Bem-vindo de volta!
          </p>
        </div>
        <div className="max-w-md w-full mx-auto mt-8 bg-card p-8 border border-border rounded-lg shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-accent sm:text-sm bg-background"
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
                Entrar
              </button>
            </div>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link
              href="/sign-up"
              className="font-medium text-accent hover:text-accent/80"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

