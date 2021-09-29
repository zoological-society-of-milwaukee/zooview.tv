import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
const StyledNav=styled(NavLink)`
&.active{
  pointer-events:none;}
`
const SlideCard = (props) => {
  const { name, image, slug, themeColor } = props.slide;
 
  return (
    <StyledNav to={`/exhibits/${slug}`}> 
      <div
        className="ab-slidecard"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor:  themeColor,
          backgroundSize:'cover'
        }}
      >
        <FontAwesomeIcon icon="circle" />{' '}LIVE
        <h4>{name}</h4>
      </div>
    </StyledNav>
  );
}
export default SlideCard;
