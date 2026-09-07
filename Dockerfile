# ---- Build stage -----------------------------------------------------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached unless deps change
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build the production bundle
COPY . .
RUN npm run build

# ---- Serve stage -------------------------------------------------------
FROM nginx:alpine

# SPA-aware nginx config (client-side routing needs a fallback to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
