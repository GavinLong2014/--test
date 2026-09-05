import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '体育场馆管理员 | Sports Facilities Administrator',
  description:
    '国际学校体育场馆管理员的中英双语个人简介，专注于安全、场地运营、设施维护与跨团队支持。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
