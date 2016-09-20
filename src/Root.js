import React from 'react';
import { Router, browserHistory } from 'react-router';

function Root (props) {
  return (
    <Router history={browserHistory} routes={props.routes} />
  );
}

export default Root;
