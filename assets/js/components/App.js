var React = require('react');
var SearchForm = require('./SearchForm');
var Answer = require('./Answer');


module.exports = React.createClass({

  getInitialState: function(){
    return {results: ""};
  },

  getAnswer: function(){

    var self = this;
    // open request
    var request = new XMLHttpRequest();

    // set request to url, true mean do it async
    request.open("GET", "/lifedecision", true);

    // onload flag fired when, say, DOM content loaded or request is complete
    request.onload = function(){
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log("successful response", data);
            self.setState({results: data});
        } else {
            console.log("hit server, but there was an error");
        }
    };

    request.send();
  },

  render: function(){
    return (
      <div>
        <h1>Hello from react</h1>
        <SearchForm search={this.getAnswer} />
        <Answer response={this.state.results}/>
      </div>
    )
  }
});
