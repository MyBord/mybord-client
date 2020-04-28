<img align="right" width="306" height="282" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/projectManagement.jpg">

# Project Management

This document is used to outline current project management priorities.

## Table of Contents

* [I. Priority Levels](#i-priority-levels)   
* [II. Long Term](#ii-long-term)   

## I. Priority Levels

### A. Highest - MVP

  * error handling when youtube url is invalid
  * add subscription for cards
  * set cookie for if user is logged in
    * https://expressjs.com/en/4x/api.html#res.cookie 
  * make margin of video cards dynamic
  * fix youtube card
  * post entire youtube url
  * add subscription to videos
  * fix margin and padding for dashboard page with header
  * add logout functionality
  * add about page
  * create env var for uri variable / endpoint
  * get different spinner
  * update avatar
  * remove google and facebook login
  * remove forgot password
  * have signup actually work for creating a new user
  * add spinners to login buttons
  * handle password validation from the backend
  * don't have login form immediately complain when signing up and typing in email address that
   isn't yet an email address
  * update spinner for login page / spa while spinner loads / initiates 

### B. High - MVP

  * document root index html
  * work with login page
    * user logs in, goes to app
    * user logs in, gets denied
    * user signs up
    * user forgets password - add 'back' button to forgot form
    * user signs in with facebook
    * user signs in with google
    * remember me is set if the user wants it - how to set session length
    * validate email
    * validate password
    * I am not a robot
    * confirm password when creating user
  * replace coffee login image
  * add about section to login page
  * add error boundary to login app
  * add header with filters and 'add card button'

### C. Medium

  * when clicking on navigation logo, should redirect to home page
  * make error page and 404 page for landing routes
  * login form
    * fix spacing
    * handle loading state
    * handle when we receive an error when logging in.
    * handle redirect when logged in successfully - this should be a graceful ui transition
    * handle error when username or password is incorrect
  * make spinner fade in and fade out

### D. Low

  * login form
    * fix redirect for 'forgot password'
    * make background image full size
    * save background image to s3
    * set image loading delay for slow network
    * add password validation
    * embed captcha for signup
    * add property for checkbox being default checked or not
    * add spinner for login and signup buttons
  * add about section for mybord that points to github, even in landing page
  * ui improvements
    * add hover for profile image and modal
    * add clicks for notifications and hover action for notification bell
    * create custom scroll
    * add tooltips for long titles
  * create skeletons for login page, etc for slow network
  * create skeletons for all pages
  
## II. Long Term  

* add lazy loading and code splitting
* lazy load user icons
* lazy load animated icon lottie files
* look into react-router code splitting
