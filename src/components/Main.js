import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Main({ stories, characterName, isLoading }) {
  return (
    <div className="container">
      <div className="block">
        <div className="hero">
          <div className="hero-body pl-0">
            <h1 className="title is-size-2">
              Stories featuring <span className="has-text-danger-dark">{characterName}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="block">
        <ul>
          {
            !isLoading ?
            stories.map((story) => {
              return (
                <li key={story.id} className="mb-3">
                  <FontAwesomeIcon icon={faChevronRight} />
                  <a href="#" className="has-text-dark ml-3">
                    <b>{story.title}</b>
                  </a>
                </li>
              )
            }) :
            <LoadingSpinner />
          }
        </ul>
      </div>
    </div>
  )
}

export default Main;
