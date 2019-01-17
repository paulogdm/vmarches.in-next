import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { prop, theme } from 'styled-tools';

const Colored = styled.span`
  color: ${prop('color', theme('icons'))}
  padding: 5px;

  min-width: 35px;
  min-height: 35px;
  &:hover {
    color: ${prop('hoverColor', 'white')};
  }
`;

const Icon = ({
  color,
  customClass = '',
  icon,
  hoverColor,
  pulse = false,
  size = '2x',
  spin = false,
}) => (
  <Colored
    color={color}
    hoverColor={hoverColor}
  >
    <FontAwesomeIcon
      className={customClass}
      icon={icon}
      pulse={pulse}
      size={size}
      spin={spin}
    />
  </Colored>
);

Icon.propTypes = {
  color: PropTypes.string,
  customClass: PropTypes.string,
  icon: PropTypes.string,
  hoverColor: PropTypes.string,
  pulse: PropTypes.bool,
  size: PropTypes.string,
  spin: PropTypes.bool,
};

export default Icon;
