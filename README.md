
## Introduction

To evaluate your programming skills, we would like to share a fun challenge with you! The main goal will be to create a simplified version of Spotify using the React Framework. For this, you will have to use the Spotify API (c.f. setup instructions) to fetch data, add new ones, and update the UI accordingly.

### Description of the feature

For this particular Spotify version, we want to let our users create new Playlists, and add tracks to them. Every feature listed below is mandatory and should be implemented as part of this challenge.

As a user (currently logged in):

+ I should be able to create a new playlist and specify a name and optionally a description.
+ I should be able to consult a given playlist's content (every tracks added to it).
+ I should be able to select an existing playlist and display its content.
+ I should be able to perform a search for any tracks and consult the search results.
+ I should be able to add any search results in the currently selected playlist.
+ I should be able to remove a given track from a playlist.


Here is the link to the Spotify documentation where you will find any information you need to manage this challenge with success: https://developer.spotify.com/documentation/web-api/reference.

## Setup

To use the Spotify Web API, here are the instructions you need to follow:

+ **Fork this repo**
+ Create a free Spotify account (if you don't have one)
+ Create a new Application by visiting the page: https://developer.spotify.com/dashboard/applications
+ Copy your Client ID and Secret into the environment variables (`REACT_APP_SPOTIFY_CLIENT_ID` and `REACT_APP_SPOTIFY_CLIENT_SECRET`) within an `.env` file. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and use [dotenv](https://www.npmjs.com/package/dotenv) to load these additional environment variables into your app.
+ We ask you to authenticate your app by using the **Implicit Grant Flow**. That will be mandatory to act, such as creating a new playlist. **NOTE: All the authentication part is already implemented within the repo**.
+ Don’t forget to set up the redirect URI in your app settings on the Spotify Developer Dashboard.

**Note 1**: This repo aims to be used as a boilerplate to help you start faster. **Start by forking it and then implement your solution**.

**Note 2**: You don’t need any server. You only need to create a React app that will consume the Spotify API.


## How to run this project?

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

