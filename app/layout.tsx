import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://samuellucas.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Samuel Lucas | Gestão em Saúde, Dados e IA',
    template: '%s | Samuel Lucas'
  },
  description: 'Artigos e projetos sobre gestão em saúde, dados, inteligência artificial, eficiência operacional e jornada do paciente oncológico.',
  openGraph: {
    title: 'Samuel Lucas | Gestão em Saúde, Dados e IA',
    description: 'Conteúdos sobre IA aplicada à saúde, eficiência operacional, compras estratégicas e oncologia.',
    url: siteUrl,
    siteName: 'Samuel Lucas Blog',
    locale: 'pt_BR',
    type: 'website',
    images: ['/cover.svg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Lucas | Gestão em Saúde, Dados e IA',
    description: 'IA, dados e gestão aplicados à saúde.',
    images: ['/cover.svg']
  },
  icons: { icon: '/favicon.svg' }
};

const navItems = [
  ['/', 'Início'],
  ['/sobre', 'Sobre'],
  ['/artigos', 'Artigos'],
  ['/projetos', 'Projetos'],
  ['/contato', 'Contato']
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="topbar">
          <Link href="/" className="brand" aria-label="Samuel Lucas Blog">
            <span className="brandMark"><i /></span>
            <span>
              <strong>Samuel Lucas</strong>
              <small>Sallus Intelligence</small>
            </span>
          </Link>
          <nav aria-label="Menu principal">
            {navItems.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div>
            <strong>Samuel Lucas</strong>
            <p>Gestão em Saúde • Dados • Inteligência Artificial • Oncologia</p>
          </div>
          <Link href="/artigos/ia-reduzir-desperdicios-clinicas-oncologicas">Ler artigo principal</Link>
        </footer>
      </body>
    </html>
  );
}
