
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Garantir que as permissões estão corretas
RUN chmod -R 755 /usr/share/nginx/html

# Criar arquivos de log para debug
RUN mkdir -p /var/log/nginx
RUN touch /var/log/nginx/error.log /var/log/nginx/access.log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
