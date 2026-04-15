import './globals.css';

export const metadata = {
  title: 'Jexcar Rentals',
  description: 'Rent the best cars with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}