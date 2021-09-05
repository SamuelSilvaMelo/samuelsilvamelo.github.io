import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/common/skillCard.css';

const SkillCard = ({ imgPath, imgAlt }) => {
  const [showStackTag, setShowStacktag] = useState(false);

  return (
    <div className="skill-card">
      <span
        className={
          showStackTag
          ? 'show-stack-name'
          : 'hidden-stack-name'
        }
      >
        { imgAlt.split('-Logo') }
      </span>
      <div
        onMouseEnter={ () => setShowStacktag(true) }
        onMouseLeave={ () => setShowStacktag(false)}
      >
        <img src={ imgPath } alt={ imgAlt } />
      </div>
    </div>
  )
};

SkillCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
}

export default SkillCard;
