import React, { useEffect, useState } from 'react';

const Icon = (props) => {
  const [iconSize, setIconSize] = useState(1);
  useEffect(() => {
    if(props.size === undefined){
      setIconSize(32)
    }
    if (typeof props.size === 'string') {
      switch (props.size) {
        case 'small':
          setIconSize(12);
          break;
        case 'default':
          setIconSize(16);
          break;
        case 'huge':
          setIconSize(32);
          break;
        default:
          break;
      }
    } else if(typeof props.size === 'number'){
      setIconSize(props.size)
    }
  }, [props.size]);

  return (
    <svg className="icon" aria-hidden="true" style={{ fontSize: iconSize, color: props.color }}>
      <use xlinkHref={`#icon-${props.name}`}></use>
    </svg>
  );
};

export default React.memo(Icon);
