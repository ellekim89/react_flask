var React = require('react');

module.exports = React.createClass({
  render: function(){
    
    return (
      <div>
        <h1>{this.props.response.answer}</h1>
        <img src={this.props.response.image} alt="" />
      </div> 
    )
  }
});