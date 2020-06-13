<img align="right" width="306" height="282" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/projectManagement.jpg">

# Project Management

This document is used to outline current project management priorities.

## Table of Contents

* [I. Priority Levels](#i-priority-levels)   
* [II. Long Term](#ii-long-term)   

## I. Priority Levels

### A. Highest - MVP

  * fix card description height
  * when deleting a card, add a pop confirm / 'are you sure'
  * add ability to delete card
  * when new card is added via subscription, add spinner
  * add subscription to videos
  * have session be remembered by user
  * fix youtube card height issues
  * Have youtube cards be restricted per user - if there are no cards, then provide instructions,
    display that list is empty, etc
  * fix loading of image on landing page
  * add about page - for app and landing
  * replace coffee login image
  * replace error lottie
  * create transitions between login and about and error
  * should display empty notification if user has no cards / when first
    registers
  * create error if server is down  
  * when error boundary is triggered, you get a white screen
  * when refreshing the dashboard, the spa fallback seems to be persisting for too long

### B. High - MVP

### C. Medium

  * fix import of all styles, one single import for styles at root of app
  * handle front end if server is down for both app and landing
  * make sure app is responsive and mobile friendly
  * Preventing Rapid-Fire Login Attempts 
  * can only play one youtube video at a time
  * Deal with Distributed Brute Force Attacks
    * https://stackoverflow.com/questions/549/the-definitive-guide-to-form-based-website-authentication
    * https://stackoverflow.com/questions/48345922/reference-password-validation
  * prevent duplicates
  * add profile management screen
  * add header with filters and 'add card button'
  * Each card should be marked as:
    * favorite
    * todo
    * done
    * delete
    * edit tags
  * create custom scroll bar  
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
  * when clicking on navigation logo, should redirect to home page
  * make error page and 404 page for landing routes
  * login form
    * fix spacing
    * handle loading state
    * handle when we receive an error when logging in.
    * handle redirect when logged in successfully - this should be a graceful ui transition
    * handle error when username or password is incorrect
  * make spinner fade in and fade out
  * Have a button not spin until a certain time
  * create animation when logging out of app where modal pops up and a lock gets locked

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
  * if you click on a lottie player, it will pause the animation
  
## II. Long Term  

* add lazy loading and code splitting
* lazy load user icons
* lazy load animated icon lottie files
* look into react-router code splitting
