import 'normalize.css';
import './globals.css';

export const metadata = {
  title: 'Laboratório de Forró',
  description: 'Website page para Lab Escola de Dança',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
