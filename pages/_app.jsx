import { Fragment } from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { theme as _theme } from 'styled-tools';
import { globalStyle, createGlobalStyle, ThemeProvider } from '@smooth-ui/core-sc';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

import theme from 'themes';

library.add(faAt, faGithub, faFacebookF, faLinkedinIn, faTelegramPlane);

const GlobalStyle = createGlobalStyle`
  ${globalStyle()}

  @font-face {
    font-family: 'HK Nova Medium Narrow';
    src:  url('/static/fonts/HKNova-MediumNarrow.eot');
    src:  url('/static/fonts/HKNova-MediumNarrow.otf') format('opentype'),
          url('/static/fonts/HKNova-MediumNarrow.woff2') format('woff2'),
          url('/static/fonts/HKNova-MediumNarrow.woff') format('woff'),
          url('/static/fonts/HKNova-MediumNarrow.ttf') format('truetype');
  }
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    background-color: ${_theme('bgColor')};
    font-family: 'HK Nova Medium Narrow', 'Roboto', sans-serif;
    height: 100vh;

    #__next {
      height: 100%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>vmarches.in</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
          </Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
