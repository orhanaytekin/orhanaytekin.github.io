import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
  }

  a:hover, .profile a:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.05);
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
`;