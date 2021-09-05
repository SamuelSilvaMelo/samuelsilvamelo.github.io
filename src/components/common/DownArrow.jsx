import React from 'react';
import PropTypes from 'prop-types';
import downArrow from '../../img/down-arrow.png'
import '../../style/common/downArrow.css'

const DownArrow = ({ location }) => (
  <a className="down-arrow" href={ location }>
    <img src={ downArrow } alt="" />
  </a>
);

DownArrow.propTypes = {
  location: PropTypes.string.isRequired,
};

export default DownArrow;
