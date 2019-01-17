import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';

const Icon = styled.div`
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  display: inline-block;

  margin: 12px 8px;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${theme('primary')};
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;

      ${ifProp('isOpen', css`
        top: 9px;
        width: 0%;
        left: 50%;
      `)}
    }

    &:nth-child(2) {
      top: 9px;

      ${ifProp('isOpen', css`
        transform: rotate(45deg);
      `)}
    }

    &:nth-child(3) {
      top: 9px;

      ${ifProp('isOpen', css`
        transform: rotate(-45deg);
      `)}
    }

    &:nth-child(4) {
      top: 18px;

      ${ifProp('isOpen', css`
        top: 9px;
        width: 0%;
        left: 50%;
      `)}
    }
  }

`;

const Burger = ({ className = '', isOpen = false, onClick }) => (
  <Icon className={className} isOpen={isOpen} onClick={onClick}>
    <span />
    <span />
    <span />
    <span />
  </Icon>
);

Burger.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Burger;
