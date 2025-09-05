import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TeamSync. Todos os direitos reservados.
        </p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <Link
            href="https://github.com/cainamatera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://portfolio-caina-matera.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Portfólio
          </Link>
        </div>
      </div>
    </footer>
  );
}
