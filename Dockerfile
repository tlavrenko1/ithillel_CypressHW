# Use the Cypress browsers image with specific versions
FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Verify Cypress installation (if using Cypress)
RUN npx cypress verify

# Command to run tests
CMD ["npx", "cypress", "run", "--browser", "chrome"]
