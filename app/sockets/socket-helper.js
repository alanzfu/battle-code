var io = require('socket.io-client');
var arenaAction = require('../actions/arenaActions');
var actions = require('../constants').action;
//var stagingActions = require('../actions/stagingActions');

var socket = io('http://127.0.0.1:3000');
// should be stored on state herestore.dispatch(stagingActions.createSocket());

socket.on('start', function(data){
  store.dispatch({
    type: actions.GET_PROBLEM_SUCCESS,
    payload: data
  });
});

socket.on('eval', function(submissionMessage, challenge_id){
  if(submissionMessage.message === 'victory!'){
    socket.emit('won', null);
  }
  store.dispatch(arenaAction.handleSubmissionResponse(submissionMessage, challenge_id));
});

module.exports = socket;
