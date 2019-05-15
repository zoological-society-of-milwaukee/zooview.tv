import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideCard = (props) => {
  const { name, image, slug, themeColor } = props.slide;
  return (
    <NavLink to={`/exhibits/${slug}`}>
      <div
        className="ab-slidecard"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor:  themeColor
        }}
      >
        <FontAwesomeIcon icon="circle" />{' '}LIVE
        <h4>{name}</h4>
      </div>
    </NavLink>
  );
}
export default SlideCard;
