"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'styled-components';
import { draculaTheme } from '../theme';
import { GlobalStyle } from '../styles/globals';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={draculaTheme}>
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <div style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px - 200px)' }}>{children}</div>
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
