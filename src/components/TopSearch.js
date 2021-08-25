import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function TopSearch() {
  return(
    <div className="field">
      <p className="control has-icons-left">
        <input className="input is-small" size="40" type="text" placeholder="Search for characters..." />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </p>
    </div>
  )
}

export default TopSearch;
