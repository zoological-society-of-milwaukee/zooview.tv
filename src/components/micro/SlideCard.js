import React from 'react';
import { Link } from 'react-router-dom';

const SlideCard = props => {
  const { name, image, slug } = props.slide;
  return (
    <div style={{ display: 'inline-block', minWidth: 120, marginRight: 10 }}>
      <Link to={`/exhibits/${slug}`}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            margin: '15px 5px 0 15px',
            maxWidth: 120,
            width: '100%',
            height: 180,
            padding: '10px 5px 0px 10px',
            textAlign: 'left',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            borderRadius: 13
          }}
        >
          <div style={{ positon: 'relative', top: 10, left: 10, fontSize: '0.8rem', color: '#83e712' }}>LIVE</div>
          <h2 style={{ position: 'relative', fontSize: '1rem' }}>
            {name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
export default SlideCard;
