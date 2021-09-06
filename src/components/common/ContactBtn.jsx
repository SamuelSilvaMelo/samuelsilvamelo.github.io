import React from 'react';
import PropTypes from 'prop-types';

const ContactBtn = ({ link, img, name }) => (
  <a
    className="contact-btn"
    href={ link }
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={ img }
      alt={ `${name}-Logo`}
    />
    { name }
  </a>
);

ContactBtn.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nam: PropTypes.string.isRequired,
};

export default ContactBtn;
