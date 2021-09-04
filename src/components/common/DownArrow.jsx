import React from 'react';
import downArrow from '../../img/down-arrow.png'
import '../../style/common/downArrow.css'

const DownArrow = () => (
  <a className="down-arrow" href="#about">
    <img src={ downArrow } alt="" />
  </a>
);

export default DownArrow;
