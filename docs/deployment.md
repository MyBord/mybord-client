<img align="right" width="460" height="294" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/rocket.png">

# Deployment

This summarizes the process for deploying the MyBord client application to various
running instances. For other related build matters, please see the
[build doc](https://github.com/jimmy-e/mybord/blob/master/docs/build.md).

## Table of Contents:

* [I. Managing Our Instances](#i-managing-our-instances)
* [II. Creating an Instance](#ii-creating-an-instance)

## I. Managing Our Instances

Before we create our running instances, we first need to list what instances we need and need to
manage:

* **prod instances:**
  * `mbh-client-prod`: This is where our production client instance is hosted via heroku.
* **dev instances:**
  * `mbh-client-dev-<developer_name>`: This is where our development client instance is
   hosted via heroku.
  * *Note*: dev instances are per developer. If multiple instances are needed, then we can add
   additional numbers, e.g. `mbh-client-dev-jimmy-1`, `mbh-client-dev-jimmy-2`.
  
*Note:* `mbh` stands for 'mybord-heroku'.

## II. Creating an instance

To create an instance, do the following steps:

1. Go to the heroku dashboard (https://dashboard.heroku.com/apps).
2. Create a new app with the appropriate name (listed above).
