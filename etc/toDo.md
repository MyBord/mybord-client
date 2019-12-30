## ToDo - Both:
split up separate repos with separate package.json's, etc, aliases, etc

## ToDo - BE:
hide db secrets in docker file
add comments to index.ts
move datamodel.prisma to schema folder, have it import schemas per schema type
add secrets back into prisma.yml and prisma.js
add passport
when throwing errors, add status codes
make sure to lock down individual queries and subscriptions, mutations for prod app
make resolvers TS

## ToDo - FE:
update all sass files to less
when clicking play for youtube video, hide play button
add transition to player circle being shown on and off when hovering on and off
when clicking play button on youtube video and youtube isn't ready yet, have button show spinner

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
