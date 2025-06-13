ARG GITLAB_TOKEN=yourgitlabtoken

# Build stage
FROM node:18.12-alpine AS build

ARG GITLAB_TOKEN
WORKDIR /app

COPY package*.json ./
COPY .npmrc ./

RUN echo -e "//gitlab.com/api/v4/packages/npm/:_authToken=${GITLAB_TOKEN}" >> .npmrc
RUN npm install

COPY . .

RUN npm run build

# Run stage
FROM node:18.12-alpine AS run

ARG GITLAB_TOKEN
ENV NODE_ENV production
WORKDIR /app

COPY --from=build /app/package*.json /app/.
COPY --from=build /app/.npmrc /app/.npmrc

RUN echo -e "//gitlab.com/api/v4/packages/npm/:_authToken=${GITLAB_TOKEN}" >> .npmrc

RUN npm ci --omit=dev

# prevent embedding the token to the image after building
RUN rm .npmrc

COPY --from=build /app/dist /app/dist

EXPOSE 8080:8080
CMD ["node","./dist/src/index.js"]
