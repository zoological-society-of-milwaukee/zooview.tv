import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <ul className="social-icons">
    <li>
      <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
    </li>
    <li>
      <a href={process.env.REACT_APP_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
    </li>
    <li>
      <a href={process.env.REACT_APP_FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'facebook']} />
      </a>
    </li>
    <li>
      <a href={process.env.REACT_APP_SOUNDCLOUD_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'soundcloud']} />
      </a>
    </li>
    {/* <li>
      <a href={process.env.REACT_APP_SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'spotify']} />
      </a>
    </li> */}
    <li>
      <a href={process.env.REACT_APP_YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'youtube']} />
      </a>
    </li>
  </ul>
)
