"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'styled-components';
import { draculaTheme } from '../theme';
import { GlobalStyle } from '../styles/globals';
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={draculaTheme}>
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <div style={{ marginTop: '80px' }}>{children}</div>
        </body>
      </html>
    </ThemeProvider>
  );
}
