
# Task Flow

Um aplicativo de lista de tarefas construído com React, Vite e Docker.

## Funcionalidades

- Adicionar tarefas com título e descrição opcional
- Marcar tarefas como concluídas
- Excluir tarefas
- Filtrar tarefas (todas, ativas, concluídas)
- Armazenamento local para persistência de dados

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Docker

## Executando localmente

### Com NPM

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Com Docker

```bash
# Construir e executar com Docker Compose
docker-compose up --build

# Ou apenas executar se já tiver construído antes
docker-compose up
```

A aplicação estará disponível em http://localhost:8080

## Estrutura do projeto

- `/src/components` - Componentes React
- `/src/types` - Definições de tipos TypeScript
- `/src/pages` - Páginas da aplicação

## Implantação

Para implantar em produção, basta construir e executar o container Docker em seu ambiente de hospedagem.

```bash
docker build -t task-flow .
docker run -p 80:80 task-flow
```
