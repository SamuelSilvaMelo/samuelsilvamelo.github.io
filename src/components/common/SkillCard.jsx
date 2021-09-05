import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/common/skillCard.css';

const SkillCard = ({ imgPath, stackName }) => {
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
        { stackName }
      </span>
      <div
        onMouseEnter={ () => setShowStacktag(true) }
        onMouseLeave={ () => setShowStacktag(false)}
      >
        <img src={ imgPath } alt={ `${stackName}-Logo` } />
      </div>
    </div>
  )
};

SkillCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  stackName: PropTypes.string.isRequired,
}

export default SkillCard;
