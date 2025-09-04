import Link from 'next/link';

export function PublicNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">TeamSync</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre a Construção
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Cadastre-se
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}