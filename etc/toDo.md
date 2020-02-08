https://github.com/apollographql/apollo-client/issues/5143
update architecture docs
make error page and 404 page for landing routes

## login form
* Priorities
  * fix spacing 
  * handle loading and error for query for login
  * handle redirect when logged in successfully
* Other
  * fix redirect for 'forgot password'
  * make background image full size
  * save background image to s3
  * set image loading delay for slow network
  * add about setion for myboard that points to github, even in landing page
  * add password validation
  * embed captcha for signup
  * add property for checkbox being default checked or not
  * add spinner for login and signup buttons
  * handle error when username or password is incorrect

## UI Improvements
make spinner fade in and fade out
add hover for profile image and modal
add clicks for notifications and hover action for notification bell
create custom scroll
add tooltips for long titles
when clicking play for youtube video, hide play button
add transition to player circle being shown on and off when hovering on and off
when clicking play button on youtube video and youtube isn't ready yet, have button show spinner
create skeletons for login page, etc for slow network

## Navigation:

Header
* profile / settings / Logout / about
* notifications

dashboard page
* filter - category , tag
* generic search
* grid vs row
* upload
* my favorites
* individual card
  - favorite it
  - edit tags
* sort by - category, date uploaded, etc
* size

## long term
- lazy load user icons
- lazy load animated icon lottie files
- add error boundaries
- add storybook for colors
- look into react-router code splitting
- add relay
