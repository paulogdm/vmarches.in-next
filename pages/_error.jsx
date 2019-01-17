import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, prop } from 'styled-tools';
import Link from 'next/link';
import { hangAnimation, noiseAnimation } from '/static/style/animations';

// Idea taken from https://codepen.io/kaypooma/pen/ehfjC
const Oops = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${theme('white')};

  text-align: center;
  font-style: italic;

  background: #1f1f1f;
  overflow: hidden;

  z-index: 9999;

  & + footer, & + nav {
    display: none;
  }

  .error {
    text-align: center;
    font-size: 95px;
    width: 100px;
    height: 150px;
    line-height: 60px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -86px;
    right: 0;
    animation: noise 2s linear infinite;
    overflow: default;

    &:after {
      content: '${prop('statusCode')}';
      font-size: 105px;
      width: 150px;
      line-height: 60px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      color: blue;
      animation: noise-1 .2s linear infinite;
    }

    &:before {
      content: '${prop('statusCode')}';
      font-size: 100px;
      width: 100px;
      line-height: 60px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      color: red;
      animation: noise-2 .2s linear infinite;
    }
  }

  .info {
    font-size: 15px;
    width: 300px;
    height: 120px;
    margin: auto;
    position: absolute;
    top: 140px;
    bottom: 0;
    left: 0;
    right: 0;
    animation: noise-3 1s linear infinite;
  }

  a {
    border: 2px solid ${theme('white')};
    border-radius: 4px;
    color: ${theme('white')};
    text-decoration: none;

    font-size: 15px;
    width: 200px;
    height: 60px;
    line-height: 58px;
    margin: auto;
    position: absolute;
    top: 200px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  ${hangAnimation}
  ${noiseAnimation}
`;

class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    const grawlixes = ['$#!%', 'F*#k'];
    const grawlix = grawlixes[Math.floor(Math.random() * grawlixes.length)];

    let statusMessage = '';

    switch (statusCode) {
      case 404:
        statusMessage = 'Looks like the page you are trying to access either ran away or doesn\'t exist.';
        break;
      default:
        statusMessage = 'We encountered a problem. Don\'t worry, we didn\'t steal your cookies.';
    }

    return (
      <Oops statusCode={statusCode}>
        <div className="error">{statusCode}</div>
        <div className="info">{statusMessage}</div>
        <Link href="/" prefetch>
          <a className="hvr-hang">{grawlix} go back</a>
        </Link>
      </Oops>
    );
  }
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
