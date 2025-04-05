
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Adicionando handler de erro global para capturar problemas de renderização
window.addEventListener('error', (event) => {
  console.error('Erro global capturado:', event.error);
});

console.log("Iniciando a aplicação React");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Falha ao encontrar o elemento root");
  document.body.innerHTML = '<div id="root">Erro ao carregar a aplicação</div>';
}

try {
  const root = createRoot(rootElement || document.body);
  console.log("Elemento root encontrado, renderizando App");
  
  root.render(<App />);
  
  console.log("React application mounted");
} catch (error) {
  console.error("Erro ao renderizar a aplicação:", error);
  if (rootElement) {
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">Erro ao renderizar a aplicação</div>';
  }
}
