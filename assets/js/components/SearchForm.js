var React = require('react');

module.exports = React.createClass({

  update: function(e){
    e.preventDefault();
    // var query = this.refs.textInput.getDOMNode().value;
    // this.props.search(query);
    this.refs.textInput.getDOMNode().value = "";
    this.props.search();
  },

  render: function(){
    return (
      <div className="navbar">
        <form id="searchForm" onSubmit={this.update}>
          <input id="searchField" placeholder="Enter a yes/no question" ref="textInput" type="text" name="q" />
          <button id="searchButton" type="submit">Ask</button>
        </form>

      </div>

    )
  }
});