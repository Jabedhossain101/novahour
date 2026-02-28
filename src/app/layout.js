import './globals.css';

export const metadata = {
  title: 'NovaHour - AI Document Processor',
  description: 'Convert documents to CSV and Excel easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
