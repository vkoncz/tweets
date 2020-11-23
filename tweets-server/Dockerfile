FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./ .

RUN npm run build
RUN npm prune --production

FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./

CMD ["npm", "run", "host"]