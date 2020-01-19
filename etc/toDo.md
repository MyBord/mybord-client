
## ToDo:
create landing page
when clicking play for youtube video, hide play button
add transition to player circle being shown on and off when hovering on and off
when clicking play button on youtube video and youtube isn't ready yet, have button show spinner
add credentials

## login form
fix redirect for 'forgot password'
make background image full size
save background image to s3
set image loading delay for slow network
handle loading and error for query for login
fix modal popup
add about setion for myboard that points to github, even in landing page
add password validation
embed captcha for signup
export default Form.create()(TemplateInput);
make sure everything is wrapped in a form item, and checkbox is default unchecked

# UI Improvements
make spinner fade in and fade out
add hover for profile image and modal
add clicks for notifications and hover action for notification bell
create custom scroll
add tooltips for long titles

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
