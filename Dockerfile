# Step 1: Build Stage
FROM node:20-alpine AS builder

# Install necessary dependencies for building (libc6-compat for sharp)
RUN apk add --no-cache libc6-compat

# Set the working directory
WORKDIR /app

# Copy only package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --force

# Install sharp (if needed)
RUN npm i sharp

# Copy the rest of the source code
COPY . .

# Build the Next.js project (standalone mode enabled)
RUN npm run build

# Step 2: Production Stage
FROM node:20-alpine

# Install dumb-init for better signal handling, and add non-root user
RUN apk add --no-cache dumb-init && adduser -D nextuser

# Set the working directory to /app
WORKDIR /app

# Copy the public folder and build output from the builder stage
COPY --from=builder /app/public ./public

# If standalone mode is enabled (adjust the path accordingly)
# COPY --from=builder /app/.next/standalone ./

# If standalone mode is not enabled, copy the whole .next folder
COPY --from=builder /app/.next ./.next

# Set permissions for the non-root user
USER nextuser

# Expose the port where the app will run
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Use dumb-init to start the server, using the standalone output (server.js)
CMD ["dumb-init", "node", "server.js"]
