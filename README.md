# NYT-ReactSearch

This is a MERN (MongoDB, Express, React, Node) based application which will return results from the New York Times. It will be a Single Page Application.


Overview

In this activity, we'll create a new React-based rendition of the New York Times Article Search application. This assignment requires us to create React components, work with helper functions, and utilize the React mounting lifecycle to query and display articles based on user searches. We'll also use Node, Express and MongoDB , React, React-dom,babel so that users can save articles to read later.

Instructions

 This explains how our site's components should function.

Create a MongoDB database called nytreact.

Using mongoose, then create an Article schema and model

Articles should have each of the following fields:

title (Title of the stored article from nytimes.com)

date (publish date and time of the article)

url (URL of the article on nytimes.com)

Creating documents in our articles collection similar to

{
  title: 'Ali Sells Jersey House And Moves to Chicago',
  date: '1974-07-18T00:00:00Z',
  url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
}
Create a Node/Express/Handlebars/MongoDB/ReactJS app called nytreact.  Running this application will:

Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router to navigate, hide and show our React components without changing the route within Express.

Bootsrap was used as a CSS framework.
We'll need several Express routes for our app:

/api/saved (get) - our components will use this to query MongoDB for all saved articles

/api/saved (post) - our components will use this to save an article to the database

/api/saved (delete) - our components will use this to delete a saved article in the database

* (get) - will load our single HTML page (with ReactJS) in public/index.html. Make sure to put this after all other GET routes

The layout should include three React Components named Main, Search and Saved.

Main - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

Search - queries the NYT API for articles. Displays API search results from another possible Query component and Results component. Gives the user the ability to save an article to their Saved Articles.

Saved - displays the Saved Articles that were searched and stored in the database

Bonus: Live Updates to Saved Articles

Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
Socket.io NPM package
