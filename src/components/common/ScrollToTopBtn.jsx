import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../../style/common/scrollToTopBtn.css';
import * as RiIcons from 'react-icons/ri';

// How to make a Scroll To Top button with React.js: 
// https://www.youtube.com/watch?v=0jgl5L8yeTw
// https://www.npmjs.com/package/react-use

const ScrollToTopBtn = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 600) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0 })

  return (
    <div
      className={ visible ? "scroll-top" : "scroll-top-disabled" }
      onClick={ scrollToTop }
    >
      <a href="#home">
        <RiIcons.RiArrowUpSLine />
      </a>
    </div>
  )
}

export default ScrollToTopBtn;
