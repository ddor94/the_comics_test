import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getCharacters } from '../apiCalls/apiCalls';

function TopSearch({ updateContent }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [characters, setCharacters] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (event.target.value.length > 3) {
      setShowDropdown(true);
      loadCharacters(event.target.value);
    } else {
      setShowDropdown(false)
    }
  };

  const loadCharacters = (searchParams) => {
    getCharacters(10, searchParams).then((response) => setCharacters(response.data.data.results));
  }

  const handleClick = (char) => {
    updateContent(char);
    setShowDropdown(false);
  }

  return(
    <div className="field is-relative">
      <p className="control has-icons-left">
        <input
          className="input is-small"
          size="40"
          type="text"
          placeholder="Search for characters..."
          onChange={handleSearch}
        />
        <span className="icon is-small is-left">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </p>

      {
        showDropdown &&
        <div
          style={{position:"absolute", width:"100%"}}
          className="has-background-white mt-2 box"
        >
          {
            characters.map((char) => {
              return (
                <div key={char.id} onClick={() => handleClick(char)}>
                  <p className="m-4">
                    {char.name}
                  </p>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default TopSearch;
