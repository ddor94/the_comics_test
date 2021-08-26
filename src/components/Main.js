import React from 'react';

function Main({ stories, characterName }) {
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
            stories.map((story) => {
              return (
                <li key={story.id} className="mb-3">
                  <a>
                    {story.title}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Main;
