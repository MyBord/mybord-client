<img align="right" width="460" height="294" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/rocket.png">

# Deployment

This summarizes the process for deploying the MyBord client application to various
running instances. For other related build matters, please see the
[build doc](https://github.com/jimmy-e/mybord/blob/master/docs/build.md).

## Table of Contents:

* [I. Managing Our Instances](#i-managing-our-instances)
* [II. Creating an Instance](#ii-creating-an-instance)
* [III. Deploying an Instance](#iii-deploying-an-instance)
* [IV. Other Heroku Resources and Commands](#iv-other-herku-resources--commands)

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
3. Make sure under the 'settings' tab, our heroku app has all the same config / env vars that	
is needed. See [here](https://github.com/jimmy-e/mybord/blob/master/docs/build.md#vi-env-vars) for
more information.

## III. Deploying an Instance

In order to deploy our node.js application to Heroku, make sure you do the following:

1. Make sure all of the necessary instances listed in ['managing our instances'](#i-managing-our-instances)
have been created.
2. Add the production heroku client app as a git repository. Do this by going to the production
heroku app in the heroku dashboard, click on the settings tab, copying the 'Heroku git URL', and
running the following command: `git remote add heroku-prod <heroku_git_url>`.
3. Add the development heroku client app as a git repository. Do this by going to your heroku
development app in the heroku dashboard, click on the settings tab, copying the 'Heroku git URL',
and running the following command: `git remote add heroku-dev <heroku_git_url>`.

Once these commands have been run, you can then deploy your application to Heroku by running
either `yarn push-heroku:prod` or `yarn push-heroku:dev`.

## IV. Other Herku Resources & Commands

* **Deploying from a branch besides master:**
  * If you want to deploy code to Heroku from a non-master branch of your local repository
  (for example, `testbranch`), use the following syntax to ensure it is pushed to the remote’s master
  branch: `git push heroku testbranch:master`.
* **Adding a heroku git repository:**
  * To add an existing heroku git repository, run this command: `heroku git:remote -a yourapp`.
* **Tip of current heroku branch is behind:**
  * If, when trying to push to heroku, the attempt was rejected because 'the tip of your current
   branch is behind', then you can just use the `-ff` flag to fast forward:
   `git push heroku master -ff`.
* **Redeploying to heroku:**
  * If you want to redeploy to heroku but have not made any changes to your branch, run the
   following commands:
   ```
   git commit --allow-empty -m "redeploying to heroku"
   git push heroku master
   ```
* **Listing all apps:**
  * To list all heroku apps, run the following command: `heroku list`
* **Pushing to a different heroku app:**
  * To push do a different heroku app, first go to the respective heroku app and under 'settings'
  find the heroku git url, then run the following commands:
  ```
  git remote add test-app1 <heroku_git_url>
  git push test-app1 master
  ```
* **Getting the logs of a specifc app:**
  * To get the logs of a specific app, run the following command:
  `heroku logs --app sample_app_name --tail`.
