import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.foreground};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
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

  .draggable-resizable {
    border: 2px dashed ${({ theme }) => theme.colors.accent};
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .navbar a {
    color: ${({ theme }) => theme.colors.foreground};
    text-decoration: none;
    margin: 0 8px;
    transition: color 0.3s ease;
    animation: pulse 2s infinite;
  }

  .navbar a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
    padding: 16px;
  }

  .timeline-item {
    margin-bottom: 16px;
  }
`;