# Project Management

This document is used to outline current project management priorities.

## Table of Contents

* [I. Priority Levels](#i-priority-levels)   
* [II. Long Term](#ii-long-term)   

## I. Priority Levels

### A. Highest
  
  * update README at root
  * inspect docs on github
  * add stylelint
  * fix failing tests
  * outline project management here
  * add tooltip for nav
  * add hover state for nav

### B. High

  * when clicking play for youtube video, hide play button
  * add transition to player circle being shown on and off when hovering on and off
  * when clicking play button on youtube video and youtube isn't ready yet, have button show spinner

### C. Medium

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
