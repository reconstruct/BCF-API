# BCF-API
Reconstruct's Typescript implementation of a compatible BCF 3.0 Server with own extended functionality.

Based on [BCF REST API Specification](https://github.com/buildingSMART/BCF-API)

## Development Setup

### Node dependencies

1) Install [nvm](https://github.com/nvm-sh/nvm) to be sure you're using the correct node version when building/executing this package.

2) When inside this repo's root directory, run this command to set your node version equal to the one specified on the .`.nvmrc` file:

    ```bash
    nvm use
    ```

3) Use node's package manager to install the required dependencies

    ```bash
    npm install
    ```

   > **Note:**
   > This repo is already configured to use the private package registry on GitLab using the `.npmrc` file.
   > If you can't pull the private packages, check that your GitLab is added on the Reconstruct's organization on GitLab

### Git hooks setup

> Note: You must have Python 3 and PIP installed in your system.

Run the `git-hooks` target of the Makefile file:

```
make git-hooks
```

This will install the `pre-commit` python package through PIP and configure the git hooks

> For more information, see [this wiki doc](https://wiki.reconstructinc.com/en/engineering/data-platform/applications/git-hooks) to setup our Git hooks

## Running the API

### Set your env. variables

Clone the `.env.sample` file and rename it to `.env` and fill the env. variables values so the API can use the required data.

### Locally

Use npm to run the following script:

```
npm run dev
```

This will use `tsc-watch` to hot reload your code everytime you make changes to the codebase.

### Production

##### Build for production

You must first build the API using tsc by invoking the following npm command:

```
npm run build
```

##### Run for production

Use npm to run the following script:

```
npm run start
```

## Swagger API documentation

If you use the `npm run dev` or `npm run generateAndServe` command, the API 
will be served at port 8080, and you will be able to access the 
documentation at [http://localhost:8080/docs](http://localhost:8080/docs).

## Build the docker image

You can build a container image of this API server using the docker CLI tool, it is required that you must 
pass a `GITLAB_TOKEN` argument to the CLI to allow docker to pull the required dependencies from 
Reconstruct's private package registry on GitLab, otherwise the image build process will fail.

Usage:
```
docker build --tag <YOUR_DOCKER_IMAGE_NAME_HERE> --build-arg GITLAB_TOKEN=<YOUR_GITLAB_TOKEN_HERE> .
```

## Run the docker image

To run the recently built docker image you must pass the `MONGO_URI` environment variable when invoking the run command.

Usage:
```
docker run -d -p 8080:8080 -e MONGODB_URI='<YOUR_MONGODB_URI_HERE>' <TAG_OR_ID_OF_THE_DOCKER_IMAGE_HERE> 
```

> Note: The docker image will always be bound to the 8080 port, so be sure to bound it properly, in the case above, we're preserving the same port bound using the `-p` parameter.

### Endpoint documentation

> Note: Keep in mind that for each endpoint you'll have to prepend `<API SERVER URL>/<URL_PREFIX>` to reach it successfully.

#### Status

Returns a standard message to tell the consumers that the API is serving normally.

```http
GET /status
```
> Note: the base path at this time is `/api/v3`
