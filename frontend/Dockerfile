FROM node:16-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --only=prod
COPY . .
RUN npm run build
FROM nginx:1.16.0-alpine
COPY ./.nginx/nginx.conf /etc/nginx/
COPY ./.nginx/perevod-ru.conf /etc/nginx/nginx.d/
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]