import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ClientProviders from '@/components/ClientProviders';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: '%s | Obsidian Essentials',
    default: 'Obsidian Essentials Docs',
  },
  description: 'Official documentation for Obsidian Essentials — a comprehensive server management add-on for Minecraft Bedrock Edition.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bg text-text-primary">
        <ClientProviders>
          <Header />
          <div className="flex pt-14 min-h-screen">
            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-border">
              <Sidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}
