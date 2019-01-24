FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY ./ ./

ARG BFF_ENDPOINT="REACT_APP_BFF_ENDPOINT=localhost:7088"
RUN yarn install && ${BFF_ENDPOINT} yarn build

FROM nginx:1.15
EXPOSE 80

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/node_modules /node_modules/
