import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from "react-router-dom";
const HistoryBackButton = () => {
 const history = useHistory(); 
  return (
    <button
      type="button"
      onClick={history.goBack}
      style={{
        background: 'none',
        color: '#fff',
        opacity: 0.7,
        border: 'none',
        outline: 'none'
      }}
    >
      <FontAwesomeIcon icon="arrow-left" />
      {' '}
      Back
    </button>
  );
}
export default   HistoryBackButton ;
