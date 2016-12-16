// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
    var nytArticleSearchAPI = "5c379e9645324b7c9dc438eb908e936c";
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ nytArticleSearchAPI + "&q=";


    console.log(topic);
    
      // Helper Functions (in this case the only one is runQuery)
      var helpers = {
         runQuery: function(topic, begin_date, end_date) {

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=" + topic + "&pretty=1&key=" + nytArticleSearchAPI +"&begin_date" + begin_date + "&end_date" + end_date;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
  
    // to catch an error
      }).catch(function(error) {
        console.log(error);
    });
},
// This function hits our own server to retrieve the record of query results
  getSavedArticle: function() {
    return axios.get("/api");
    .then(function(response){

        console.log(response);
        return response;
      });

  },

  // This function posts new searches to our database.
  postSavedArticle: function(topic) {
    return axios.post("/api", { topic: topic });
    .then(function(results){

        console.log("Posted to MongoDB");
        return(results);
      })
  }
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;