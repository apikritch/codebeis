FROM node:18.14.2-alpine

WORKDIR /client

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm install -g pm2

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]