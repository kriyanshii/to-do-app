import React from 'react';
import PropTypes from 'prop-types';

function Card({children, checked}) {
  return (
    <div className= {`card`}>
      {children}
    </div>
  )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Card