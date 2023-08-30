import './styles/globals.css';
import './styles/reset.css';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans(
  { subsets: ['latin'] },
  { weights: ['400', '700', '900'] }
);

export const metadata = {
  title: 'Katie Proulx | Product Designer',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
