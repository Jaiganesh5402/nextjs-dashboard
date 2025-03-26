import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import AcmeLogo from '@/app/ui/acme-logo';
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