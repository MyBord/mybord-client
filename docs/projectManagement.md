<img align="right" width="306" height="282" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/projectManagement.jpg">

# Project Management

This document is used to outline current project management priorities.

## Table of Contents

* [I. Priority Levels](#i-priority-levels)   
* [II. Long Term](#ii-long-term)   

## I. Priority Levels

### A. Highest - MVP

  * popover
    * fix the caret position for a tooltip that is collided with the right side of the window
    * add delay for tooltip / popover
    * fix hovering from main div to modal
    * hovering over card menu button content hides card menu button
    * fix tooltip when card is on very right side
    * fix tooltip / popover when on the right side of the window and doesn't have enough room
    * when you click the pop confirm in a tooltip (any text), the card menu button no longer shows
  * figure out why ellipsis aren't aliased
  * when you hover away from card, the card menu button content should no longer be visible
  * when you first login, cards show before page is done animating? 
  * when you logout, the login form looks different
  * when you login, you get a flash from the dashboard page?
  * have session be remembered by user
  * fix loading of image on landing page
  * add about page - for app and landing
  * replace coffee login image
  * create transitions between login and about and error
  * create error page if server is down  
  * when refreshing the dashboard, the spa fallback seems to be persisting for too long
  * Document react naming conventions
    - container & component
    - Content
    - form & formContent

### B. High - MVP

### C. Medium

  * fix when you cannot get the channel icon
  * instead of having the default file be 'xContainer', have it be 'x' that imports the
   'container' file
  * add react lazy loading to all files that use switch statements
  * replace error lottie
  * add query string for filters
  * fix import of all styles, one single import for styles at root of app
  * handle front end if server is down for both app and landing
  * when there are only two cards, changing the width of the window creates the width of the
   cards to 'jump'
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
  * When you submit an invalid youtube url, you get an error message. If you then submit a valid
   youtube url, that error message goes away, but not until it shows a double rendering / flash.

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
