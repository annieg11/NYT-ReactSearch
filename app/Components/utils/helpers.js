// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
    var nytArticleSearchAPI = "5c379e9645324b7c9dc438eb908e936c";
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ nytArticleSearchAPI + "&q=";

  
    
      // Helper Functions (in this case the only one is runQuery)
      var helpers = {
         runQuery: function(topic, begin_date, end_date) {

    // Figure out the geolocation
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=" + topic  + "&api-key=" + nytArticleSearchAPI +"&begin_date" + begin_date +"20160130" + "&end_date" + end_date +"20161215";
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=politics&pretty=1&api-key=5c379e9645324b7c9dc438eb908e936c&begin_date20161111&end_date20161212";
    //console.log(queryURL);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
        'api-key': "5c379e9645324b7c9dc438eb908e936c"
      });
      $.ajax({
        url: url,
        method: 'GET',
      }).done(function(result) {
        console.log(result);
      }).fail(function(err) {
        throw err;
      });

    return axios.get(url).then(function(response) {

      var results = [];
      // if there is a result, return it formatted properly
      if (response.data.results[0]) {
        for(var i=0, i<5, i++) {
          results.push(response.data.results[i].formatted);
        }
        return results;
      } else {
        // if no results
        return "Nothing was found";
      }
    });
  },
// This function hits our own server to retrieve the record of query results
  getSavedArticle: function() {
    return axios.get("/api/saved");
    
  },

  // This function posts new searches to our database.
  postSavedArticle: function(topic) {
    return axios.post("/api/saved",article);
     
  }
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;