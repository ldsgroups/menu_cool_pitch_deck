// layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'react-vertical-timeline-component/style.min.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Menu Cool | Révolutionnez votre expérience client",
  description: "Menu Cool transforme l'expérience client dans la restauration et le commerce de détail en Côte d'Ivoire grâce à des menus numériques interactifs et personnalisés.",
  icons: "/menu-cool-logo-backgroundless.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${poppins.className} bg-white text-secondary`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
