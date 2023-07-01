import React from 'react'
import PropTypes from 'prop-types'



function Button({ children, version, type, isDesabled }) {
  return (
    <button type = {type} disabled={isDesabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: 'false'
}

Button.prototype = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDesabled: PropTypes.bool,
}

export default Button