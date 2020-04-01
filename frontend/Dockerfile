FROM node:latest as build
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.15.2-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]
