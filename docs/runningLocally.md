<img align="right" width="256" height="256" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/terminal.png">

# Running Locally

This document summarizes how to run the client locally.

## Table of Contents:

* [I. Running the client with a local backend](#i-running-the-client-with-a-local-backend)
* [II. Running the client with a development server](#ii-running-the-client-with-a-development-server)

## I. Running the client with a local backend

In order to run the client so that it is connected the running, local backend server, you must do
the following:

1. Start up the local backend server. See [here](https://github.com/jimmy-e/mybord-server/blob/master/docs/runningLocally.md)
for further instructions.
2. Make sure your `local.env` file has the `URI` env var set to `URI=localhost:4000/graphql`.
3. Run the command `yarn run-local:local-client`.

## II. Running the client with a development server

In order to run the client so that it is connected a running development server hosted via heroku,
you must do the following:

1. Make sure you have a development server up and running at Heroku. See [here](https://github.com/jimmy-e/mybord-server/blob/master/docs/deployment.md)
for more information.
2. Grab the url of the running server and set it to the URI in your `dev.env` file, e.g.
`URI=sample-dev-server-app.herokuapp.com/graphql`.
3. If you are using Chrome, make sure to turn off the SameSite cookie enforcement. See [here](https://support.siteimprove.com/hc/en-gb/articles/360007364778-Turning-off-Google-Chrome-SameSite-Cookie-Enforcement)
for further information.
4. Run the command `yarn run-local:dev-client`.
