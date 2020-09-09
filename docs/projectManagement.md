<img align="right" width="306" height="282" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/projectManagement.jpg">

# Project Management

This document is used to outline current project management priorities.

## Table of Contents

* [I. Priority Levels](#i-priority-levels)   
* [II. Long Term](#ii-long-term)   
* [III. Other](#iii-other)   

## I. Priority Levels

### A. Highest - MVP

  * have session be remembered by user
  * fix spacing of youtube description when title is minimal and there is a large gap between the
   title and the channel title
  * when you login, refresh the page, and click about, you get a double render
  * when logging in, cards show up before loading is done ... this is if you login, logout, and
    login, all as part of the same session?
  * when getting error message in header of dashboard, input form moves up - and all inputs? -
  see add card modal

### B. High - MVP

### C. Medium

  * in the landing spa, if you go to '/foo', the footer shows.
  * layout: have background image always be correct ratio
  * when you click delete in the card menu button and get the pop confirm, and then click 'no',
  two issues occur that need to be fixed: 1. the card menu button content goes away (it should
  still be shown), 2. the card menu button itself (the icon) flashes / double renders
  * for landing page, create floating button that if you click it will return you to the top of the
   login page when you are on the about pages
  * create an admin page for deployment
  * for the about page, we are currently rendering the snl gif via a url; instead, load it as an
   asset
  * deleting text in a text input that is part of a form, where that text input is required, does
   not invoke a required message
  * add roadmap section to about dev page. Add to about mybord page as well?
  * replace clickable typography components with button components of type tertiary
  * dropdown options for category add card modal should be received from the backend
  * Make about dev page responsive
  * reset store on logout?
    * https://www.apollographql.com/docs/react/networking/authentication/#cookie
  * remove dom event listeners and use react event listeners instead for popover. e.g.:
      ```
      const newChildren = React.cloneElement(
        children,
        { ref: (node: HTMLElement) => setChildrenRef(node), onMouseDown: () => ... },
      );
      ```
  * clicking on a link for a page that you are already on does not re-render the page
  * Cards show up after logging in. To replicate:
    * Start a new, logged out session.
    * As part of the same session: 1. Login. After the app loads, 2. log out. 3. Login again.
    * After #3, logging in again, the cards show show up immediately. This is not desired.
  * popover
    * If the popover is of trigger type 'hover', then when you hover from the child item to the
     popover content, the popover will hide again because there is a gap between the child and
     the popover and there is a moment where you are not hovering over either items.
  * add storybook build to circle ci   
  * fix when you cannot get the channel icon
  * If a user goes from the landing / login page to the app, when loading the app, DO NOT animate
   the frame. Only animate the frame when the user initializes / loads / refreshes the
   application when the user has already been authenticated and their session is maintained.
  * create error page if server is down  
  * replace error lottie
  * add query string for filters
  * tooltip.tsx has a dependency cycle
  * fix import of all styles, one single import for styles at root of app
  * handle front end if server is down for both app and landing
  * have landing background rotate multiple backgrounds
  * have background be rotating of videos
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
  * lazy load json files from `animatedIcon.tsx` and images from `stackCard.tsx`
  
## II. Long Term  

* add code splitting to webpack (https://webpack.js.org/guides/code-splitting/)

## III. Other

* get social media accounts
  * namecheap
  * heroku
  * github - test
  * instagram
  * facebook
  * linkedin
  * twitter
* forward mybord emails  
* should I buy namecheap premium dns
* change namecheap phone number address etc, name, etc
* Legal
  * LLC
  * Terms and Conditions
  * GDPR
  * General NDA; get one for Alex Tass
  * Copyright / trademark MyBord & MyBord.io ... can I trademark mybord.com?
    * does casing matter? e.g. mybord, MyBord, etc?
    * what should I trademark? mybord? mybord.io? mybord.com?
    * what should my llc be named? mybord llc? mybord.io llc?
  * Legal for work to be allowed to pursue financing / etc
* soc2 audit?
