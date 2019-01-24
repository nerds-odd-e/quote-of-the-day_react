FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY ./ ./

RUN yarn install
ARG REACT_APP_BFF_ENDPOINT=localhost:8080
RUN yarn build

FROM nginx:1.15
EXPOSE 80

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/node_modules /node_modules/
