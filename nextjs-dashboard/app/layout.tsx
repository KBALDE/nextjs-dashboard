import '@/app/ui/global.css'; // import Global CSS
import { inter } from '@/app/ui/fonts';
// just comment test
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
