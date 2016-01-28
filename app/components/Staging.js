var React = require('react');

var Staging = React.createClass({
  componentDidMount: function(){
    this.props.stagingActions.createSocket();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.props.navActions.navSoloStaging}>PRACTICE</button>
        <button onClick={this.props.navActions.navChallengeArena}>CHALLENGE</button>
      </div>
    )
  }
});

module.exports = Staging;
