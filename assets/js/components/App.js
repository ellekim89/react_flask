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
    var image = this.state.results.image || 'http://38.media.tumblr.com/9f98c9041a3d98c8153423a130cd9367/tumblr_n9k9zzmzqZ1tre1zbo1_500.gif';
    var divStyle ={
      backgroundImage: 'url(' + image + ')'
    };
    return (
      <div className="background" style={divStyle}>
        <SearchForm search={this.getAnswer} />
        <Answer response={this.state.results}/>
      </div>
    )
  }
});
