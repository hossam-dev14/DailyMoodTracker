
FROM node:18

# sets the working directory
WORKDIR /app

# copies any package.json file
COPY package*.json ./

#  installs dependencies using npm install
RUN npm install

# copies all files from the current directory (including index.js) to docker image
# from 'source' to 'dist' in the imaeg's filesystem
COPY . .

# if we are using environment variable we add this variable like this
# ENV PORT=5000

EXPOSE 5000

# command to run node index.js when the container starts
CMD [ "npm", "run", "dev" ]


# Build the Docker image: docker build -t docker_simple_app .
# Run the container: docker run my-node-app

# (Optional) Clean Up:
#   docker stop my-node-app
#   docker rm my-node-app
#   docker rmi my-node-app  # Remove the image if needed

