import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loja App - Gestão & CRM',
  description: 'Sistema de gestão de estoque, captação de leads e CRM para comércio local.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        <div className="flex min-h-screen">
          <aside className="w-64 bg-slate-900 text-white p-6">
            <h1 className="text-xl font-bold mb-8 text-blue-400">Loja App</h1>
            <nav className="space-y-4">
              <a href="/" className="block hover:text-blue-300">Dashboard</a>
              <a href="/estoque" className="block hover:text-blue-300">Gestão de Estoque</a>
              <a href="/leads" className="block hover:text-blue-300">Captação de Leads</a>
              <a href="/crm" className="block hover:text-blue-300">CRM de Vendas</a>
            </nav>
          </aside>
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
