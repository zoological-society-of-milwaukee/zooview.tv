import React from 'react';
import { Link } from 'react-router-dom';

const SlideCard = props => {
  const { name, image, slug } = props.slide;
  return (
    <div style={{ display: 'inline-block', minWidth: 120, marginRight: 10 }}>
      <Link to={`/exhibits/${slug}`}>
        <div
          style={{
            display: 'inline-block',
            margin: '15px 5px 0 15px',
            maxWidth: 120,
            width: '100%',
            height: 180,
            backgroundImage: `url(${image})`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 13
          }}
        >
          <h2 style={{ fontSize: '1rem' }}>
            {name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
export default SlideCard;
