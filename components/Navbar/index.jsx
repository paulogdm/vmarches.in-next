import { useState } from 'react';
import cs from 'classnames';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import PropTypes from 'prop-types';
import { underlineRevealAnimation } from '/static/style/animations';
import Burger from './Burger';

const GridWithBreakpoints = styled(Grid)`
  > div > div > span {
    margin: ${theme('spaces.1')}px;
    padding: 4px 0;
    cursor: pointer;
  }

  .hide-md {
    @media (min-width: ${theme('breakpoints.sm')}px) {
      display: none!important;
    }
  }

  .hide-sm {
    @media (max-width: ${theme('breakpoints.sm')}px) {
      display: none!important;
    }
  }

  ${underlineRevealAnimation}
`;

const Navbar = ({
  router,
}) => {
  const [overlayisOpen, toggleOverlay] = useState(false);

  return (
    <GridWithBreakpoints fluid>
      <Row>
        <Col display="flex" alignItems="center">
          <Burger className="hide-md" isOpen={overlayisOpen} onClick={() => toggleOverlay(!overlayisOpen)} />
          <span
            className={
              cs(
                'hide-sm',
                'hvr-underline-reveal',
                { 'underline-reveal': router.route === '/' },
              )
            }
          >
            <Link href="/" prefetch>
              <a>home</a>
            </Link>
          </span>
          <span
            className={
              cs(
                'hide-sm',
                'hvr-underline-reveal',
                { 'underline-reveal': router.route === '/projects' },
              )
            }
          >
            <Link href="/projects" prefetch>
              <a>projects</a>
            </Link>
          </span>
        </Col>
      </Row>
    </GridWithBreakpoints>
  );
};

Navbar.propTypes = {
  router: PropTypes.object,
};

export default withRouter(Navbar);
