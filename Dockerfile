# FROM debian:bullseye as builder

# ARG NODE_VERSION=18.14.2

# RUN apt-get update; apt install -y curl python-is-python3 pkg-config build-essential
# RUN curl https://get.volta.sh | bash
# ENV VOLTA_HOME /root/.volta
# ENV PATH /root/.volta/bin:$PATH
# RUN volta install node@${NODE_VERSION}

# #######################################################################

# RUN mkdir /app
# WORKDIR /app

# # NPM will not install any package listed in "devDependencies" when NODE_ENV is set to "production",
# # to install all modules: "npm install --production=false".
# # Ref: https://docs.npmjs.com/cli/v9/commands/npm-install#description

# ENV NODE_ENV production

# COPY . .

# RUN npm install --production=false && npm run build

# FROM debian:bullseye

# LABEL fly_launch_runtime="nodejs"

# COPY --from=builder /root/.volta /root/.volta
# COPY --from=builder /app /app

# WORKDIR /app
# ENV NODE_ENV production
# ENV PATH /root/.volta/bin:$PATH

# CMD [ "npm", "run", "start" ]


FROM node:19-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

# ENV URL_DB mongodb+srv://accountsAdmin:Kvw0ltdc6OEIyBrT@defaultcluster.a3hu9pp.mongodb.net/AccountsApp?retryWrites=true&w=majority
ENV URL_DB mongodb://mongo:27017/mydb

ENV PORT 8080

ENV APP_URL http://localhost:3000

EXPOSE $PORT
ENV WATCHPACK_POLLING=true
CMD ["npm", "run", "start:dev"]