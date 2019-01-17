import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Grid, Col, Row } from '@smooth-ui/core-sc';

const Footer = styled.footer`
  background-color: ${theme('primary')};
  color: white;
  min-height: 50px;

  > div > div {
    flex-direction: row-reverse;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      text-align: right;

      > span {
        padding: 10px;
      }
    }
  }
`;

export default () => (
  <Footer>
    <Grid fluid>
      <Row className="justify-content-between">
        <Col>
          <span>
            <div>
              <small>
                Copyright © {new Date().getFullYear()}
              </small>
            </div>
            <div>
              <small>
              Vinicius Marchesin Araujo
              </small>
            </div>
          </span>
        </Col>
      </Row>
    </Grid>
  </Footer>
);
