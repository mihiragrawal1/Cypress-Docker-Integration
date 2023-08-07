# Use the official Node.js image as the base image
FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
# Set the working directory inside the container
RUN mkdir /app
# WORKDIR /app
WORKDIR /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./


# Install dependencies, including Cypress
RUN npm install
# Copy the rest of the application code into the container
COPY . /app
# Command to run Cypress tests
CMD ["npm", "test"]