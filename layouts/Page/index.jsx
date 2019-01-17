import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Footer, Navbar } from 'components';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  > #content {
    display: flex;
    justify-content: center;
  }
`;

const Page = ({ children = false }) => (
  <Flex>
    <Navbar />
    <div id="content">
      {children}
    </div>
    <Footer />
  </Flex>
);

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
