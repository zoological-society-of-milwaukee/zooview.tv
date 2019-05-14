import React from 'react';

import { isOdd } from '../../utils';

const SlideCard = props => {
  const { name, id, image, caption } = props.slide;
  return (
    <div
      title={name}
      style={{
        display: 'inline-block',
        width: 334,
        height: 275,
        margin: '0 5px 0',
        backgroundImage: (isOdd(id) === 0)
          ? 'linear-gradient(-46deg, #171D70 0%, #1C65A0 100%)'
          : 'linear-gradient(161deg, #FFC216 0%, #CEA01C 97%)',
        boxShadow: '0 8px 30px 1px rgba(0,0,0,0.23)',
        borderRadius: 5
      }}
    >
      <img src={image} alt="" style={{ marginTop: 40, marginBottom: 50 }} />
      <p className="caption">{caption}</p>
    </div>
  );
}
export default SlideCard;
