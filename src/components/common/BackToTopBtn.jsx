import React from 'react';
import '../../style/common/backToTopBtn.css';
import * as RiIcons from 'react-icons/ri';

const BackToTopBtn = () => {
  return (
    <div
      className="scroll-top"
    >
      <a href="#home">
        <RiIcons.RiArrowUpSLine />
      </a>
    </div>
  )
}

export default BackToTopBtn;
