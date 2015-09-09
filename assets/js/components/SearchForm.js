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
      <form onSubmit={this.update}>
        <input placeholder="Enter a yes/no question" ref="textInput" type="text" name="q" />
        <input type="submit" />
      </form>
    )
  }
});