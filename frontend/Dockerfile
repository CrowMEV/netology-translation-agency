FROM node:current-alpine as builder
WORKDIR /app
COPY package.json /app/package.json
RUN npm install --omit=dev
COPY . .
RUN npm run build
FROM nginx:stable-alpine
COPY ./nginx-conf/nginx.conf /etc/nginx/
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]