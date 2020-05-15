<img align="right" width="200" height="200" src="https://github.com/jimmy-e/mybord/blob/master/etc/assets/html.png">

# HTML

The following documentation summarizes how our html is used.

## Table of Contents

* [I. Root HTML](#i-root-html)

## I. Root HTML

Our root html file, `index.html`, is organized in the following ways:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>MyBord</title> // 1
    <link rel="stylesheet" type="text/css" href="/app/application.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400&display=swap" rel="stylesheet"> // 2
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400&display=swap" rel="stylesheet"> // 3
  </head>
  <body>
    <div id="app"></div> // 4
    <script src="/app/bundle.js"></script> // 5
    <script src="https://apis.google.com/js/api.js"></script> // 6
    <script src="https://www.youtube.com/iframe_api"></script> // 7
  </body>
</html>
```

1. Head title of our application.
2. Link for our Poppins font.
3. Link for our Roboto font.
4. div where our react application gets inserted into.
5. Script from which our application runs.
6. Api script for the google api that we use.
7. Api script for the youtube iframe that we use.
