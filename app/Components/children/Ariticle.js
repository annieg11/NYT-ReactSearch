// Include React
var React = require("react");
// Include Helper Functions
var helpers = require('../utils/helpers.js');
// Creating the Form component
var Article = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {  topic: "",
              start: "",
              end: "" 
            }
  },

  // This function will respond to the user input
  handleChange: function(event) {

    // this.setState({ topic: event.target.value });
    var newState ={};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    console.log("DATE: "+Date.now());
    event.preventDefault();

    // TODO: change default dates for 1 year prior up to current date
    if(this.state.topic.trim() == "") this.state.topic = "news";
    if(this.state.start.trim() == "") this.state.start = "01012016";
    if(this.state.end.trim() == "")   this.state.end   = "12122016";


    // // Update the state of the Main form
    // Set the parent to have the search topic, startyear and endyear
    this.props.setTopic(this.state.topic);
    this.props.setStart(this.state.start);
    this.props.setEnd(this.state.end);

    helpers.runQuery(this.state.topic, this.state.start, this.state.end);

   
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
                <h5 className=""><strong>Topic</strong></h5>
                <input type="text" className="form-control text-center" id="topic" onChange= {this.handleChange} required/>

                <h5 className=""><strong>Start Date</strong></h5>
                <input type="text" className="form-control text-center" id="start" onChange= {this.handleChange} required/>

                <h5 className=""><strong>End Date</strong></h5>
                <input type="text" className="form-control text-center" id="end" onChange= {this.handleChange} required/>

                <br/>
              
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Article;