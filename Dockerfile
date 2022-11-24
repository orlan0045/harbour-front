# develop stage
FROM --platform=linux/amd64 node:14.21-alpine as develop-stage
WORKDIR /app
COPY package.json ./
COPY .npmrc ./
RUN npm config set "@bryntum:registry=https://npm.bryntum.com"
RUN yarn install
COPY . .
# build stage
FROM develop-stage as build-stage
RUN yarn build
# production stage
FROM --platform=linux/amd64 nginx:1.22.1-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]