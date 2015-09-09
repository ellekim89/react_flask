var React = require('react');

module.exports = React.createClass({
  render: function(){

    return (
      <div>
        <h1 id="answer">{this.props.response.answer}</h1>
      </div>
    )
  }
});