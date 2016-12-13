// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var nytArticleSearchAPI = "5c379e9645324b7c9dc438eb908e936c";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=" + topic + "&pretty=1&key=" + nytArticleSearchAPI;
// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(topic, begin_date, end_date) {

    console.log(topic);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=" + topic + "&pretty=1&key=" + nytArticleSearchAPI +"&begin_date" + begin_date + "&end_date" + end_date;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;