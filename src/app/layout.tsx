import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import "./globals.css";

export const metadata = {
  title: "AdrianCode - Développeur Logiciel",
  description:
    "Développeur JavaScript spécialisé en React et Node.js. Découvrez mon portfolio et contactez-moi.",
  keywords: "Didicode, développeur, Node.js, React, JavaScript, web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <link rel="canonical" href="https://adriancode.com" />
      <body className="bg-primary-50 dark:bg-primary-900 dark:text-primary-50 font-text text-primary-900 flex flex-col min-h-screen pt-4 md:pt-8 lg:pt-16">
        {/* Navbar */}
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />

          {/* Contenu principal qui prend tout l’espace restant */}
          <main className="flex-1  max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 w-full mt-20">
            {children}
          </main>
          {/* Footer qui reste en bas */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
