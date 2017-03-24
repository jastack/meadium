# Meadium

[Meadium live][heroku]

Meadium is a news and media web application inspired by Medium, where users can read, comment, and like stories about the body of water formed by the Hoover Dam. Users can also follow authors and view a feed tailored to their specific interests.

Meadium utilizes Ruby on Rails on the backend and React.js on the frontend, with a Redux architectural framework.

![Main Page](docs/mainpage.png)

[heroku]: https://meadium.herokuapp.com/#/index?_k=uo1mys

## Features
These are the features

  * Authentication
  * Stories
  * Comments
  * Likes
  * Follows
  * Feed


### Authentication

Meadium uses the BCrypt ruby gem in the backend to take in a user's password and store it in the database as a password digest. The login page is rendered on the frontend as a React modal component.

![Sign up](docs/auth.png)

###Stories

Users can read stories and create their own.  

![new story](docs/new_story.png)

###Comments

###Likes

###Follows

###Feed
