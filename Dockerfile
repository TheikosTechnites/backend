# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.16.1

FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

FROM base AS build

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run build

FROM base AS final

ENV NODE_ENV production

# Before switching to user 'node', change ownership of /app to 'node'
# This ensures 'node' user can write to /app and its subdirectories
RUN chown -R node:node /app

USER node

COPY package.json .

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]