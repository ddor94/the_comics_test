import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function LoadingSpinner() {
  return (
    <div className="has-text-centered has-text-danger-dark">
      <FontAwesomeIcon icon={faSpinner} size="lg" spin />
    </div>
  )
}

export default LoadingSpinner;
